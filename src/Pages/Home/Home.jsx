import React from "react";
import Carousel from "../../components/Carousel";
import { useLoaderData } from "react-router-dom";
import ToyCard from "./ToyCard";
import ShopTab from "./ShopTab";
import Aos from "aos";
import "aos/dist/aos.css";
import AosGallery from "./AosGallery";
import { Player } from "@lottiefiles/react-lottie-player";

const Home = () => {
  const allToys = useLoaderData();
  // console.log(allToys);

  Aos.init({
    duration: 200,
  });

  return (
    <div className="">
      {/* Banner */}
      <header className="w-[90%] md:w-[80%] mx-auto mt-10">
        <Carousel></Carousel>
      </header>

      {/* AOS Gallery */}
      <section className="relative my-20 lg:my-40 space-y-10">
        <h1
          style={{ fontFamily: "Audiowide" }}
          className="font-bold underline z-100 -rotate-3 text-3xl md:text-5xl lg:text-8xl italic uppercase text-center"
        >
          Wheel of Motion
          <Player
            loop
            autoplay
            speed={-2}
            className="w-40 animate-spin"
            src={"https://assets2.lottiefiles.com/packages/lf20_kecmw5x9.json"}
          />
        </h1>
        <AosGallery />
      </section>

      {/* Shop by category */}
      <section className="mt-20">
        <h1 className="text-center font-bold text-3xl mb-5 uppercase">
          'Play By Category
        </h1>

        <ShopTab></ShopTab>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* <div className="grid grid-cols-1 gap-5"> */}
          {allToys.map((toy) => (
            <ToyCard key={toy._id} toy={toy}></ToyCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
