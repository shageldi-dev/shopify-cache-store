import { ElasticsearchService } from '@nestjs/elasticsearch';

export class CheckElkIndexService {
  constructor(
    private readonly elkService: ElasticsearchService,
    private readonly indexName: string,
  ) {}

  async isExist(): Promise<boolean> {
    try {
      return await this.elkService.indices.exists({
        index: this.indexName,
      });
    } catch (err) {
      return false;
    }
  }
}
