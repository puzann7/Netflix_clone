import React, { useState, useEffect } from "react";
import { fetchCategory } from "../data/fetchReq";
import CategoryPreview from "../Small components/CategoryPreview";
import { genreMap } from "../data/apiUrl";
import { useRef } from "react";

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
  const Slide = ()=>{
    slideRef.current.scrollBy({
        left:600,
        behaviour: "smooth"
    });
  }

  return (
    <div onMouseOver={()=> setShowSlider(true)} onMouseLeave={()=>setShowSlider(false)} className="h-[30vh] w-auto pl-4  font-[Bebas_neue] relative tracking-widest">
      <h1 className="text-white font-bold md:text-2xl text-xl pb-2 capitalize">
        {categoryName}
      </h1>
      <div ref={slideRef} className="flex gap-1 scroll-smooth  lg:gap-4 items-center  overflow-x-scroll snap-x">
      <button onClick={SlideLeft} className="absolute cursor-pointer text-white px-4 py-2">
        <img className={`w-8 h-8 bg-white transition duration-200 ease-in-out rounded-full p-[0.5px]  ${showSlider ? "opacity-100" : "opacity-0"} `} src="/assets/icons/arrow.png" alt="" />
      </button>
      <button onClick={SlideRight} className=" absolute cursor-pointer right-0 text-white px-4 py-2">
        <img className={`w-8 h-8 bg-white transition duration-200 ease-in-out rounded-full p-[0.5px] rotate-180  ${showSlider ? "opacity-100" : "opacity-0"} `} src="/assets/icons/arrow.png" alt="" />
      </button>
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
