import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-2">
      <Link to="/">
        <h1 className="text-2xl font-bold">soloby</h1>
      </Link>
      <ul
        id="navul"
        className="flex font-bold space-x-2 uppercase divide-black"
      >
        <li>
          <a href="/allToys">All Toys</a>
        </li>
        <li>
          <a href="/myToys">My Toys</a>
        </li>
        <li>
          <a href="/addAToy">Add a Toy</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
      </ul>

      <div className="space-x-2">
        <button className="btn">login</button>
        <button className="btn">logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
