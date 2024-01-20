import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  ElasticsearchModule,
  ElasticsearchModuleOptions,
} from '@nestjs/elasticsearch';

/**
 * Setup default connection in the application
 * @param config {ConfigService}
 */

const defaultConnection = (
  configService: ConfigService,
): ElasticsearchModuleOptions => {
  return {
    nodes: configService.get<string[]>('elasticsearch.nodes'),
    tls: {
      rejectUnauthorized: false,
    },
    auth: {
      username: configService.get<string>('elasticsearch.username'),
      password: configService.get<string>('elasticsearch.password'),
    },
  };
};

export const elasticsearchProviders = [
  ElasticsearchModule.registerAsync({
    imports: [ConfigModule],
    useFactory: defaultConnection,
    inject: [ConfigService],
  }),
];
