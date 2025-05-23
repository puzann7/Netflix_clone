import React, { useState, useEffect } from "react";
import AuthContainer from "../Small components/AuthContainer";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../firebase/firebase";
import AuthInput from "../Small components/AuthInput";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth, {
  AuthContextProvider,
} from "../contexts/Authentication/authContext";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

const auth = getAuth(app);

function Signup() {
  const { signUpUserWithEmailAndPassword, signUpUserWithGoogle, error } = useAuth();
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <AuthContainer className="flex flex-col justify-center items-center ">
      <div className="w-[90%] h-[65vh] lg:w-[30%] rounded-lg  px-8 py-6 flex flex-col items-center gap-10 bg-black/40 backdrop-brightness-75 font-[poppins]">
        <h1 className="text-white lg:text-4xl text-xl font-semibold font-[bebas_neue] tracking-wider ">Sign Up</h1>
        <div className="flex flex-col gap-2">
          <AuthInput
            value={email}
            placeholder="Enter your email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-72"
          />
          <AuthInput
            value={password}
            placeholder="Enter your password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-72"
          />
          {error && <h1 className=" text-[#E50914] text-sm ">{error}</h1>}
        </div>
        <div className="flex flex-col w-72 gap-4  ">
          <button
            onClick={()=> signUpUserWithEmailAndPassword(email, password)}
            className="bg-[#E50914] text-white py-2 text-sm  cursor-pointer rounded-sm"
          >
            Sign Up
          </button>
          <h1 className="text-white text-center">OR</h1>
          <button
            onClick={() => signUpUserWithGoogle()}
            className="cursor-pointer py-2 bg-white/15 flex items-center justify-center rounded-sm gap-2"
          >
            <img
              src="/assets/icons/google.png"
              className="bg-transparent  w-6"
            />
            <h1 className="text-white ">Sign Up with Google</h1>
          </button>
        </div>
        <div className="text-white text-sm flex flex-col items-center">
          <div>Already have an account?</div>
          <button
            onClick={() => navigate("/login")}
            className="text-[#E50914]"
          >
            Login
          </button>
        </div>
      </div>
    </AuthContainer>
  );
}

export default Signup;
