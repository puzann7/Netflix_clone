import React from 'react'

function AuthContainer({children, className}) {
  return (
    <div className={`min-h-screen inset-0 ${className}   relative backdrop-brightness-50  min-w-screen bg-[url(assets/background.jpg)] bg-cover `}>
        {children}
        </div>
  )
}

export default AuthContainer
