import React from "react";
import Carousel from "../../components/Carousel";
import { useLoaderData } from "react-router-dom";
import ToyCard from "./ToyCard";
import ShopTab from "./ShopTab";

const Home = () => {
  const allToys = useLoaderData();
  // console.log(allToys);

  return (
    <div className="">
      {/* Banner */}
      <header className="w-[90%] md:w-[80%] mx-auto mt-10">
        <Carousel></Carousel>
      </header>

      {/* Shop by category */}
      <section className="mt-20">
        <h1 className="text-center font-bold text-3xl mb-5 uppercase">
          'Play By Category
        </h1>

        <ShopTab></ShopTab>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {allToys.map((toy) => (
            <ToyCard key={toy._id} toy={toy}></ToyCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
