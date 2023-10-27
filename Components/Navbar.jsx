"use client"
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Navlink from './Navlink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState , useEffect} from 'react'
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
 
 //Sticky navbar state check and apply styling
 const [isSticky, setIsSticky] = useState(false);
  const stickystyle = " sticky top-0 h-10 left-0 z-50 bg-white  transition-all duration-500 ease-in-out"




  return (
    <>
<nav className={`${isSticky ? stickystyle : ' bg-[#19191E] sticky top-0 left-0 z-50  md:my-0 md:py-0 sm:my-0 sm:p-3 '}`} >
      <div className='flex flex-wrap items-center justify-between mx-auto left-10 top-10   '>
        <Link href={"/"} className='left-12 pl-24'>
        <Image
              src="/Images/logo.png"
              alt="logo"
              width={130}
              height={80}
            />
        </Link>
            <div className='  mobile-menu block md:hidden px-4 py-3'>
              
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

            <div className='menu hidden mr-20 pb-5 md:block md:w-auto  transition-all duration-800 ease-in-out '>
                <ul className='flex   flex-row  space-x-8  md:p-0 mt-8 mr-8 sm:p-3'>
                  {navLinks.map((link,index)=> {
                    return(
                      <li key={index} className='text-orange-500 font-mono  text-2xl'>
                      <Navlink  href={link.path} title={link.title} />
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
