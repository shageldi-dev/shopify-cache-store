import { createGraphQLClient } from '@shopify/graphql-client';

const shopifyClient = () => {
  return createGraphQLClient({
    url: process.env.SHOPIFY_URL,
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY,
    },
    retries: 1,
  });
};

export default shopifyClient;
