import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import GetProductParams from 'src/interfaces/request/get-product.params';

@Injectable()
export class PublicApiService {
  constructor(
    public readonly elastic: ElasticsearchService,
    public readonly config: ConfigService,
  ) {}

  async getProducts(params: GetProductParams) {
    let query: any = {};
    if (params.search) {
      query = {
        query: {
          match: {
            title: params.search,
          },
        },
      };
    }
    const squery = {
      from: (Number(params.page) - 1) * Number(params.limit),
      size: Number(params.limit),
      index: this.config.get<string>('elasticsearch.indexName'),
      ...query,
      sort: [
        {
          createdAt: {
            order: 'desc',
          },
        },
      ],
    };
    console.log(JSON.stringify(squery));
    const result = await this.elastic.search(squery);
    return {
      isDone: result.hits.hits.length <= 0,
      products: result.hits.hits.map((it) => it._source),
    };
  }
}
