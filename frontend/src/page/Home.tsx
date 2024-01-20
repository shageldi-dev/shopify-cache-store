/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import CommonScreen from "../components/state/CommonScreen";
import { useGetProductsQuery } from "../store/products/product.slice";
import ProductList from "../components/product/ProductList";
import Header from "../components/header/Header";
import { Space } from "antd";
import { Product } from "../types/product";

const Home: React.FC = () => {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState("");
  const limit = 20;
  const { data, error, isLoading, refetch } = useGetProductsQuery({
    search: search,
    page: page,
    limit: limit,
  });
  const [products, setProducts] = useState<Product[] | undefined>([]);

  useEffect(() => {
    if (data && data.products!.length > 0) {
      setProducts([...products!, ...data.products!]);
    } else {
      if (data) {
        setHasMore(!data.isDone);
      }
    }
  }, [data]);

  return (
    <Space size={"large"} direction="vertical" style={{ minWidth: "100%" }}>
      <Header
        onSearchChange={(value) => {
          setHasMore(true);
          setProducts([]);
          setPage(1);
          setSearch(value);
          setTimeout(() => {
            refetch();
          }, 1000);
        }}
      />

      <CommonScreen
        loading={isLoading}
        error={{
          message: error,
          title: `Error api call`,
          onClick: () => {
            refetch();
          },
        }}
        data={data}
        onSuccess={() => (
          <ProductList
            products={products!}
            hasMore={hasMore}
            onRefresh={() => setPage(1)}
            onNext={() => setPage(page + 1)}
          />
        )}
      />
    </Space>
  );
};

export default Home;
