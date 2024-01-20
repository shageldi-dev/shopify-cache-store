import { MappingProperty } from '@elastic/elasticsearch/lib/api/types';

const databaseMapping: Record<string, MappingProperty> = {
  bodyHtml: {
    type: 'text',
  },
  title: {
    type: 'text',
    fields: {
      keyword: {
        type: 'keyword',
      },
    },
  },
  id: {
    type: 'keyword',
  },
  image: {
    type: 'text',
  },
  cursor: {
    type: 'text',
  },
  tags: {
    type: 'keyword',
  },
  prettyBody: {
    type: 'text',
  },
  textBody: {
    type: 'text',
  },
  createdAt: {
    type: 'date',
  },
};

export default databaseMapping;
