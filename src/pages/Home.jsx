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
      className={`  h-[60%] w-full  bg-center bg-cover`}
    >
      <NavBar />
    </div>
      <h1 className="text-white text-center ">#1 Trending Today</h1>
      <div className="flex text-white justify-around p-4 ">
        <div>My List</div>
        <div>Play</div>
        <div>
            <img src="../../public/assets/icons/info.png" alt="" />
        Info</div>
      </div>
    </div>
  );
}

export default Home;
