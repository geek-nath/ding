import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='py-5 bg-white'>
        <div className="container">
          <div className="block xl:flex lg:flex md:flex">
            <div className="mr-auto">
              <div className="text-gray-500">
                &copy; 2023. All rights reserved
              </div>
            </div>
            <div className="text-gray-500">
              Designed With ❤️ by <a href="." className='no-underline text-red-500'>Nathaniel</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer