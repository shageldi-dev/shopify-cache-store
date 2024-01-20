interface ApiConfigProps {
  apiUrl: string;
}

interface ElasticsearchConfigProps {
  nodes: string[];
  indexName: string;
  username: string;
  password: string;
}

export interface ConfigProps {
  port: number;
  api: ApiConfigProps;
  elasticsearch: ElasticsearchConfigProps;
}
