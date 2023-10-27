"use client"
import React from 'react'
import Link from 'next/link'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid'


const ProjectCard = ({title, description, imageUrl, github, demoUrl}) => {
  return (
    <> 
    <div className=' hover:shadow-white  hover:rounded-lg  hover:shadow-bottom'>
        <div className='group relative h-52 md:h-60  rounded-lg   '
        style={{background : `url(${imageUrl})`, backgroundSize :"contain"}}
        >
            
            <div className=' group overlay w-full h-full absolute top-0 left-0 hidden  bg-black bg-opacity-80   group-hover:flex  items-center justify-center gap-8'>
                <Link href={demoUrl}>
                <EyeIcon className=' border-white rounded-full border-2 p-2 text-gray-400 hover:text-white h-14 w-14' />
                </Link>

                <Link href={github}> 
                <CodeBracketIcon className=' border-white rounded-full border-2 p-2 text-gray-400 hover:text-white h-14 w-14 ' />
                </Link>
            </div>
        </div>

        <div className='bg-[#181818] py-3 px-2 rounded-xl'>
            <h1 className='font-bold'>{title}</h1>
            <p className='italic text-[#ADB7BE]'>{description}</p>
        </div>
    </div>
    </>
  )
}

export default ProjectCard
