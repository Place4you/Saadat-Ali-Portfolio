"use client"
import React, { useRef, useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import {  motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition();

    const [ref, inView] = useInView({
        triggerOnce: true,
      });
      
    const cardVariants ={
        initial : { opacity:0, x:100},
        animate : { opacity: 1, x:0},
        transititon: { duration: 2000}
    }

    const handleTabChange = (id) => {
        startTransition(() => {
        setTab(id);
    });


};


    const TAB_DATA=[
        {
            title: "Skills",
            id : "skills",
            cotent : (
                <>
                <ul>
                <li className=' list-disc italic '>HTML5</li>
                <li className=' list-disc italic '>Blade</li>
                <li className=' list-disc italic '>CSS3</li>
                <li className=' list-disc italic '>Tailwind</li>
                <li className=' list-disc italic '>Javascript</li>
                <li className=' list-disc italic '>Typescript</li>
                <li className=' list-disc italic '>Angular</li>
                <li className=' list-disc italic '>React</li>
                <li className=' list-disc italic '>Laravel</li>
                <li className=' list-disc italic '>PHP</li>
                <li className=' list-disc italic '>Wordpress</li>
                <li className=' list-disc italic '>Shopify Store Setup</li>
                </ul>
                </>
            )
        },
        {
            title: "Education",
            id : "education",
            cotent : (
                <>
                <ul className="text-white">
                    <li className=' list-disc '>
                        Beacholars in Computer Sciences
                        <ul className="text-gray-400 italic mb-3">
                        <li>Mirpur University of Science & Technology</li>
                        <li>2018-22</li>
                        </ul>
                    </li>
                    <li className=' list-disc '>
                        Intermediate in Computer Sciences
                        <ul className="text-gray-400 italic mb-3">
                        <li>Punjab Group Of Colleges</li>
                        <li>2016-18</li>
                        </ul>
                    </li>
                    <li className=' list-disc '>
                        Matric in Computer Sciences
                        <ul className="text-gray-400 italic mb-3">
                        <li>Public School</li>
                        <li>2014-16</li>
                        </ul>
                    </li>
                </ul>

                </>
            ) 
        }
        ,
        {
            title: "Certification",
            id : "certification",
            cotent : (
                <>
                <ul className="text-white">
                     
                    <li className=' list-disc '>
                        LARAVEL QUIZ BEGINNER LEVEL
                        <ul className="text-gray-400 italic mb-2">
                        <li>SkillValue Training</li>
                        <li>Issued Jun 2024</li>
                        </ul>
                    </li>
                   <li className=' list-disc '>
                        Let's Learn Laravel: A Guided Path For Beginners
                        <ul className="text-gray-400 italic mb-2">
                        <li>Udemy</li>
                        <li>Issued Jun 2024</li>
                        </ul>
                    </li>
                    <li className=' list-disc '>
                        Introduction to HTML5
                        <ul className="text-gray-400 italic mb-2">
                        <li>Coursera</li>
                        <li>Issued Jun 2020</li>
                        </ul>
                    </li>
                    <li className=' list-disc '>
                        HTML/CSS
                        <ul className="text-gray-400 italic mb-2">
                        <li>TestDome</li>
                        <li>Issued Jul 2023</li>
                        </ul>
                    </li>
                    <li className=' list-disc '>
                        Programming in HTML5 with JavaScript and CSS3
                        <ul className="text-gray-400 italic mb-2">
                        <li>HackerRank</li>
                        <li>Issued Sep 2023</li>
                        </ul>
                    </li>
                    <li className=' list-disc '>
                        Frontend Development
                        <ul className="text-gray-400 italic mb-2">
                        <li>Sheriyans</li>
                        <li>2023</li>
                        </ul>
                    </li>
                </ul>

                </>
            )
        }
    ]

  return (
    <>
    <section id='about'>
        <motion.div 
            ref={ref}
            variants={cardVariants}
            initial="initial"
            animate={inView ? "animate" : "initial"}
        >
        
            

        <div className='grid md:grid-cols-2 md:grid-flow-col gap-8 py-8 px-4 xl:gap-16 sm:gap-16 text-white bg-black bg-opacity-80'>
  <Image
    className='order-2 lg:order-1 bg-orange-500 h-auto w-full rounded-3xl place-self-center lg:place-self-start col-span-1 row-span-1 flex items-center justify-center'
    src="/images/sadi-about.jpeg" // Ensure the path is correct
    alt="hero image"
    width={350}
    height={350}
    layout="responsive"
  />
  
  <div className='order-1 lg:order-2 sm:w-full'>
    <h1 className='text-4xl lg:text-6xl font-extrabold pb-3 lg:text-left sm:text-center'>👋 About me</h1>
    <p className='text-lg pb-2 text-justify ml-0 pr-6'>
      Hello, I'm Saadat, a <i>Passionate Developer</i> with a passion for crafting stunning websites. I specialize in HTML, CSS, JavaScript, PHP, Laravel & React to create visually appealing and seamlessly functioning web designs. I'm experienced in writing code for custom websites. As a team player, I enjoy collaborating on projects that merge design and technology. My goal is to create web experiences that truly stand out. I'm always excited to connect with fellow creators and collaborators, so let's make web magic happen together!
    </p>

    <div className='mt-4 flex justify-start gap-3 items-center lg:text-2xl'>
      <TabButton 
        className="text-white border-b border-orange-600 mr-3"
        selectTab={() => handleTabChange("skills")} 
        active={tab === "skills"}
      >
        Skills
      </TabButton>
      <TabButton 
        className="text-white border-b border-orange-600 mr-3"
        selectTab={() => handleTabChange("education")} 
        active={tab === "education"}
      >
        Education
      </TabButton>
      <TabButton 
        className="text-white border-b border-orange-600 mr-3"
        selectTab={() => handleTabChange("certification")} 
        active={tab === "certification"}
      >
        Certification
      </TabButton>
    </div>
    
    <div className='mt-3 ml-5'>
      {TAB_DATA.find((t) => t.id === tab).cotent}
    </div>
  </div>
</div>

        </motion.div>
    </section>
    </>
  )
}

export default AboutSection
