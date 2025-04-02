import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul className="text-white">
        <NavLink to="/home">
          <img src="../assets/netflix_logo.png" alt="" />
        </NavLink>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/tvshows">TV Shows</NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
