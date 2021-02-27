import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/Cocktail Categories">
        Cocktail Categories
      </NavLink>
      {" - "}
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/Cocktail List">
        Cocktail List
      </NavLink>
      {" - "}
    </div>
  );
}
