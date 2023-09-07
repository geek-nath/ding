import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './button'
import * as AiIcons from 'react-icons/ai'

const Navbar = () => {
  const navbarLinks = [
    { name: "Home", path: "/", isActive: true },
    { name: "Services", path: "/services", isActive: false },
    { name: "About", path: "/about", isActive: false },
    { name: "Portfolio", path: "/portfolio", isActive: false },
    { name: "Reviews", path: "/", isActive: false },
    { name: "Blog", path: "/blog", isActive: false }
  ]
  const [navbar, setNavbar] = useState(false);
  const openMenu = () => {
    setNavbar(!navbar);
  }
  const [navbarBg, SetNavbarBg] = useState(false);
  const changeNavbarBg = () => {
    if (window.scrollY >= 60) {
      SetNavbarBg(true);
    } else {
      SetNavbarBg(false);
    }
  }
  useEffect(() => {
    changeNavbarBg();
    window.addEventListener('scroll', changeNavbarBg);
  }, []);
  return (
    <>
      <nav className={navbarBg ? "navbar bg-white shadow-md py-4 fixed top-0 w-full left-0 right-0" : "navbar bg-transparent py-4 fixed top-0 w-full left-0 right-0"}>
        <div className="container flex items-center">
          <div className="navbar-brand bg-red-500">
            <Link to={'/'} className='no-underline nav-brand text-white'>
              ding.
            </Link>
          </div>
          <div className={navbar ? "navbar-links mx-auto open shadow-md" : "navbar-links mx-auto closed"}>
            <div className="nav-items flex items-center gap-9">
              {navbarLinks.map((links, index) => {
                const { name, path, isActive } = links;
                return (
                  <Link key={index} to={path} className={isActive ? 'no-underline text-red-500 nav-link' : `no-underline ${navbarBg ? 'text-gray-900' : 'text-white'} nav-link duration-300 hover:text-red-500`}>
                    {name}
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="navbar-button">
            <Link to={'/'} className='no-underline'>
              <Button
                variant={'red-500'}
                text={'Contact Us'}
                color={'text-white'}
                ringColor={'ring-red-500'}
              />
            </Link>
          </div>
          <div className="navbar-toggler hidden">
            <button className='text-white outline-none text-xl' onClick={openMenu}>
              {navbar ? <AiIcons.AiOutlineClose /> : <AiIcons.AiOutlineMenu />}
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar