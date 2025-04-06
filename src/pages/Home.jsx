import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { fetchTrending } from "../data/fetchReq";
import { genreMap, IMG_URL } from "../data/apiUrl";
import MoviePreview from "../Small components/MoviePreview";
import useMovieData from "../contexts/Movie Category/movieContext";
import { MovieContextProvider } from "../contexts/Movie Category/movieContext";
import Previews from "../components/Previews";
import CategoryPreview from "../Small components/CategoryPreview";
import Category from "../components/Category";
import { useId } from "react";

function Home() {
  const { trendings } = useMovieData();
  const categoryKey = useId();
  const [mostTrendingMovie, setMostTrendingMovie] = useState({});
  useEffect(() => {
    trendings.length > 0 && setMostTrendingMovie(trendings[0]);
  }, [trendings]);
  const homePosterImage = `${IMG_URL}original/${mostTrendingMovie.poster_path}`;

  //   const getMostTrendingMovie = async () => {
  //     const trendings = await fetchTrending();
  //     setMostTrendingMovie(trendings[0]);
  //   };
  //   getMostTrendingMovie();

  // const {trendings} = useMovieData();
  // console.log(trendings);

  return (
    <div className="container bg-black relative min-h-screen flex-wrap  ">
      <div
        style={{ backgroundImage: `url(${homePosterImage})` }}
        className="h-[60vh] w-full  bg-center bg-cover relative"
      >
        <div class="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        <NavBar />
      </div>
      <h1 className="text-white  flex justify-center gap-2">
        <img className="w-6 " src="/assets/icons/one.png" alt="" /> Trending
        Today
      </h1>
      <div className="flex text-white justify-around mx-4 my-8 ">
        <div className="">
          <img
            className="w-5 m-auto"
            src="../../public/assets/icons/plus.png"
            alt=""
          />
          My List
        </div>
        <div className="h-10 w-22 bg-[#C4C4C4] rounded-lg flex justify-end items-center text-black font-semibold px-3.5 relative cursor-pointer">
          <img
            className="scale-20 absolute left-1/2 top-1/2 -translate-x-[70%] -translate-y-1/2"
            src="/assets/icons/play.png"
            alt=""
          />
          Play
        </div>
        <div className="">
          <img
            className="w-6 m-auto"
            src="../../public/assets/icons/info.png"
            alt=""
          />
          Info
        </div>
      </div>
      <div><Previews /></div>
     <div>
        {Object.keys(genreMap).map((genre)=>(
            <Category key={genre} categoryName={genre} />
        ))}
     </div>

    </div>
  );
}

export default Home;
