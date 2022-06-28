import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <div className="logo">Bank Api</div>
      <div className="right-container">
        <NavLink to="/login" className="link" exact={true}>
          Login
        </NavLink>
        <NavLink to="/register" className="link" exact={true}>
          Sign Up
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
