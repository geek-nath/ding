import React from 'react'
import Logo from '../assets/images/ding-logo.png'
import * as BsIcons from 'react-icons/bs'
import { Link } from 'react-router-dom'

const SidebarNav = () => {

  const sideNavObj = [
    {
      name: "Home",
      path: "/",
      icon: <BsIcons.BsHouse />
    },

    {
      name: "Explore",
      path: "/explore",
      icon: <BsIcons.BsSearch />
    },

    {
      name: "Notifications",
      path: "/notifications",
      icon: <BsIcons.BsBell />
    },

    {
      name: "Messages",
      path: "/messages",
      icon: <BsIcons.BsChatDots />
    },

    {
      name: "Community",
      path: "/community",
      icon: <BsIcons.BsPeople />
    },

    {
      name: "Profile",
      path: "/profile",
      icon: <BsIcons.BsPerson />
    },

    {
      name: "Settings",
      path: "/settings",
      icon: <BsIcons.BsGear />
    }
  ]

  return (
    <aside className='siderbar fixed left-0 bg-white top-0 bottom-0 w-1/4 ring-1 ring-gray-200'>
      <div className="p-4 mx-10">
        <div>
          <img src={Logo} width={'100'} alt="ding" />
        </div>

        <div className="mt-10">
          {sideNavObj.map((data, index) => {
            return (
              <div key={index} className='mb-4'>
                <Link to={data.path} className='no-underline'>
                  <button className='py-3 px-6 text-lg font-semibold duration-300 hover:bg-red-100 hover:text-red-500 w-full flex items-center gap-2'>
                    {data.icon} {data.name}
                  </button>
                </Link>
              </div>
            )
          })}
          <div className='mb-4'>
            <button className='py-3 px-6 text-lg duration-300 hover:bg-red-600 bg-red-500 text-center w-full text-white'>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SidebarNav