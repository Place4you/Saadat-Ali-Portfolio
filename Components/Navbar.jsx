"use client"
import Link from 'next/link'
import React from 'react'
import Navlink from './Navlink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import MobileOverlay from './MobileOverlay'


const navLinks=[
  {
    title:"About",
    path:"#about"
  },
  {
    title:"Project",
    path:"#projects"
  },
  {
    title:"Contact",
    path:"#contact"
  }
]

const Navbar = () => {
 const [ mbmenuopen, setMbmenuopen ] = useState(false)
  return (
    <>
    <nav className='sticky top-0 left-0 bg-[#121212]  z-50 md:my-0 md:py-0 sm:my-0 sm:py-0 '>
      <div className='flex flex-wrap items-center justify-between mx-auto p-8 '>
        <Link href={"/"} className='lg:text-6xl text-3xl font-extrabold text-white'>LOGO</Link>
            <div className='mobile-menu block md:hidden '>
              
                {!mbmenuopen ? 
                  <button 
                  onClick={()=>{ setMbmenuopen(true); }}
                  className='flex items-center justify-center px-3 py-2 text-yellow-500 font-bolder border  border-slate-300 rounded hover:bg-white  hover:text-yellow-600 '>
                  <Bars3Icon className='h-5 w-5' /></button>   
                  :
                  <button 
                  onClick={()=>{ setMbmenuopen(false); }}
                  className='flex items-center justify-center px-3 py-2 text-yellow-500 font-bolder border border-slate-300 rounded  hover:bg-white  hover:text-yellow-600'>
                  <XMarkIcon className='h-5 w-5' /></button>
              }
            </div>

            <div className='menu hidden md:block md:w-auto  transition-all duration-800 ease-in-out'>
                <ul className='flex p-0 flex-row space-x-8 md:p-0 mt-8 mr-8'>
                  {navLinks.map((link,index)=> {
                    return(
                      <li key={index}>
                      <Navlink href={link.path} title={link.title} />
                      </li>)
                    })
                    }
                </ul>
            </div>
      </div>

      {mbmenuopen ?  <MobileOverlay links={navLinks} /> :null }
  </nav>

    </>
  )
}

export default Navbar
