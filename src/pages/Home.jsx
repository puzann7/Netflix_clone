import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

import { genreMap} from "../data/apiUrl";

import useMovieData from "../contexts/Movie Category/movieContext";

import Previews from "../components/Previews";
import Category from "../components/Category";


function Home() {
  const { trendings } = useMovieData();

  const [mostTrendingMovie, setMostTrendingMovie] = useState({});
  useEffect(() => {
    trendings.length > 0 && setMostTrendingMovie(trendings[0]);
  }, [trendings]);
  const homePosterImage = `${import.meta.env.VITE_IMG_URL}original/${mostTrendingMovie.poster_path}`;

  //   const getMostTrendingMovie = async () => {
  //     const trendings = await fetchTrending();
  //     setMostTrendingMovie(trendings[0]);
  //   };
  //   getMostTrendingMovie();

  // const {trendings} = useMovieData();
  // console.log(trendings);

  return (
    <>
      <div className="container bg-black relative min-h-screen  min-w-full flex-wrap  ">
        <NavBar />
        <div className="hidden lg:block h-[75vh] relative  ">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover align-middle relative "
          >
            <source
              src="../../public/assets/homeTrailer (2).mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div class="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        </div>
        <div
          style={{ backgroundImage: `url(${homePosterImage})` }}
          className="h-[60vh] w-full lg:hidden  bg-center md:bg-top  bg-cover relative"
        >
          <div class="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        </div>
        <h1 className="text-white md:text-2xl lg:hidden  flex justify-center gap-2">
          <img className="w-6  md:w-8" src="/assets/icons/one.png" alt="" />{" "}
          Trending Today
        </h1>
        <div className=" lg:absolute
      lg:top-[25vh] left-[3vw]  hidden lg:block text-white ">
            <h1 className="lg:text-5xl mb-8 lg:font-bold">Oppenheimer</h1>
            <div className="w-2/3">The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.</div>
        </div>
        <div
          className="flex  text-white justify-around mx-4 lg:mx-8 my-8
      lg:justify-start lg:gap-5 lg:absolute lg:top-[50vh]   "
        >
          <div></div>
          <div className="md:text-2xl lg:hidden">
            <img
              className="w-5 md:w-8 m-auto"
              src="../../public/assets/icons/plus.png"
              alt=""
            />
            My List
          </div>
          <div
            className=" bg-[#C4C4C4] md:text-2xl lg:bg-white rounded-sm flex items-center
        gap-2 text-black font-semibold px-6 lg:px-8  lg:py-2 relative cursor-pointer"
          >
            <img className="w-4 md:w-6 " src="/assets/icons/play.png" alt="" />
            <span> Play</span>
          </div>
          <div className="md:text-2xl cursor-pointer lg:text-2xl lg:flex lg:items-center lg:px-8 lg:gap-2 lg:rounded-sm  lg:bg-white/25 lg:backdrop-blur-md">
            <img
              className="w-6 md:w-10 lg:w-6 m-auto"
              src="../../public/assets/icons/info.png"
              alt=""
            />
            Info
          </div>
        </div>
        <div className="lg:hidden">
          <Previews />
        </div>
        <div className="lg:ml-8">
          {Object.keys(genreMap).map((genre) => (
            <Category key={genre} categoryName={genre} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
