import React from 'react'

const Button = ({ variant, text, onClick, color, ringColor, textColor, hoverEffect }) => {
  return (
    <>
      <button className={`py-3 px-6 rounded-md ring-1 outline-none duration-300 ${hoverEffect} ${textColor} ${ringColor} bg-${variant} ${color}`} style={{ width: "fit-content" }} onClick={onClick}>
        {text}
      </button>
    </>
  )
}

export default Button