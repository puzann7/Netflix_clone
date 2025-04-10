import React, { useState, useEffect } from "react";
import { fetchCategory } from "../data/fetchReq";
import CategoryPreview from "../Small components/CategoryPreview";
import { genreMap } from "../data/apiUrl";

function Category({ categoryName}) {
  const categoryId = genreMap[categoryName];

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

  return (
    <div className="h-[30vh] w-auto pl-4  ">
      <h1 className="text-white font-bold md:text-2xl text-xl pb-2 capitalize">
        {categoryName}
      </h1>
      <div className="flex gap-1 lg:gap-4 items-center  overflow-x-scroll snap-x">
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
