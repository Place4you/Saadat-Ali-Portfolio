"use client"
import React from 'react'
import dynamic from 'next/dynamic'

const AnimatedNumbers = dynamic(
  ()=>{
  return import ("react-animated-numbers");
  },
  {  ssr : false}
  );

const AcheivementSection = () => {

    const acheivement = [
        {
          prefix:"",
          metric:"Projects",
          value:"10",
          postfix:"+"
        },
        {
          prefix:"~",
          metric:"User",
          value:"10",
          postfix:""
        },
        {
          prefix:"",
          metric:"Reviews",
          value:"100",
          postfix:"+"
        },
        {
          prefix:"",
          metric:"Years",
          value:"3",
          postfix:""
        }
    ]

  return (
    <>
    <div  className='text-white border-[#ADB7BE] bg-[#19191E] border-2 p-2 flex text-center items-center justify-center lg:text-3xl lg:px-8 lg:py-2'>
      {
      acheivement.map((acheivement,index)=>{
        return(
          <>
          <div key={acheivement.id || index}
          className=' w-full text-[#ADB7BE]  '>
            <div>
              <h2 className='  flex flex-row justify-center items-center'>
                {acheivement.prefix}
                {acheivement.value}
                {acheivement.postfix}

              </h2>
              <p className='italic text-white'>{acheivement.metric}</p>
            </div>
          </div>
          </>
        )
      })

      }
    </div>
    </>
  )
}

export default AcheivementSection
