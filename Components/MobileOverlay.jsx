import React from 'react'
import Link from 'next/link'

const MobileOverlay = ({links}) => {
   

  return (
    <>        
         <ul className='flex items-center justify-center flex-col p-2 m-2 lg:hidden md:hidden  transition-all duration-300 ease-in-out '>
            {links.map((link,index)=>(
                <li className='text-center bg-gradient-to-br from-orange-400 to-yellow-400 text-white font-semibold p-1 rounded-lg border-2 border-black w-full hover:text-black active:text-black' key={index}>
                    <Link href={link.path} >{link.title}</Link>
                </li>
            ))}
        </ul>
    </>
  )
}

export default MobileOverlay
