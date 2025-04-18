import React from 'react'

function Footer() {
    console.log('hey');

  return (
    <div className='h-[12vh] backdrop-brightness-70 font-["poppins"] bg-black/40  text-gray-400 font-light absolute w-full bottom-0 z-20 '>
      <div className='flex h-full w-full justify-center items-center'>
       Copyright &copy; Poojan Bhatt
      </div>
    </div>
  )
}

export default Footer
