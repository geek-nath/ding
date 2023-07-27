import React from 'react'

const Navbar = () => {

  const navbarButtonObj = [
    { name: 'For your' }, { name: 'Following' }, { name: 'Lifestyle' }
  ]

  return (
    <div className='bg-white shadow'>
      <div className='p-4'>
        <h1 className='text-2xl leading-8 font-semibold'>Home</h1>
      </div>
      <div className="mt-4">
        <div className="flex">
          {navbarButtonObj.map((data, index) => {
            return (
              <button key={index} className='w-full rounded-none hover:bg-red-50 hover:text-red-500 hover:border-b border-transparent hover:border-red-500 border-b py-4 duration-300'>
                {data.name}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Navbar