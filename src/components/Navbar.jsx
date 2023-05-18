import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-2">
      <h1 className="text-2xl font-bold">soloby</h1>
      <ul className="flex font-bold text-lg space-x-2">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
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
