import React from 'react'

const FormInputs = ({ type, labelText, forInput, autoComplete }) => {
  return (
    <>
      <div>
        <label htmlFor={forInput} className='block text-sm font-medium leading-6 text-gray-900'>{labelText}</label>
        <div className="mt-2">
          <input type={type} name={forInput} id={forInput} autoComplete={autoComplete} required className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-grey-400 focus:ring-2 focus:ring-red-500 sm:text-sm sm:leading-6' />
        </div>
      </div>
    </>
  )
}

export default FormInputs