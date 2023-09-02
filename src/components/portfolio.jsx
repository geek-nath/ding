import React from 'react'
import PfOne from '../assets/images/pf (1).jpg'
import PfTwo from '../assets/images/pf (2).jpg'
import PfThree from '../assets/images/pf (3).jpg'
import PfFour from '../assets/images/pf (4).jpg'
import PfFive from '../assets/images/pf (5).jpg'
import PfSix from '../assets/images/pf (6).jpg'

const Portfolio = () => {
  const porfilioData = [
    { image: PfOne, title: "Code Io" },
    { image: PfTwo, title: "Code Io" },
    { image: PfThree, title: "Code Io" },
    { image: PfFour, title: "Code Io" },
    { image: PfFive, title: "Code Io" },
    { image: PfSix, title: "Code Io" }
  ]
  return (
    <section className='portfolio'>
      <div className="portfolio_wrap">
        {porfilioData.map((data, index) => {
          const { image, title } = data;
          return (
            <div key={index} className='relative pf_card'>
              <img src={image} width={'100%'} alt={title} />
              <div className="pf_detail">
                <div className="text-white text-center">
                  {title}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio