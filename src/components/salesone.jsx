import React from 'react'
import salesImageOne from '../assets/images/sales_one.png'
import { Link } from 'react-router-dom'
import Button from './button'

const SaleOne = () => {
  return (
    <>
      <section className='sales_one bg-gray-900'>
        <div className="container">
          <div className="sales_row_wrap">
            <div className="img_wrap">
              <img src={salesImageOne} width={'100%'} alt='iMac mockup' />
            </div>
            <div className="flex sales_wrap items-center h-full">
              <div className="text-white">
                <h3 className='text-3xl font-bold'>
                  Ding does <span>creative</span> works. <br /> We ready to help you.
                </h3>
                <p className="mt-5 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="mt-8">
                  <Link to={'/portfolio'} className='no-underline'>
                    <Button
                      variant={'red-500'}
                      text={'See Our Work'}
                      color={'text-white'}
                      ringColor={'ring-red-500'}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SaleOne