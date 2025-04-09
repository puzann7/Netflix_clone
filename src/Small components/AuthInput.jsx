import React from 'react'

function AuthInput({className,placeholder,type,value,onChange}) {
  return (
    <div>
          <input
            type={type}
            className={`text-white bg-black/40 border-1 border-gray-500 transition duration-100 ease rounded-sm backdrop-brightness-40  px-4 py-2  ${className}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
    </div>
  )
}

export default AuthInput
