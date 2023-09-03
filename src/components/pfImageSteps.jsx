import React from 'react'
import MobilePngImage from '../assets/images/deco_1.png'

const PfImageSteps = () => {
  const pfStepOneData = [
    { title: "In Page Portfolio", step: 1, details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "Responsive layout", step: 2, details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "React.js", step: 3, details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
  ]
  const pfStepTwoData = [
    { title: "Web3", step: 4, details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "Animated Elements", step: 5, details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "Tailwind css / Bootstrap powerd", step: 6, details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
  ]
  return (
    <>
      <section className='pf_image_step'>
        <div className="container">
          <div className="pf_steps_wrap">
            <div className='pf_steps_one_wrap flex items-center'>
              <div className="pf_steps_content">
                {pfStepOneData.map((data, index) => {
                  const { title, step, details } = data;
                  return (
                    <div key={index} className='flex gap-5 mt-9'>
                      <div className='text-right'>
                        <h1 className='text-gray-900 capitalize font-bold text-xl'>
                          {title}
                        </h1>
                        <p className="mt-3 font-light leading-6 text-gray-400 text-sm">
                          {details}
                        </p>
                      </div>
                      <div className='step_badge text-white'>
                        {step}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='pf_steps_img_wrap flex justify-center'>
              <img src={MobilePngImage} width={'70%'} alt='responsive design' />
            </div>
            <div className='pf_steps_two_wrap flex items-center'>
              <div className="pf_steps_content">
                {pfStepTwoData.map((data, index) => {
                  const { title, step, details } = data;
                  return (
                    <div key={index} className='flex gap-5 mt-9'>
                      <div className='step_badge text-white'>
                        {step}
                      </div>
                      <div>
                        <h1 className='text-gray-900 capitalize font-bold text-xl'>
                          {title}
                        </h1>
                        <p className="mt-3 font-light leading-6 text-gray-400 text-sm">
                          {details}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PfImageSteps