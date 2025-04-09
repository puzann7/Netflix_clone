import React, { useState } from 'react'
import AuthContainer from '../Small components/AuthContainer'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase/firebase'
import AuthInput from '../Small components/AuthInput';

const auth = getAuth(app);

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = ()=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(value=>alert("success"))
        .catch(value=>alert("failed"))
        console.log(email);
        console.log(password);



    }

  return (
    <AuthContainer>
        <AuthInput value={email} placeholder="Enter your email" type="email" onChange={(e)=>setEmail(e.target.value)}  />
        <AuthInput value={password} placeholder="Enter your password" type="password" onChange={(e)=>setPassword(e.target.value)}  />

        <button onClick={createUser} className='bg-white cursor-pointer'>Sign Up</button>
    </AuthContainer>
  )
}

export default Signup
