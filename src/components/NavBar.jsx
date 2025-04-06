import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="absolute top-0  z-10 w-full ">
      <ul className="text-white md:text-2xl flex flex-wrap justify-between p-4 md:py-6 px-8 md:px-12 items-center ">
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
