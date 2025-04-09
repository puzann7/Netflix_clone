import React from 'react'

function AuthContainer({children}) {
  return (
    <div className="min-h-screen inset-0   relative backdrop-brightness-50  min-w-full bg-[url(assets/background.jpg)] bg-cover ">
        {children}
        </div>
  )
}

export default AuthContainer
