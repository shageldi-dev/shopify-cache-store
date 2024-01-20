import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import shopifyClient from 'src/core/shopify.client';
import ElasticSeederService from 'src/database/seeder/elastic-seeder.service';
import ProductService from './service/products.service';

@Injectable()
export class SyncService {
  constructor(
    private readonly esService: ElasticsearchService,
    private readonly config: ConfigService,
  ) {}
  async sync() {
    const seeder = new ElasticSeederService(
      this.esService,
      this.config.get<string>('elasticsearch.indexName'),
    );
    const client = shopifyClient();
    const productService = new ProductService(client);
    return await productService.startCaching(20, seeder);
  }
}
