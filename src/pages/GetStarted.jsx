import React from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase/firebase";
import AuthContainer from "../Small components/AuthContainer";
import AuthInput from "../Small components/AuthInput";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

function GetStarted() {
    const navigate = useNavigate();
  const signUpUser = () => {
    createUserWithEmailAndPassword(
      auth,
      "poojanbhatt7@gmail.com",
      "pass@123"
    ).then((value) => console.log(value));
  };
  return (
    <AuthContainer>
      <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent h-[40%] w-full "></div>
      <div className="absolute top-0 left-0 flex px-4 h-[8vh]  gap-[70%] items-center lg:justify-between  w-full lg:px-6">
        <picture>
          <source
            media="(min-width:768px)"
            srcSet="../../public/assets/netflix_logo.png"
          />
          <img
            src="../../public/assets/image-removebg-preview.png"
            className="lg:w-36 w-10"
            alt=""
          />
        </picture>
        <button className="bg-[#E50914] cursor-pointer rounded-sm lg:w-[4vw] font-semibold lg:text-[0.8rem] text-sm  text-white px-1 py-1">
          Sign In
        </button>
      </div>
      <div className="text-white  flex flex-col gap-5 justify-center w-full min-h-screen items-center">
        <h1 className="lg:text-6xl font-bold text-2xl mx-6 text-center capitalize">
          Unlimited movies, TV shows, and more
        </h1>
        <h1 className="lg:text-3xl text-lg">Watch anywhere. Cancel anytime.</h1>
        <h1 className="lg:text-xl text-sm">
          Ready to watch? Enter your email to create an account.
        </h1>
        <div className="flex gap-2">
        <AuthInput type="email" placeholder="Enter your email" className="lg:w-[30vw] lg:py-4"/>
          <button onClick={()=> navigate("/signup")} className="bg-[#E50914] cursor-pointer inline-block  rounded-sm lg:px-8 font-semibold  text-white px-4 py-2 ">
            Get started &gt;
          </button>
        </div>
      </div>
    </AuthContainer>
  );
}

export default GetStarted;
