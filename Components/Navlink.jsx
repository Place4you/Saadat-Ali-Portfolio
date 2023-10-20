"use client"

import React from 'react'
import Link from 'next/link'

const Navlink = ({href, title}) => {
  return (
    <>
    <Link href={href}
         className="block py-2 pl-3 pr-4 text-[#ADB7BE]  md:p-0 hover:text-white rounded-md" >
        {title}</Link>
    </>
  )
}

export default Navlink
