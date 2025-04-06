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
import { fetchMovieTrailer } from "../data/fetchReq";


function Home() {
  const { trendings } = useMovieData();

  const [mostTrendingMovie, setMostTrendingMovie] = useState({});
  const [trendingMovieTrailer, setTrendingMovieTrailer] = useState();
  useEffect(() => {
    trendings.length > 0 && setMostTrendingMovie(trendings[0]);
    const getTrailer = async ()=>{
        let res = await fetchMovieTrailer(mostTrendingMovie["id"]);
        console.log(res);

    }
    getTrailer();
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
    <div className="container bg-black relative min-h-screen min-w-full flex-wrap  ">
      <div
        style={{ backgroundImage: `url(${homePosterImage})` }}
        className="h-[60vh] w-full  bg-center md:bg-top  bg-cover relative"
      >
        <div class="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        <NavBar />
      </div>
      <h1 className="text-white md:text-2xl flex justify-center gap-2">
        <img className="w-6  md:w-8" src="/assets/icons/one.png" alt="" /> Trending
        Today
      </h1>
      <div className="flex text-white justify-around mx-4 my-8 ">
        <div className="md:text-2xl">
          <img
            className="w-5 md:w-8 m-auto"
            src="../../public/assets/icons/plus.png"
            alt=""
          />
          My List
        </div>
        <div className=" bg-[#C4C4C4] md:text-2xl rounded-lg flex items-center
        gap-2 text-black font-semibold px-6 relative cursor-pointer">
          <img
            className="w-4 md:w-6"
            src="/assets/icons/play.png"
            alt=""
          />
          <span> Play</span>
        </div>
        <div className="md:text-2xl">
          <img
            className="w-6 md:w-10 m-auto"
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
