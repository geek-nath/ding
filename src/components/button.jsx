import React from 'react'

const Button = ({ variant, text, onClick, color, ringColor }) => {
  return (
    <>
      <button className={`py-3 px-6 rounded-md ring-1 outline-none ${ringColor} bg-${variant} ${color}`} onClick={onClick}>
        {text}
      </button>
    </>
  )
}

export default Button