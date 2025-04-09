import React from "react";

function Login() {
    return (
    <AuthContainer>
        
    <AuthInput value={email} placeholder="Enter your email" type="email" onChange={(e)=>setEmail(e.target.value)}  />
    <AuthInput value={password} placeholder="Enter your password" type="password" onChange={(e)=>setPassword(e.target.value)}  />

    <button onClick={createUser} className='bg-white cursor-pointer'>Sign Up</button>
</AuthContainer>
    )

}

export default Login;
