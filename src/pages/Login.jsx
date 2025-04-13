import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/firebase";
import AuthContainer from "../Small components/AuthContainer";
import AuthInput from "../Small components/AuthInput";
import { redirect, useNavigate } from "react-router-dom";

const auth = getAuth(app);
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => navigate("/home"))
      .catch((err) => alert(err));
  };
  return (
    <AuthContainer className="flex flex-col justify-center items-center ">
      <div className="w-[90%] h-[60vh] lg:w-[30%]  px-8 py-6 flex flex-col items-center gap-10 bg-black/40 backdrop-brightness-75">
        <h1 className="text-white text-xl font-semibold ">Login</h1>
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
        </div>
        <div className="flex flex-col w-72 gap-4  ">
          <button
            onClick={loginUser}
            className="bg-[#E50914] text-white py-2 text-sm  cursor-pointer rounded-sm"
          >
            Log In
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
            <h1 className="text-white ">Login with Google</h1>
          </button>
        </div>
        <div className="text-white text-sm flex flex-col items-center">
          <div>New to netflix?</div>
          <button
            onClick={() => navigate("/signup")}
            className="text-[#E50914]"
          >
            Create an Account
          </button>
        </div>
      </div>
    </AuthContainer>
  );
}

export default Login;
