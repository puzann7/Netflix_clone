import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import React from 'react'

function Loader() {
  return (
    <div className='h-screen w-screenl bg-black transition-opacity duration-800'>
    <div className='scale-25'>
      <DotLottieReact
      src="https://lottie.host/f3d060e2-ba55-4f99-807a-aa82389a34bb/5u92JE2FMF.lottie"
      loop
      autoplay
      speed={2}
    />
</div>
</div>
  )
}

export default Loader
