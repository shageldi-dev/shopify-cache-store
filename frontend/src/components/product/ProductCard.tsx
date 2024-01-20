import React, { useEffect, useRef, useState } from "react";
import "./product.css";
import useDevice from "../../hooks/useDevice";
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
import { Row } from "antd";
import Loading from "../state/Loading";

interface IProps {
  product: Product;
}

const ProductCard: React.FC<IProps> = (props) => {
  const device = useDevice();
  const { token } = useToken();
  const [isOpen, setIsOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [loading, setLoading] = useState(true);

  function drawImageScaled(
    img: HTMLImageElement,
    ctx: CanvasRenderingContext2D
  ) {
    const canvas = ctx.canvas;
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.min(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }

  useEffect(() => {
    setLoading(true);
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const image = new Image();
      image.onload = () => {
        drawImageScaled(image, ctx!);
      };
      image.addEventListener("load", () => setLoading(false));
      image.addEventListener("error", () => setLoading(false));
      image.src = props.product.image || "";
    }
  }, [props.product]);
  return (
    <Card sx={{ borderRadius: "22px", width: "100%" }} elevation={0}>
      <CardActionArea onClick={() => setIsOpen(!isOpen)}>
        <ImageListItem>
          <canvas
            className={loading ? "loading-product" : `product-image ${device}`}
            ref={canvasRef}
          />
          {loading ? (
            <Row
              className={`product-image ${device}`}
              align={"middle"}
              justify={"center"}
            >
              <Loading />
            </Row>
          ) : null}
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
