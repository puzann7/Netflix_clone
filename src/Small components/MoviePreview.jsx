import React from 'react'

function MoviePreview({ image}) {
  return (
    <div className='shrink-0'>
        <img  className="w-[102px] h-[102px] md:w-[170px] md:h-[170px]  rounded-full object-cover object-top" src={image} alt="" />
    </div>
  )
}

export default MoviePreview
