import React from "react";
import { NavLink } from "react-router-dom";
import Profile from "./Profile";

const NavBar = () => {
  return (
    <div className="absolute top-0  z-10 w-full lg:flex py-4  px-8 md:px-6  justify-between  ">
      <ul className="text-white md:text-2xl lg:text-sm flex flex-wrap justify-between lg:justify-start lg:gap-8 items-center  ">
        <NavLink to="/home">
        <picture>
            <source media="(min-width: 768px)" srcSet="../../public/assets/netflix_logo.png" />
          <img
            className="w-10 lg:w-36 "
            src="/assets/image-removebg-preview.png"
            alt="not valid"
          />
          </picture>
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/tvshows">TV Shows</NavLink>
        <NavLink to="/tvshows">My List </NavLink>
      </ul>
      <div className="hidden lg:flex lg:items-center lg:gap-8 ">
       <NavLink to="/search"> <img className="w-5 h-5 cursor-pointer" src="assets/icons/search.png" /></NavLink>
        <img className="w-5 h-5 cursor-pointer" src="assets/icons/bell.png" alt="" />
        <Profile className="hidden lg:block"/>
      </div>
    </div>
  );
};

export default NavBar;
