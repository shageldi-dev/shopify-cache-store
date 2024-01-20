import { ElasticsearchService } from '@nestjs/elasticsearch';
import { CheckElkIndexService } from './check-elk-index.service';
import databaseMapping from './database.mapping';
import { ShopifyResponse } from 'src/interfaces/product/shopify-product.entity';
import { IngestService } from 'src/modules/sync/service/ingest.service';

export default class ElasticSeederService {
  constructor(
    private readonly elkService: ElasticsearchService,
    private readonly indexName: string,
  ) {}

  async seed(products: ShopifyResponse[]) {
    try {
      const checker = new CheckElkIndexService(this.elkService, this.indexName);
      if (!(await checker.isExist())) {
        await this.elkService.indices.create({
          index: this.indexName,
        });
        await this.elkService.indices.putMapping({
          index: this.indexName,
          body: {
            properties: {
              ...databaseMapping,
            },
          },
        });
      }
      const ingestService = new IngestService(this.elkService);
      await ingestService.ingestProducts(products, this.indexName);
    } catch (err) {
      console.error(`${err.message}`);
    }
  }
}
