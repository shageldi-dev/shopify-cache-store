import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import AuthRouter from "./AuthRouter";
import Home from "../../page/Home";
import About from "../../page/About";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<AuthRouter component={<Home />} />} />
          <Route path="about" element={<AuthRouter component={<About />} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
