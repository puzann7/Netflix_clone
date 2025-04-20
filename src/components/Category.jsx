import React, { useState, useEffect } from "react";
import { fetchCategory } from "../data/fetchReq";
import MediaDisplayIcon from "../Small components/MediaDisplayIcon";
import { genreMap } from "../data/apiUrl";
import { useRef } from "react";
import { SliderLeft, SliderRight } from "../Small components/Slider";

function Category({ categoryName, ref}) {
  const categoryId = genreMap[categoryName];
  const slideRef = useRef(null)
  const [category, setCategory] = useState();
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    const getCategory = async () => {
      try {
        const res = await fetchCategory(categoryId);
        setCategory(res);
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, [categoryId]);



  return (
    <div onMouseOver={()=> setShowSlider(true)} onMouseLeave={()=>setShowSlider(false)} className="h-[30vh] w-auto pl-4  font-[Bebas_neue] relative tracking-widest">
      <h1 className="text-white font-bold md:text-2xl text-xl pb-2 capitalize">
        {categoryName}
      </h1>
      <div ref={slideRef} className="flex gap-1 scroll-smooth  lg:gap-4 items-center  overflow-x-scroll snap-x">
     <SliderLeft slideRef={slideRef} showSlider={showSlider} />
      <SliderRight slideRef={slideRef} showSlider={showSlider}/>
        {category &&
          category.map((movie) => (
            <CategoryPreview
              key={movie.id}
              backdrop={movie.backdrop_path}
              poster={movie.poster_path}
            />
          ))}
      </div>
    </div>
  );
}

export default Category;
