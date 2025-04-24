import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import useMovieData from "../contexts/Movie Category/movieContext";
import useMovies from "../hooks/useMovies";
import MediaDisplayIcon from "../Small components/MediaDisplayIcon";
const Movies = ()=>{
    const [pageNum, setPageNum] = useState(1);
    const {error, hasError, hasNextPage, results} = useMovies(pageNum);
    if(hasError) return <div>{error}</div>
    const lastMovieRef = useRef(null)
    const content = results.map((movie, index)=>{
        if(results.length === index+1){
           return  <MediaDisplayIcon key={`${movie.id}-${index}`}  backdrop={movie.backdrop_path} poster={movie.poster_path} ref={lastMovieRef}  />
        }
        return   <MediaDisplayIcon key={`${movie.id}-${index}`} backdrop={movie.backdrop_path} poster={movie.poster_path}  />
    })
    console.log(lastMovieRef);

  return(
    <div className="flex flex-wrap justify-center ">
    {content}
    </div>
  )
}

export default Movies;
