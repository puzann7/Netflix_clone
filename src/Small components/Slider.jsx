import React from "react";

export const SliderLeft = ({slideRef, showSlider}) => {
    const SlideLeft = ()=>{
        slideRef.current.scrollBy({
            left:-600,
            behaviour: "smooth"
        });
      }
  return (
    <button
      onClick={SlideLeft}
      className="absolute cursor-pointer text-white px-4 py-2"
    >
      <img
        className={`w-8 h-8 bg-white transition duration-200 ease-in-out rounded-full p-[0.5px]  ${
          showSlider ? "opacity-100" : "opacity-0"
        } `}
        src="/assets/icons/arrow.png"
        alt=""
      />
    </button>
  );
};

export const SliderRight = ({slideRef, showSlider}) => {
    const SlideRight = ()=>{
        slideRef.current.scrollBy({
            left:600,
            behaviour: "smooth"
        });
      }
  return (
    <button
      onClick={SlideRight}
      className=" absolute cursor-pointer right-0 text-white px-4 py-2"
    >
      <img
        className={`w-8 h-8 bg-white transition duration-200 ease-in-out rounded-full p-[0.5px] rotate-180  ${
          showSlider ? "opacity-100" : "opacity-0"
        } `}
        src="/assets/icons/arrow.png"
        alt=""
      />
    </button>
  );
};
