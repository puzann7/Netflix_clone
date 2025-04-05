import React, { useState, useEffect } from 'react'
import MoviePreview from '../Small components/MoviePreview'
import useMovieData from '../contexts/Movie Category/movieContext'
import { IMG_URL } from '../data/apiUrl';

function Previews() {
    const [trendingPoster, setTrendingPoster] = useState();
    const {trendings} = useMovieData();
    useEffect(() => {
        trendings.length>0 && setTrendingPoster(trendings.map((movie)=>{
           return movie.poster_path;
        }) )
    }, [trendings])
    console.log(trendingPoster);



  return (
    <div className='bg-red-500 h-[18vh] '>
        <h1 className='text-white'>Previews</h1>
    <div className=''>
        {trendingPoster && trendingPoster.map((poster)=>(
            <MoviePreview image={`${IMG_URL}${poster}`} />
        ))}
    </div>
    </div>
  )
}

export default Previews
