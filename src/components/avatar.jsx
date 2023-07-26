import React from 'react'
import Avatar from '../assets/images/avatar.png'

const UserAvatar = () => {
  return (
    <div className='avatar_box'>
      <img src={Avatar} width={'100%'} alt="avatar" />
    </div>
  )
}

export default UserAvatar