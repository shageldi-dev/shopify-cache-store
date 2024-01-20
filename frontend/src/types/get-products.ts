import { Product } from "./product";

export default interface GetProducts {
  products: Product[] | undefined;
  isDone: boolean;
}
