export interface ShopifyResponse {
  node: Node;
  cursor: string;
}

export interface Node {
  id: string;
  bodyHtml: string;
  title: string;
  images: Images;
}

export interface Images {
  edges: Edge[];
}

export interface Edge {
  node: Node2;
}

export interface Node2 {
  src: string;
}
