import React from 'react'
import { Link } from 'react-router-dom'
import Button from './button'

const SalesTwo = () => {
  return (
    <>
      <section className='sales_two'>
        <div className="sales_two_wrap">
          <div className="sales_two_img_wrap"></div>
          <div className="sales_two_content flex items-center">
            <div>
              <h1 className='text-white font-bold text-4xl'>
                We Make Your Dream
              </h1>
              <p className="mt-8 text-gray-200 leading-6 font-light text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..
              </p>
              <div className='mt-8'>
                <Link to={'/contact'} className="no-underline">
                  <Button
                    ringColor={'ring-white'}
                    text={'Contact Us'}
                    textColor={'text-white'}
                    hoverEffect={'hover:bg-white hover:text-gray-900'}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SalesTwo