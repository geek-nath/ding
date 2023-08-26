import React from 'react'
import ButtonUi from '../components/button'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <>
      <div className="container">
        <div className="hero_text_wrap">
          <div className="hero_text">
            <div className="text-gray-400 text-lg">
              Your notes are safe with us
            </div>
            <h1 className='text-gray-500 mt-5 text-4xl'>
              Need an e-Diary?. <br /> <span className='text-7xl font-bold text-gray-900'><span className='text-red-500'>Ding</span> is here for you.</span>
            </h1>
            <div className="mt-8">
              <Link to={'notes'} className='no-underline'>
                <ButtonUi
                  btnText={'Get Started!'}
                  btnLarge={true}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage