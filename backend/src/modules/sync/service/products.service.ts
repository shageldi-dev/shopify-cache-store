import { GraphQLClient } from '@shopify/graphql-client';
import ElasticSeederService from 'src/database/seeder/elastic-seeder.service';
import { ShopifyResponse } from 'src/interfaces/product/shopify-product.entity';

export default class ProductService {
  constructor(private readonly client: GraphQLClient) {}

  async startCaching(pageSize: number, seeder: ElasticSeederService) {
    let isDone = false;
    let cursor = undefined;
    const products: ShopifyResponse[][] = [];
    while (!isDone) {
      const result = await this.getProducts(pageSize, cursor);
      isDone = Array.from(result).length <= 0;
      if (!isDone) {
        cursor = Array.from(result).reverse()[0]['cursor'];
        products.push(result);
      }
    }
    const flattenedProducts: ShopifyResponse[] = products.flat(1);
    seeder.seed(flattenedProducts);
    return flattenedProducts;
  }

  async getProducts(
    pageSize: number,
    cursor: string,
  ): Promise<ShopifyResponse[]> {
    const productsQuery = `
      query ProductsQuery($pageSize: Int, $cursor: String) {
        products(first: $pageSize, after: $cursor) {
          edges {
            cursor
            node {
              id
              bodyHtml
              title
              images(first: 1) {
                edges {
                  node {
                    src
                  }
                }
              }
            }
          }
        }
      }
    `;

    const variables = {
      pageSize,
      cursor,
    };

    try {
      const { data, errors } = await this.client.request(productsQuery, {
        variables: variables,
      });
      if (errors) {
        console.error('GraphQL Errors:', errors);
      }

      return data?.products.edges.map(({ node, cursor }) => ({
        node,
        cursor,
      }));
    } catch (error) {
      console.error('Request Error:', error.message);
      throw error;
    }
  }
}
