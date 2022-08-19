import React from "react";
import { Link } from "react-router-dom";
// import "../index.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <Link to="/" className="navbar-brand ms-5">
        Byzero App
      </Link>
    </nav>
  );
};

export default Navbar;
