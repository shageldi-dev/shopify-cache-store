import "./navbar.css";
import React from "react";
import { Container } from "@mui/material";
import AppLogo from "./AppLogo";
import { Row, Typography } from "antd";
import SyncButton from "./SyncButton";
import { Mobile } from "../adaptive/Adaptive";
import useDevice from "../../hooks/useDevice";

const Navbar: React.FC = () => {
  const device = useDevice();
  return (
    <div className={`app-navbar ${device}`}>
      <Container fixed>
        <Row justify={"space-between"} align={"middle"}>
          <AppLogo />
          <Mobile>
            <Typography id="mobile-title">Shopify</Typography>
          </Mobile>
          <SyncButton />
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
