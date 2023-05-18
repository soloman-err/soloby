import React from "react";
import {
  FaFacebook,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaNeuter,
  FaTwitter,
  FaTwitterSquare,
} from "react-icons/fa";
import PaymentPartners from "./PaymentPartners";

const Footer = () => {
  return (
    <footer className="pb-2 mt-5 px-10 bg-slate-900 text-white">
      {/* Top Layer */}
      <div className="bg-zinc-400 text-black font-bold pb-10 rounded-b-xl p-5">
        <div className="text-center w-[80%] mx-auto">
          <h2 className="font-bold text-lg lg:text-xl uppercase underline underline-offset-4">
            Our Payment Partners
          </h2>

          {/* Slider */}
          <PaymentPartners />
        </div>
      </div>

      {/* Bottom Layer */}
      <div className="mt-5 flex justify-around">
        <div>
          <p className="font-bold text-lg">Join soloby</p>
          <ul className="text-sm text-zinc-300">
            <li>Trial Kit</li>
            <li>Affiliate</li>
            <li>Contact us</li>
            <li>Wholesale & Bulk</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-lg">More of us</p>
          <ul className="text-sm text-zinc-300">
            <li>FAQs</li>
            <li>Company</li>
            <li>Our Story</li>
            <li>About us</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-lg">Learn</p>
          <ul className="text-sm text-zinc-300">
            <li>Versatility</li>
            <li>Eco Product</li>
            <li>Engine Maintenance</li>
            <li>Material Management</li>
          </ul>
        </div>
        <div>
          {/* Email contact */}
          <p className="font-bold text-lg">Get behind the wheel</p>
          <small className="text-zinc-300">
            Enter your e-mail to unlock 22% OFF
          </small>
          <div className="text-zinc-300">
            <span className="space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent border-b"
              />
              <input
                className="border px-1 rounded"
                type="submit"
                value="submit"
              />
            </span>
          </div>

          {/* Social contact */}
          <div className="mt-5 space-y-1">
            <h1>Follow us on</h1>
            <div className="flex gap-2">
              <FaTwitter />
              <FaLinkedin />
              <FaFacebookSquare />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright tag */}
      <div className="text-center text-zinc-500 border-t mt-2 border-slate-800">
        <small>&copy; 2077 soloby.co</small>
      </div>
    </footer>
  );
};

export default Footer;
