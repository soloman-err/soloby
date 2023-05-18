import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";

const Root = () => {
  return (
    <div className="container mx-auto flex flex-col justify-between h-screen">
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Root;
