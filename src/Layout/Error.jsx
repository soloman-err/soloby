import React from "react";
import { Outlet } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Error;
