import React from 'react'

function MoviePreview({ image}) {
  return (
    <div className=''>
        <img  className="w-[102px] h-[102px]   rounded-full object-cover object-top" src={image} alt="" />
    </div>
  )
}

export default MoviePreview
