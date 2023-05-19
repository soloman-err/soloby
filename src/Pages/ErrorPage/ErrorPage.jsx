import { Controls, Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { FaArrowLeft, FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="">
      <Player
        autoplay
        loop
        src="https://lottie.host/1f61cfb1-d07f-47fd-aa89-158578701020/2Vm1VXMJ9F.json"
        className="h-screen"
      ></Player>
      <div className="-translate-y-5">
        <Link to="/" className="flex items-center justify-center gap-1">
          <FaLongArrowAltLeft />
          <p className="font-bold">Back to home</p>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
