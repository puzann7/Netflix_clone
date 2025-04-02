import axios from "axios";
import React, { useEffect } from "react";
import { fetchTrending } from "../data/fetchReq";
function Movies() {
    useEffect(()=>{
        const fetchData = async ()=>{
            const trendingMovies = await fetchTrending();
            console.log(trendingMovies);
        }
        fetchData()
    })
  return(
    <div>
        movies12
    </div>
  )
}

export default Movies;
