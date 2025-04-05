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
      <h1 className="text-white  flex justify-center gap-2"><img className="w-6 " src="/assets/icons/one.png" alt="" /> Trending Today</h1>
      <div className="flex text-white justify-around mx-4 my-8 ">
        <div className="">
            <img className="w-5 m-auto" src="../../public/assets/icons/plus.png" alt="" />
             My List</div>
        <div className="h-10 w-20 bg-[#C4C4C4] rounded-lg flex justify-around text-center "><img className="scale-75" src="/assets/icons/play.png" alt="" />Play</div>
        <div className="">
            <img className="w-6 m-auto" src="../../public/assets/icons/info.png" alt="" />
        Info</div>
      </div>
    </div>
  );
}

export default Home;
