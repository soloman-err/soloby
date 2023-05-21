import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

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
        <h1 className="custom-title text-4xl font-bold">soloby</h1>
      </Link>
      <ul className="hidden md:flex flex-col md:flex-row font-bold md:space-x-10 uppercase divide-black">
        <li
          className={
            location.pathname === "/allToys"
              ? "border-b-4 border-slate-900"
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
                  ? "border-b-4 border-slate-900"
                  : ""
              }
            >
              <a href="/myToys">My Toys</a>
            </li>
            <li
              className={
                location.pathname === "/addAToy"
                  ? "border-b-4 border-slate-900"
                  : ""
              }
            >
              <a href="/addAToy">Add a Toy</a>
            </li>
          </>
        )}
        <li
          className={
            location.pathname === "/blog" ? "border-b-4 border-slate-900" : ""
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
          className={`bg-gray-200 fixed top-12 p-2 left-0 h-full w-56 transition-transform duration-500 ease-in-out z-50 flex flex-col space-y-2`}
        >
          <ul className="flex flex-col font-bold md:space-x-0 space-y-1 uppercase">
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
          <div className="space-x-2">
            {user ? (
              <div className="flex flex-col items-start gap-2">
                <img
                  className="w-10 h-10 rounded-lg"
                  src={user.photoURL}
                  alt=""
                />
                <button onClick={handleLogout} className="btn btn-sm">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <Link to="/login">
                  <button className="btn btn-sm">login</button>
                </Link>
                <Link to="/register">
                  <button className="btn btn-sm">Register</button>
                </Link>
              </div>
            )}
          </div>
        </aside>
      )}

      <div className="space-x-2 hidden md:static md:flex">
        {user ? (
          <div className="flex items-center gap-2">
            <img
              className="w-8 h-8 rounded border border-slate-400"
              src={
                user.photoURL ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_3BNZw4G45qsnyRTopol8ESLnkfejmN_WcA&usqp=CAU"
              }
              alt="Users-profile-image"
              title={(user && user.displayName) || user.email}
            />
            <button onClick={handleLogout} className="btn btn-sm">
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/login">
              <button className="btn btn-sm">login</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-sm">Register</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
