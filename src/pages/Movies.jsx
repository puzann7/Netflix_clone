import axios from "axios";
import React, { useEffect, useState } from "react";
import useMovieData from "../contexts/Movie Category/movieContext";
import { fetchAllMovies } from "../data/fetchReq";
function Movies() {
    const [page, setPage] = useState(2);
    useEffect(() => {
        fetchAllMovies(page)
    }, [page])


  return(
    <div>
    Movie section
    </div>
  )
}

export default Movies;
