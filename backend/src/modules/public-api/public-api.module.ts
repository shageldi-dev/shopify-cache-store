import { Module } from '@nestjs/common';
import { PublicApiService } from './public-api.service';
import { PublicApiController } from './public-api.controller';
import { elasticsearchProviders } from 'src/database/elastic.providers';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [...elasticsearchProviders, ConfigModule.forRoot()],
  controllers: [PublicApiController],
  providers: [PublicApiService],
})
export class PublicApiModule {}
