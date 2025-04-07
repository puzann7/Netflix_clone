import React, { useState, useEffect } from 'react'
import MoviePreview from '../Small components/MoviePreview'
import useMovieData from '../contexts/Movie Category/movieContext'

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
        <h1 className='text-white font-bold text-xl md:text-2xl pb-2'>Previews</h1>
    <div className='flex gap-3 lg:gap-6 overflow-x-scroll'>
        {trendings && trendings.map((movie)=>(
            <MoviePreview key={movie.id} image={`${import.meta.env.VITE_IMG_URL}w200/${movie.poster_path}`} />
        ))}
    </div>
    </div>
  )
}

export default Previews
