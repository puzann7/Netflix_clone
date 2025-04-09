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
    const [password, setPassword ] = useState("");
    const loginUser = ()=>{
        signInWithEmailAndPassword(auth,email,password)
        .then(value=>navigate("/home"))
        .catch(err=>alert(err))
    }
    return (
    <AuthContainer>
    <AuthInput value={email} placeholder="Enter your email" type="email" onChange={(e)=>setEmail(e.target.value)}  />
    <AuthInput value={password} placeholder="Enter your password" type="password" onChange={(e)=>setPassword(e.target.value)}  />

    <button onClick={loginUser} className='bg-white cursor-pointer'>Sign Up</button>
</AuthContainer>
    )

}

export default Login;
