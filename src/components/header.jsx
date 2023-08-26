import React from 'react'
import ButtonUi from './button'

const Header = ({ showInputBox, showBox }) => {
  return (
    <div className='flex items-center'>
      <div className='mr-auto'>
        <h1 className='text-red-500 font-bold text-4xl'>Ding.</h1>
        <h5 className='text-gray-400'>Keeping your notes secure.</h5>
      </div>
      <div>
        <ButtonUi
          btnText={showBox ? 'Close form' : 'New note'}
          onClick={showInputBox}
        />
      </div>
    </div>
  )
}

export default Header