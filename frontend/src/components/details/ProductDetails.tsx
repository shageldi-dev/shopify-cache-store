import React from "react";
import { Col, Modal, Row, Typography } from "antd";
import { createStyles, useTheme } from "antd-style";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./details.css";
import { formatBodyHtml } from "../../core/html-formatter";
import useDevice from "../../hooks/useDevice";
import { Product } from "../../types/product";

const useStyle = createStyles(({ token }) => ({
  "my-modal-body": {
    padding: token.paddingSM,
    overflowY: "auto",
    overflowX: "hidden",
    maxHeight: "calc(100vh - 130px)",
  },
  "my-modal-body-mobile": {
    padding: token.paddingSM,
    overflowY: "auto",
    overflowX: "hidden",
    maxHeight: "calc(100vh - 140px)",
  },
  "my-modal-mask": {
    boxShadow: `inset 0 0 15px #fff`,
  },
  "my-modal-header": {
    borderBottom: `1px dotted ${token.colorPrimary}`,
  },
  "my-modal-footer": {
    color: token.colorPrimary,
  },
  "my-modal-content": {},
}));

interface IProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetails: React.FC<IProps> = (props) => {
  const { styles } = useStyle();
  const token = useTheme();
  const device = useDevice();

  const classNames = {
    body: styles[
      device === "mobile" ? `my-modal-body-mobile` : `my-modal-body`
    ],
    mask: styles["my-modal-mask"],
    header: styles["my-modal-header"],
    footer: styles["my-modal-footer"],
    content: styles["my-modal-content"],
  };

  const modalStyles = {
    header: {
      borderLeft: `5px solid ${token.colorPrimary}`,
      borderRadius: 0,
      paddingInlineStart: 5,
    },
    body: {
      borderRadius: 5,
      paddingTop: "12px",
    },
    mask: {
      backdropFilter: "blur(10px)",
    },
    footer: {},
    content: {},
  };

  return (
    <>
      <Modal
        title={props.product.title}
        open={props.isOpen}
        onCancel={() => props.onClose()}
        footer=""
        classNames={classNames}
        styles={modalStyles}
        style={{ top: 20, marginBottom: "20px" }}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24}>
            <LazyLoadImage
              className={`details-image`}
              effect="blur"
              placeholderSrc="/logo.svg"
              src={props.product.image}
            />
          </Col>
          <Col xs={24}>
            <Typography className="details-date">
              {`${props.product.createdAt}`}
            </Typography>
            <div
              className="details-body"
              dangerouslySetInnerHTML={{
                __html: formatBodyHtml(props.product.prettyBody),
              }}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default ProductDetails;
