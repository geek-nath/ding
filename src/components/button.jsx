import React from 'react'

const Button = ({ buttonText, addedClassName }) => {
  return (
    <>
      <button className={`p-2 rounded-md bg-red-500 text-white ring-1 ring-red-500 border-0 shadow-sm ${addedClassName}`}>
        {buttonText}
      </button>
    </>
  )
}

export default Button