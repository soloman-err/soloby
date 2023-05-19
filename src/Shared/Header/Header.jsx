import React, { useContext } from "react";
import Navbar from "../../components/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Header;
