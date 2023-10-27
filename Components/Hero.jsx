"use client"
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <section className='mb-3'>
        <motion.div
          initial={{ delay:0, opacity: 0 , x: -100}}
          animate={{  opacity: 1,  x: 0  }}
          transition={{ delay:0,  duration: 0.2 }}
          
           className='grid grid-cols-1  lg:grid-cols-12 p-3'>
           <div className=' col-span-7  place-self-center text-center sm:text-left'>
           <h1 className='text-3xl lg:text-5xl text-white font-extrabold mb-2'>
            Hey, I am
            <span className='pt-2  text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r  from-orange-400 to-yellow-400 block mb-1 z-80'>Saadat Ali</span>
            </h1>

            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'A Website Deveoper',
                    1500, // wait 1s before replacing "Mice" with "Hamsters"
                    'Frontend',
                    1500,
                    'Backend',
                    1300,
                    'CMS',
                    1200
                ]}
                wrapper="span"
                speed={20}
                style={{ fontSize: '1.8em', display: 'inline-block', fontWeight:'bolder', color:'white' }}
                repeat={Infinity}
            />

           <p className='text-base text-[#AEB7BE]'> I am MERN stack Developer with Experience in Both Frontend & Backend, Currently working as Freelancer on Fiverr and Upwork</p>

           <div className="  p-4 space-y-4 lg:space-y-0 md:flex-col md:items-center md:justify-center">
              <button
                className=" w-full  lg:w-fit px-6 py-3 font-bold hover:font-bold
                          bg-gradient-to-br from-orange-400 to-yellow-400 text-black hover:text-white rounded-lg hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500"
              >
                Hire me
              </button>

              <button
                className="w-full lg:ml-4 lg:w-fit px-6 py-3 font-bold hover:font-bold
                          bg-slate-800 text-white hover:text-white rounded-lg  hover:bg-slate-900"
              >
                Download CV
              </button>
            </div>

        </div> 
     
        
        <div className='col-span-5 place-self-center mb-4'>
  <div className='relative w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden border-4 border-yellow-400'>
    <div className='z-0 absolute bg-[#191919] w-full pb-4 h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ' style={{ backgroundImage: "url(/Images/yellow-background.png)", backgroundSize:"cover" }}>
      <Image
        className='z-100 opacity-100'
        src="/Images/sadi bitmoji.png"
        alt="hero image"
        width={350}
        height={350}
        objectFit='cover'
      />


    </div>
  </div>
</div>

      </motion.div>


    </section>
  )
}

export default Hero
