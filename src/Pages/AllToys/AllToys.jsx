import React from "react";
import { useLoaderData } from "react-router-dom";
import ToyCard from "../../components/ToyCard";

const AllToys = () => {
  const allToys = useLoaderData();
  console.log(allToys);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5">
      {allToys.map((toy) => (
        <ToyCard key={toy._id} toy={toy}></ToyCard>
      ))}
    </div>
  );
};

export default AllToys;
