import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaBars, FaCross, FaHamburger } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  // const [isActive, setIsActive] = useState("");

  const location = useLocation();
  console.log(location);

  // const handleActiveState = (state) => {
  //   setIsActive(state);
  // };

  // Navbar toggle:
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  //User logout:
  const handleLogout = () => {
    logOut();
  };

  return (
    <nav className="flex flex-row-reverse md:flex-row items-center justify-between md:items-center p-3">
      <Link to="/">
        <h1 className="custom-title text-3xl font-bold">soloby</h1>
      </Link>
      <ul
        id="navul"
        className="hidden md:flex flex-col md:flex-row font-bold md:space-x-10 uppercase divide-black"
      >
        <li
          className={
            location.pathname === "/allToys"
              ? "underline underline-offset-4"
              : ""
          }
        >
          <a href="/allToys">All Toys</a>
        </li>
        {user && (
          <>
            <li
              className={
                location.pathname === "/myToys"
                  ? "underline underline-offset-4"
                  : ""
              }
            >
              <a href="/myToys">My Toys</a>
            </li>
            <li
              className={
                location.pathname === "/addAToy"
                  ? "underline underline-offset-4"
                  : ""
              }
            >
              <a href="/addAToy">Add a Toy</a>
            </li>
          </>
        )}
        <li
          className={
            location.pathname === "/blog" ? "underline underline-offset-4" : ""
          }
        >
          <a href="/blog">Blog</a>
        </li>
      </ul>

      <div className="md:hidden" onClick={toggleNav}>
        {isOpen ? <ImCross size={20} /> : <FaBars size={20} />}
      </div>
      {isOpen && (
        <aside
          className={`bg-gray-200 fixed top-12 p-2 left-0 h-full w-56 transition-transform duration-500 ease-in-out z-50 flex`}
        >
          <ul
            id="navul"
            className="flex flex-col font-bold md:space-x-0 space-y-1 uppercase"
          >
            <li>
              <a href="/allToys">All Toys</a>
            </li>
            {user && (
              <>
                <li>
                  <a href="/myToys">My Toys</a>
                </li>
                <li>
                  <a href="/addAToy">Add a Toy</a>
                </li>
              </>
            )}
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </aside>
      )}

      <div className="space-x-2 hidden md:static md:flex">
        {user ? (
          <div className="flex items-center gap-2">
            <img className="w-10 h-10 rounded-lg" src={user.photoURL} alt="" />
            <button onClick={handleLogout} className="btn">
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/login">
              <button className="btn">login</button>
            </Link>
            <Link to="/register">
              <button className="btn">Register</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
