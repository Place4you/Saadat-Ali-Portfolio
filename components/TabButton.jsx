
"use client"
import React from 'react'

const TabButton = ({active, selectTab, children}) => {
    const btncol = active ? " text-white border-b  border-orange-500  " : 
    " text-[#ADB7BE] border-b border-gray-400  "


  return (
    <button onClick={selectTab}>
       <p className={` text-[#ADB7BE] text-justify ${btncol}`}>
        {children}
        </p> 
        </button>
  )
}

export default TabButton
