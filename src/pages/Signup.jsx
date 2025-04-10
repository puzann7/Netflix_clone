import React, { useState, useEffect } from "react";
import AuthContainer from "../Small components/AuthContainer";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/firebase";
import AuthInput from "../Small components/AuthInput";
import { useLocation } from "react-router-dom";

const auth = getAuth(app);

function Signup() {
    const location = useLocation();

const [email, setEmail] = useState("");
  useEffect(() => {
      const SignUpemail = location.state?.email || '';
        setEmail(SignUpemail)
      console.log(email);

  }, [])

  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => alert("success"))
      .catch((value) => alert("failed"));
    console.log(email);
    console.log(password);
  };

  return (
    <AuthContainer>
      <AuthInput
        value={email}
        placeholder="Enter your email"
        type="email"
        readOnly
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
    </AuthContainer>
  );
}

export default Signup;
