import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toyDetails = useLoaderData();
  return (
    <div>
      <h1>Toy Details</h1>
    </div>
  );
};

export default ToyDetails;
