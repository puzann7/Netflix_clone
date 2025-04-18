import React, { useState, useEffect } from "react";
import { fetchCategory } from "../data/fetchReq";
import CategoryPreview from "../Small components/CategoryPreview";
import { genreMap } from "../data/apiUrl";
import { useRef } from "react";

function Category({ categoryName, ref}) {
  const categoryId = genreMap[categoryName];
  const slideRef = useRef(null)

  const [category, setCategory] = useState();
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
    <div className="h-[30vh] w-auto pl-4   font-[Bebas_neue] tracking-widest">
      <h1 className="text-white font-bold md:text-2xl text-xl pb-2 capitalize">
        {categoryName}
      </h1>
      <div ref={slideRef} className="flex gap-1 scroll-smooth relative  lg:gap-4 items-center  overflow-x-scroll snap-x">
      <button onClick={Slide} className="bg-blue-700 absolute text-white px-4 py-2"> </button>
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
