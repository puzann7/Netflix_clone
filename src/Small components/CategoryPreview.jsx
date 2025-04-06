import React from 'react'

function CategoryPreview({image}) {
  return (
    <div className='shrink-0'>
    <img  className="w-[102px] h-[160px] md:w-[170px] md:h-[272px]  rounded-sm object-cover object-top" src={image} alt="error" />
</div>
  )
}

export default CategoryPreview
