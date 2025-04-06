import React, { useState, useEffect } from 'react'
import MoviePreview from '../Small components/MoviePreview'
import useMovieData from '../contexts/Movie Category/movieContext'
import { IMG_URL } from '../data/apiUrl';

function Previews() {
    const {trendings} = useMovieData();


    // useEffect(() => {
    //     trendings.length>0 && setTrendingPoster(trendings.map((movie)=>{
    //        return movie.poster_path;
    //     }) )
    // }, [trendings])
    // console.log(trendingPoster);



  return (
    <div className='h-[20vh] w-auto pl-4  '>
        <h1 className='text-white font-bold text-xl pb-2'>Previews</h1>
    <div className='flex gap-3 overflow-x-scroll'>
        {trendings && trendings.map((movie)=>(
            <MoviePreview key={movie.id} image={`${IMG_URL}w200/${movie.poster_path}`} />
        ))}
    </div>
    </div>
  )
}

export default Previews
