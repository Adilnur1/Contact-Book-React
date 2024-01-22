import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink className="link" to={"/"}>
        HOME
      </NavLink>
      <NavLink className="link" to={"/add"}>
        ADDBOOK
      </NavLink>
      <NavLink className="link" to={"/edit"}>
        EDIT
      </NavLink>
    </nav>
  );
};

export default Navbar;
