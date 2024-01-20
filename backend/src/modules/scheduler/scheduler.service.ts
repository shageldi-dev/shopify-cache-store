import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { SyncService } from '../sync/sync.service';

@Injectable()
export class SchedulerService {
  job: CronJob | undefined = undefined;
  constructor(private readonly syncService: SyncService) {}

  @Cron(CronExpression.EVERY_5_MINUTES)
  handleEvery10Minutes() {
    console.log('Task executed every 10 minutes');
    this.syncService.sync();
  }
}
