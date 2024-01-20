import React from "react";
import { Product } from "../../types/product";
import ProductCard from "./ProductCard";
import { Row, Space, Typography } from "antd";
import "./products.css";
import useDevice from "../../hooks/useDevice";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../state/Loading";
import { Grid } from "@mui/material";

interface IProps {
  products: Product[];
  hasMore: boolean;
  onRefresh: () => void;
  onNext: () => void;
}

const ProductList: React.FC<IProps> = (props) => {
  const device = useDevice();
  return (
    <Space direction="vertical" size={"large"} style={{ minWidth: "100%" }}>
      <Typography className={`products-title ${device}`}>Products</Typography>

      <InfiniteScroll
        dataLength={props.products!.length}
        next={props.onNext}
        style={{
          minWidth: "100%",
          overflowX: "hidden",
          overflowY: "hidden",
        }}
        hasMore={props.hasMore}
        loader={
          <Row justify={"center"} align={"middle"} style={{ padding: "16px" }}>
            <Loading />
          </Row>
        }
        refreshFunction={props.onRefresh}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
      >
        <Grid container sx={{ minWidth: "100%" }} spacing={2}>
          {props.products.map((product, index) => {
            return (
              <Grid
                item
                xs={6}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                key={`product-${index}`}
              >
                <ProductCard product={product} />
              </Grid>
            );
          })}
        </Grid>
      </InfiniteScroll>
    </Space>
  );
};

export default ProductList;
