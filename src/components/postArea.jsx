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

  // show audience menu
  const [showAudience, SetShowAudience] = useState(false);

  const setAudienceState = () => {
    SetShowAudience(!showAudience)
  }

  return (
    <div className='p-4 rounded-md shadow ring-1 ring-gray-100 bg-white'>
      <div className="flex gap-4">
        <UserAvatar />
        <div className='w-full'>
          <div className="border-b pb-3">
            <div className='relative'>
              <button onClick={setAudienceState} className={isActive ? 'py-1 flex items-center gap-2 px-3 ring-1 ring-red-500 mb-2 text-red-500 text-sm' : 'py-1 hidden items-center gap-2 px-3 ring-1 ring-red-500 mb-2 text-red-500 text-sm'} style={{ borderRadius: "50px" }}>Everyone <BsIcons.BsChevronDown /></button>

              <div className={showAudience ? "absolute rounded-md shadow bg-white ring-1 ring-gray-300" : "absolute rounded-md shadow bg-white hidden ring-1 ring-gray-300"} style={{ width: "350px" }}>
                <div className="p-4">
                  <h1 className='text-xl font-semibold'>Choose audience</h1>
                </div>
                <div>
                  <button className="flex w-full duration-300 hover:bg-red-50 p-4" style={{ borderRadius: "0" }}>
                    <div className="mr-auto">
                      <buttonState className="flex gap-2 items-center">
                        <BsIcons.BsGlobeAmericas className='text-red-500' /> <h2 className='text-md font-semibold'>Everyone</h2>
                      </buttonState>
                    </div>
                    <div className='flex items-center'>
                      <BsIcons.BsCheck className='text-2xl text-red-500' />
                    </div>
                  </button>
                </div>
                <div className="p-4">
                  <h1 className='text-md font-semibold'>My community</h1>
                </div>
              </div>
            </div>
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
            <button className='bg-red-500 text-white py-2 px-5 flex items-center gap-2'>Post <BsIcons.BsArrowRight /></button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default PostArea