import React, { useState } from 'react'
import UserAvatar from './avatar'
import * as BsIcons from 'react-icons/bs'

const PostArea = () => {

  // check if text input is active to show publicity buttons
  const [isActive, setIsActive] = useState(false);

  const textInputFocus = () => {
    setIsActive(true);
  }

  // other icons array
  const iconsObjects = [
    {
      icon: <BsIcons.BsImage />,
      iconName: 'Media'
    },

    {
      icon: <BsIcons.BsFolder />,
      iconName: 'Documents'
    },

    {
      icon: <BsIcons.BsEmojiSmile />,
      iconName: 'Emoji'
    },

    {
      icon: <BsIcons.BsCalendar />,
      iconName: 'Schedule'
    },
  ]

  // post text value
  const [postValue, SetPostValue] = useState('');
  const [buttonState, setButtonState] = useState(false);

  return (
    <div className='p-4 rounded-md shadow ring-1 ring-gray-100 bg-white'>
      <div className="flex gap-4">
        <UserAvatar />
        <div className='w-full'>
          <div className="border-b pb-3">
            <button className={isActive ? 'py-1 flex items-center gap-2 px-3 ring-1 ring-red-500 mb-2 text-red-500 text-sm' : 'py-1 hidden items-center gap-2 px-3 ring-1 ring-red-500 mb-2 text-red-500 text-sm'} style={{ borderRadius: "50px" }}>Everyone <BsIcons.BsChevronDown /></button>
            <input type="text" onFocus={textInputFocus} value={postValue} onChange={(e) => SetPostValue(e.target.value)} name="post-content" id="post-content" placeholder="What's happening?!" className='w-full p-2 outline-none text-xl' />
            <button className={isActive ? 'py-1 flex items-center gap-2 px-3 mt-2 text-red-500 text-sm duration-300 hover:bg-red-50' : 'py-1 hidden items-center gap-2 px-3 mt-2 text-red-500 text-sm duration-300 hover:bg-red-50'} style={{ borderRadius: "50px" }}><BsIcons.BsGlobeAmericas /> Everyone can reply</button>
          </div>

          <div className="mt-3 flex">
            <div className="mr-auto">
              <div className="flex gap-1">
                {iconsObjects.map((data, index) => {
                  return (
                    <button key={index} className='ico_btn text-red-500 flex items-center text-md justify-center duration-300 hover:bg-red-50'>
                      {data.icon}
                    </button>
                  )
                })}
              </div>
            </div>
            <button className='bg-red-500 text-white py-2 px-5 flex items-center gap-1'>Post <BsIcons.BsSendFill /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostArea