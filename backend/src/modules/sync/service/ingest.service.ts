import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { ShopifyResponse } from 'src/interfaces/product/shopify-product.entity';
import DataFormatter from './data-formatter.service';

@Injectable()
export class IngestService {
  constructor(private readonly elastic: ElasticsearchService) {}

  async ingestProducts(products: ShopifyResponse[], indexName: string) {
    const formatter = new DataFormatter();
    const bulkBody = products.flatMap((product) => [
      { index: { _index: indexName, _id: product.node.id } },
      {
        id: product.node.id,
        bodyHtml: product.node.bodyHtml,
        title: product.node.title,
        image: product.node.images.edges[0].node.src,
        cursor: product.cursor,
        tags: formatter.tagGenerator(product.node.bodyHtml),
        prettyBody: formatter.clearLinks(product.node.bodyHtml),
        textBody: formatter.htmlToText(product.node.bodyHtml),
        createdAt: new Date(),
      },
    ]);

    try {
      const { errors } = await this.elastic.bulk({
        index: indexName,
        body: bulkBody,
      });

      if (errors) {
        console.error('Error in Elasticsearch bulk ingestion:', errors);
      } else {
        console.log('Products successfully ingested into Elasticsearch!');
      }
    } catch (error) {
      console.error('Error in Elasticsearch bulk request:', error.message);
    }
  }
}
