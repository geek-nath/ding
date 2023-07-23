import React, { useState } from 'react'
import * as BsIcons from 'react-icons/bs'

const PasswordInputs = () => {
  // show password function
  const [visibility, setVisibility] = useState(false);
  const showPassword = () => {
    setVisibility(!visibility);
  }

  // check if input form in active and update style
  const [style, setStyle] = useState(false);
  const isActive = () => {
    setStyle(true);
  }

  const isNotActive = () => {
    setStyle(false);
  }

  return (
    <>
      <div>
        <label htmlFor="password" className='block text-sm font-medium leading-6 text-gray-900'>Password</label>
        <div className={`mt-2 flex block w-full items-center items-center rounded-md border-0 text-gray-900 shadow-sm outline-none ring-inset ${style ? 'ring-2 ring-red-500' : 'ring-1 ring-gray-300'}`}>
          <input onBlur={isNotActive} onFocus={isActive} type={visibility ? "text" : "password"} name='password' id='password' autoComplete='current-password' required className='w-full p-2 rounded-md outline-none border-0 bg-transparent placeholder:text-grey-400 sm:text-sm sm:leading-6' />
          <div className='p-2 text-gray-500'>
            {visibility ? <BsIcons.BsEyeSlash onClick={showPassword} className='cursor-pointer' /> : <BsIcons.BsEye onClick={showPassword} className='cursor-pointer' />}
          </div>
        </div>
      </div>
    </>
  )
}

export default PasswordInputs