import React, { useState } from 'react'

function Profile({className}) {
    const [showProfile, setShowProfile] = useState(false)

  return (
    <div className={`${className} relative`}>
      <img onClick={()=>setShowProfile(!showProfile)} className='w-8 rounded-xs cursor-pointer' src="assets/profile.jpg" alt="" />
      <div className={`bg-black/40 backdrop-brightness-50 w-52 transition duration-300 rounded-tr-none absolute right-0 rounded-md ${showProfile ? 'h-92 opacity-100' : 'max-h-0 opacity-0'}`}>
        
      </div>
    </div>
  )
}

export default Profile
