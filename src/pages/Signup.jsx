import React, { useState, useEffect } from "react";
import AuthContainer from "../Small components/AuthContainer";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup,  } from "firebase/auth";
import { app } from "../firebase/firebase";
import AuthInput from "../Small components/AuthInput";
import { useLocation } from "react-router-dom";
import useAuth, { AuthContextProvider } from "../contexts/Authentication/authContext";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

const auth = getAuth(app);

function Signup() {
    const {signUpUserWithEmailAndPassword, signUpUserWithGoogle} = useAuth()

const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    signUpUserWithEmailAndPassword(email,password)
      .then((value) => alert("success"))
      .catch((value) => alert("failed"));
  };
  return (
    <AuthContainer>
      <AuthInput
        value={email}
        placeholder="Enter your email"
        type="email"
        onChange={(e)=>setEmail(e.target.value)}
      />
      <AuthInput
        value={password}
        placeholder="Enter your password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={createUser} className="bg-white cursor-pointer">
        Sign Up
      </button>
      <button onClick={()=>signUpUserWithGoogle()} className="bg-white cursor-pointer">
        Sign Up with google
      </button>
    </AuthContainer>
  );
}

export default Signup;
