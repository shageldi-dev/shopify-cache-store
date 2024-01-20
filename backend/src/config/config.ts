import { ConfigProps } from 'src/interfaces/config.interface';

export const config = (): ConfigProps => ({
  port: parseInt(process.env.PORT, 10) || 8080,
  api: {
    apiUrl: process.env.API_URL,
  },
  elasticsearch: {
    indexName: process.env.ELK_INDEX || 'spotify_cache',
    nodes: process.env.ELK_NODES.split(',') || ['http://localhost:9200'],
    password: process.env.ELK_PASSWORD || '',
    username: process.env.ELK_USERNAME || '',
  },
});
