import React from 'react'

const ButtonUi = ({ btnText, btnLarge, onClick }) => {
  return (
    <button className={btnLarge ? 'bg-red-500 py-4 px-7 text-lg rounded-lg text-white hover:bg-red-600 duration-300 outline-none' : 'bg-red-500 py-3 px-5 rounded-lg text-white hover:bg-red-600 duration-300 outline-none'} onClick={onClick}>
      {btnText}
    </button>
  )
}

export default ButtonUi