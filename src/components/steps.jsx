import React from 'react'
import * as AiIcons from 'react-icons/ai'

const Steps = () => {
  const stepsCardsData = [
    { title: "Idea", step: "First Step", details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.", icon: <AiIcons.AiOutlineBulb /> },
    { title: "Design", step: "Second Step", details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.", icon: <AiIcons.AiOutlineDesktop /> },
    { title: "Develop", step: "Third Step", details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.", icon: <AiIcons.AiOutlineCode /> },
    { title: "Result", step: "Fourth Step", details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.", icon: <AiIcons.AiOutlineFlag /> }
  ]
  return (
    <>
      <section className="steps">
        <div className="container">
          <div className="steps_card_wrap">
            {stepsCardsData.map((cards, index) => {
              const { title, step, details, icon } = cards;
              return (
                <div className='steps_card duration-300 hover:shadow-lg relative ring-1 ring-gray-200' key={index}>
                  <div className="text-center">
                    <h1 className='text-red-500 text-8xl'>
                      {icon}
                    </h1>
                    <h1 className='text-gray-900 font-bold text-2xl'>
                      {title}
                    </h1>
                    <div className='text-gray-400 text-sm'>
                      {step}
                    </div>
                  </div>
                  <div className="details_wrap">
                    <div className="text-center text-white">
                      <p className='font-light'>
                        {details}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Steps