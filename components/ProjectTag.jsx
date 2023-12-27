"use client"
import React from 'react'

const ProjectTag = ( {onClick, name , isSelected}) => {

    let tagbtnstyle = isSelected ? " text-black   font-bold rounded-full  bg-gradient-to-br from-orange-400 to-yellow-400     "
    :" bg-transparent text-white"
  return (

    <>
    <button
    className={`px-6 py-2 border border-white rounded-2xl bg-transparent  ${tagbtnstyle}`}
    onClick={()=>{onClick(name); }}
    tag={name}

    >{name}</button>
    </>
  )
}

export default ProjectTag
