import React, { useState, useEffect } from 'react'
import { fetchCategory } from '../data/fetchReq'
import CategoryPreview from '../Small components/CategoryPreview';
import { IMG_URL } from '../data/apiUrl';
function Category({categoryId, image}) {
    const [category, setCategory] = useState();
    useEffect(() => {
        const getCategory = async()=>{
            try {
                const res = await fetchCategory(categoryId);
                setCategory(res);
            } catch (error) {
                console.log(error);
            }
        }
        getCategory();
    }, [categoryId])


  return (
    <div className='h-[30vh] w-auto pl-4  '>
        <h1 className='text-white font-bold text-xl pb-2'>Previews</h1>
    <div className='flex gap-3 items-center  overflow-x-scroll'>
        {category && category.map((movie)=>(
            <CategoryPreview key={movie.id} image={`${IMG_URL}${movie.poster_path}`} />
        ))}
    </div>
    </div>
  )
}

export default Category
