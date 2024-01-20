import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { Container } from "@mui/material";
import BottomBar from "../bottom-navigation/BottomBar";
import { Row } from "antd";

const MainLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Container fixed style={{ paddingTop: "80px", paddingBottom: "100px" }}>
        <Outlet />
      </Container>
      <Row align={"middle"} justify={"center"}>
        <BottomBar />
      </Row>
    </div>
  );
};

export default MainLayout;
