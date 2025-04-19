import axios from "axios";
import React, { useEffect } from "react";
import useMovieData from "../contexts/Movie Category/movieContext";
function Movies() {
   const {trendingMovies} = useMovieData();
   console.log(trendingMovies);

  return(
    <div>
        movies12
    </div>
  )
}

export default Movies;
