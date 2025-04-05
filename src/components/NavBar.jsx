import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="">
      <ul className="text-white flex flex-wrap justify-between p-4 items-center ">
        <NavLink to="/home">
          <img
            className="w-10 "
            src="/assets/image-removebg-preview.png"
            alt="not valid"
          />
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/tvshows">TV Shows</NavLink>
        <NavLink to="/tvshows">My List </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
