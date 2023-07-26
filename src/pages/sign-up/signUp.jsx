import React from 'react'
import dingLogo from '../../assets/images/ding-logo.png'
import Button from '../../components/button'
import { Link } from 'react-router-dom'
import FormInputs from '../../components/formInput'
import PasswordInputs from '../../components/passwordInput'

const SignUpPage = () => {
  return (
    <>
      <section className='sign-up flex h-screen w-screen items-center justify-center'>
        <main className='sm:w-full sm:mx-auto sm:max-w-sm'>
          <div>
            <img className='mx-auto h-20 w-auto' src={dingLogo} alt='ding' />
            <h2 className='text-center text-2xl font-bold tracking-tight text-red-500'>
              Create a new account.
            </h2>
          </div>
          <form method='POST' className='space-y-4 mt-5' action='#'>
            <FormInputs
              forInput={'name'}
              labelText={'Full name'}
              type={'text'}
              autoComplete={'name'}
            />
            <FormInputs
              autoComplete={'email'}
              labelText={'Email address'}
              type={'email'}
              forInput={'email'}
            />
            <PasswordInputs />
            <div>
              <Button
                buttonText={'Create account'}
                addedClassName={'w-full'}
              />
            </div>
            <div className="text-center text-gray-400">
              Already have an account? <Link to='/sign-in' className='text-red-500 no-underline'>Sign in</Link>
            </div>
          </form>
        </main>
      </section>
    </>
  )
}

export default SignUpPage