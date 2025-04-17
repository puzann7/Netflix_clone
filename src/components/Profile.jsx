import React, { useState, useEffect } from 'react'
import { getAuth, } from 'firebase/auth'
import { app } from '../firebase/firebase'
import useAuth from '../contexts/Authentication/authContext'


function Profile({className}) {
    const [showProfile, setShowProfile] = useState(false)
    const [user, setUser] = useState("")
    const auth = getAuth(app);
    const {logOutUser} = useAuth();
    useEffect(() => {
    auth.currentUser && setUser(auth.currentUser);
    }, [])


  return (
    <div className={`${className} relative`}>
      <img onClick={()=>setShowProfile(!showProfile)} className='w-8 rounded-xs cursor-pointer' src="assets/profile.jpg" alt="" />
      <div className={`bg-white w-72 px-2 py-4 transition duration-300 rounded-tr-none absolute right-0 flex flex-col gap-8 cursor-pointer rounded-md ${showProfile ? 'opacity-100' : ' opacity-0'}`}>
        <div className='flex  items-center gap-2 h-[10%]'>
            <img src="assets/profile.jpg" className='w-8 h-8 rounded-sm' alt="" />
            <div>
            <h1>{user.displayName}</h1>
            <h1>{user.email}</h1>
            </div>

        </div>
        <div className='flex justify-center'>
            <button onClick={()=>logOutUser()}  className='bg-blue-600 text-white rounded-sm px-2 py-1'>Log out</button>
        </div>
      </div>
    </div>
  )
}

export default Profile
