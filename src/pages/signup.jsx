import React from 'react'

const Signup = () => {
  return (
    <>
      <section className="sign_up">
        <div className="sign_up_form_wrap">
          <h1 className='text-gray-900 text-3xl font-bold flex gap-2 items-center justify-center'>
            HYPER <div className='bg-gray-900 text-white text-lg flex items-center justify-center text-4xl' style={{ height: "40px", width: "40px" }}>U</div>
          </h1>
          <form action="#" className='mt-10 flex col gap-4'>
            <div>
              <label htmlFor="fullName" className='text-gray-900'>Full name:</label>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Signup