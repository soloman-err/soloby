import React from "react";
import ToyTable from "./ToyTable";
import SearchBar from "./SearchBar";

const AllToys = () => {
  return (
    <div className="mb-auto">
      <SearchBar />
      <ToyTable />
    </div>
  );
};

export default AllToys;
