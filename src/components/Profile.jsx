import React, { useState, useEffect } from 'react'
import { getAuth } from 'firebase/auth'
import { app } from '../firebase/firebase'

function Profile({className}) {
    const [showProfile, setShowProfile] = useState(false)
    const [user, setUser] = useState("")
    const auth = getAuth(app);
    useEffect(() => {
    auth.currentUser && setUser(auth.currentUser);
    }, [])


  return (
    <div className={`${className} relative`}>
      <img onClick={()=>setShowProfile(!showProfile)} className='w-8 rounded-xs cursor-pointer' src="assets/profile.jpg" alt="" />
      <div className={`bg-white w-72 px-2 py-4 transition duration-300 rounded-tr-none absolute right-0 rounded-md ${showProfile ? 'opacity-100' : ' opacity-0'}`}>
        <div className='flex  items-center gap-2 h-[10%]'>
            <img src="assets/profile.jpg" className='w-8 h-8 rounded-sm' alt="" />
            <h1>{user.displayName}</h1>
        </div>
      </div>
    </div>
  )
}

export default Profile
