import React from 'react'

const Achivements = () => {
  const achivementsData = [
    { title: "Completed Projects", value: 54 },
    { title: "Happy Clients", value: 30 },
    { title: "Awards", value: 5 },
    { title: "Collaborations", value: 10 }
  ]
  return (
    <>
      <section className='achivements bg-gray-900'>
        <div className="container">
          <div className="achivements_wrap">
            {achivementsData.map((data, index) => {
              const { title, value } = data;
              return (
                <div className="text-center text-white" key={index}>
                  <h1 className="text-4xl font-bold">
                    {value}
                  </h1>
                  <h5 className='text-lg'>
                    {title}
                  </h5>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Achivements