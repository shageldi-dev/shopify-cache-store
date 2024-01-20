import { Module } from '@nestjs/common';
import { SyncModule } from './modules/sync/sync.module';
import { ConfigModule } from '@nestjs/config';
import { config } from './config/config';
import { ScheduleModule } from '@nestjs/schedule';
import { SchedulerModule } from './modules/scheduler/scheduler.module';
import { PublicApiModule } from './modules/public-api/public-api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    ScheduleModule.forRoot(),
    SyncModule,
    SchedulerModule,
    PublicApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
