import React from 'react'
import Button from './button'

const Contact = () => {
  return (
    <>
      <section className="contact bg-gray-900">
        <h1 className='text-center font-bold text-4xl text-white'>Get In Touch</h1>
        <div className="contact_container">
          <form action="#" className='mt-8 form_container'>
            <input type="text" name="full name" className='bg-transparent w-full ring-1 py-2 px-2.5 rounded outline-none text-white ring-white focus:ring-red-500' id="fullName" placeholder='Full Name' />
            <input type="email" name="full name" className='bg-transparent w-full ring-1 py-2 px-2.5 rounded outline-none text-white ring-white focus:ring-red-500' id="fullName" placeholder='Email address' />
            <textarea name="message" id="message" cols="30" rows="6" className='bg-transparent w-full ring-1 py-2 px-2.5 rounded outline-none text-white ring-white focus:ring-red-500' placeholder='Type your message here...'></textarea>
            <Button
              color={'text-white'}
              ringColor={'ring-red-500'}
              variant={'red-500'}
              text={'Submit'}
            />
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact