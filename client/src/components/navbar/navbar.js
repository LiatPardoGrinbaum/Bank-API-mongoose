import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useContext, useState } from "react";
import { MyContext } from "../../context/MyContext";

const Navbar = () => {
  const { loggedUser } = useContext(MyContext);
  console.log(loggedUser);

  const logOut = () => {
    localStorage.removeItem("user");
  };

  return (
    <nav className="navbar-wrapper">
      <div className="logo">
        <NavLink to="/" className="link" exact={true}>
          Bank Api
        </NavLink>
      </div>
      <div className="right-container">
        {loggedUser ? (
          <>
            <a href="/login" className="link" onClick={logOut}>
              Logout
            </a>
          </>
        ) : (
          <>
            <NavLink to="/login" className="link" exact={true}>
              Login
            </NavLink>
            <NavLink to="/register" className="link" exact={true}>
              Sign Up
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
