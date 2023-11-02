"use client"
import Link from 'next/link';
import Image from 'next/image';
import Navlink from './Navlink';
import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MobileOverlay from './MobileOverlay';
const navLinks = [
  {
    title: "About",
    path: "#about"
  },
  {
    title: "Project",
    path: "#projects"
  },
  {
    title: "Contact",
    path: "#contact"
  }
];

const Navbar = () => {
  const [mbmenuopen, setMbmenuopen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Define the navbar and logo heights
  const normalNavbarHeight = '10rem'; // Adjust as needed
  const stickyNavbarHeight = '5rem'; // Adjust as needed
  const logoWidth = '6rem'; // Adjust as needed

  // Apply different styles for the normal and sticky navbars
  const normalNavbarStyle = {
    height: normalNavbarHeight,
  };

  const stickyNavbarStyle = {
    height: stickyNavbarHeight,
  };

  const logoStyle = {
    width: logoWidth,
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position to determine if the navbar should become sticky
      if (window.scrollY > 100) { // Adjust the scroll threshold as needed
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add a scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ease-in-out ${isSticky ? 'bg-[#19191E]' : 'bg-transparent'} ${isSticky ? stickyNavbarStyle : normalNavbarStyle}`}>
      <div className='flex flex-wrap items-center justify-between mx-auto px-4'>
        <Link href={"/"} className='left-12 pl-24'>
          <div className='h-full'>
            <Image
              src="/Images/logo.png"
              alt="logo"
              style={logoStyle}
              width={200}
              height={80}
            />
          </div>
        </Link>

        <div className='mobile-menu block md:hidden px-4 py-3'>
          {!mbmenuopen ?
            <button
              onClick={() => { setMbmenuopen(true); }}
              className='flex items-center justify-center px-3 py-2 text-yellow-500 font-bolder border border-slate-300 rounded hover:bg-white hover:text-yellow-600'>
              <Bars3Icon className='h-5 w-5' />
            </button>
            :
            <button
              onClick={() => { setMbmenuopen(false); }}
              className='flex items-center justify-center px-3 py-2 text-yellow-500 font-bolder border border-slate-300 rounded hover:bg-white hover:text-yellow-600'>
              <XMarkIcon className='h-5 w-5' />
            </button>
          }
        </div>

        <div className='menu hidden mr-20 pb-5 md:block md:w-auto transition-all duration-800 ease-in-out '>
          <ul className='flex flex-row space-x-8 md:p-0 mt-8 mr-8 sm:p-3'>
            {navLinks.map((link, index) => {
              return (
                <li key={index} className='text-orange-500 font-mono text-2xl'>
                  <Navlink href={link.path} title={link.title} />
                </li>)
            })}
          </ul>
        </div>
      </div>

      {mbmenuopen ? <MobileOverlay links={navLinks} /> : null}
    </nav>
  );
}

export default Navbar;
