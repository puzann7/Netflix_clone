import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { fetchTrending } from "../data/fetchReq";
import { IMG_URL } from "../data/apiUrl";

function Home() {
  const [mostTrendingMovie, setMostTrendingMovie] = useState({});
  const homePosterImage = `${IMG_URL}${mostTrendingMovie.poster_path}`;
  const getMostTrendingMovie = async () => {
    const trendings = await fetchTrending();
    setMostTrendingMovie(trendings.data.results[0]);
  };
  getMostTrendingMovie();

  return (
    <div className="container bg-black h-screen w-screen  ">
    <div
      style={{ backgroundImage: `url(${homePosterImage})` }}
      className="h-[60%] w-full  bg-center bg-cover relative"
    >
        <div class="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
      <NavBar />
    </div>
      <h1 className="text-white  flex justify-center gap-2"><img className="w-6 " src="/assets/icons/one.png" alt="" /> Trending Today</h1>
      <div className="flex text-white justify-around mx-4 my-8 ">
        <div className="">
            <img className="w-5 m-auto" src="../../public/assets/icons/plus.png" alt="" />
             My List</div>
        <div className="h-10 w-22 bg-[#C4C4C4] rounded-lg flex justify-end items-center text-black font-semibold px-2.5 relative"><img className="scale-25 absolute left-1/2 top-1/2 -translate-x-[65%] -translate-y-1/2" src="/assets/icons/play.png" alt="" />Play</div>
        <div className="">
            <img className="w-6 m-auto" src="../../public/assets/icons/info.png" alt="" />
        Info</div>
      </div>
    </div>
  );
}

export default Home;
