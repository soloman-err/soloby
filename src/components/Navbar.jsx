import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  //User logout:
  const handleLogout = () => {
    logOut();
  };

  return (
    <nav className="flex justify-between items-center py-2">
      <Link to="/">
        <h1 className="text-3xl font-bold">soloby</h1>
      </Link>
      <ul
        id="navul"
        className="flex font-bold space-x-2 uppercase divide-black"
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

      <div className="space-x-2">
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
