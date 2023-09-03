import React from 'react'
import * as BsIcons from 'react-icons/bs'

const Services = () => {
  const servicesDetails = [
    { title: "Website Design", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.", icon: <BsIcons.BsPencil /> },
    { title: "Marketing", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.", icon: <BsIcons.BsEnvelopeOpen /> },
    { title: "Photography", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.", icon: <BsIcons.BsCamera /> },
    { title: "Branding", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.", icon: <BsIcons.BsTags /> },
    { title: "Developement", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.", icon: <BsIcons.BsCodeSlash /> },
    { title: "Search Engine Optimization", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.", icon: <BsIcons.BsSearch /> }
  ]
  return (
    <>
      <section className='services bg-white'>
        <div className="container">
          <div className="services_wrap">
            {servicesDetails.map((services, index) => {
              const { title, text, icon } = services;
              return (
                <div key={index} className='flex service_card gap-4'>
                  <div className="ico_box text-3xl text-red-500">
                    {icon}
                  </div>
                  <div className="main_wrap">
                    <h4 className='text-gray-900 text-lg font-bold'>
                      {title}
                    </h4>
                    <p className="text-sm leading-6 font-light text-gray-400">
                      {text}
                    </p>
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

export default Services