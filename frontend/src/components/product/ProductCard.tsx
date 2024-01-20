import React, { useState } from "react";
import "./product.css";
import useDevice from "../../hooks/useDevice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  Card,
  CardActionArea,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { useToken } from "../../hooks/useToken";
import ProductDetails from "../details/ProductDetails";
import { Product } from "../../types/product";

interface IProps {
  product: Product;
}

const ProductCard: React.FC<IProps> = (props) => {
  const device = useDevice();
  const { token } = useToken();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card sx={{ borderRadius: "22px", width: "100%" }} elevation={0}>
      <CardActionArea onClick={() => setIsOpen(!isOpen)}>
        <ImageListItem>
          <LazyLoadImage
            className={`product-image ${device}`}
            effect="blur"
            placeholderSrc="/logo.svg"
            src={props.product.image}
          />
          <ImageListItemBar
            sx={{
              backgroundColor: token.colorPrimary,
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
            className="title"
            title={props.product.title}
          />
        </ImageListItem>
      </CardActionArea>
      <ProductDetails
        isOpen={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        product={props.product}
      />
    </Card>
  );
};

export default ProductCard;
