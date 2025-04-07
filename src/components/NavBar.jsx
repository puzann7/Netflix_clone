import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="absolute top-0  z-10 w-full ">
      <ul className="text-white md:text-2xl flex flex-wrap justify-between p-4 md:py-6 px-8 md:px-12 items-center ">
        <NavLink to="/home">
        <picture>
            <source media="(min-width: 768px)" srcSet="../../public/assets/netflix_logo.png" />
          <img
            className="w-10 lg:w-48 "
            src="/assets/image-removebg-preview.png"
            alt="not valid"
          />
          </picture>
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/tvshows">TV Shows</NavLink>
        <NavLink to="/tvshows">My List </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
