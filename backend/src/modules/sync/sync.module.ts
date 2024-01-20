import { Module } from '@nestjs/common';
import { SyncService } from './sync.service';
import { SyncController } from './sync.controller';
import { ConfigModule } from '@nestjs/config';
import { elasticsearchProviders } from 'src/database/elastic.providers';

@Module({
  imports: [...elasticsearchProviders, ConfigModule.forRoot()],
  controllers: [SyncController],
  providers: [SyncService],
  exports: [SyncService],
})
export class SyncModule {}
