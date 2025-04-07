import React from 'react'

function CategoryPreview({backdrop,poster}) {
    const posterLink = `${import.meta.env.VITE_IMG_URL}w500/${poster}`;
    const backdropLink = `${import.meta.env.VITE_IMG_URL}w500/${backdrop}`;

  return (
    <div className='shrink-0 snap-start  cursor-pointer w-[102px] h-[160px] md:w-[170px] md:h-[272px] lg:w-[218px] lg:h-[123px]  '>
        <picture>
        <source media="(min-width: 768px)" srcSet={backdropLink} />
    <img  className=" w-full rounded-sm object-cover   lg:object-center" src={posterLink} alt="error" />
    </picture>
</div>
  )
}

export default CategoryPreview
