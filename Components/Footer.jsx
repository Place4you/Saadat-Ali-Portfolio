"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
    <footer className='relative bg-[#19191E] h-auto text-white flex flex-col items-center justify-evenly lg:flex-row'>
        <h1 className='relative  items-start  '>
          <Link href={"/"} className=''>
            <div className='p-0 m-0  min-h-fit left-0'>
              <Image
                src="/Images/logo.png"
                alt="logo"
                width={80}
                height={80}
              />
            </div>
        </Link></h1>
        <p className='py-2 font-bold right-0 '>Developed with ❤️ by Saadat</p>
    </footer>
    </>
  )
}

export default Footer
