"use client"
import React, { useRef, useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { InView, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const ProjectSection = () => {



  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once when it comes into view
  });
  const cardvarients ={
      initial : { opacity:0.5, y:100},
      animate : { opacity: 1, y:0},
      transititon: { duration: 2}
  }

  const [tag, setTag] = useState("ALL");
  const handleToChange = (Newtag) => 
    {setTag(Newtag)
    };
  


    const Project_Data = [
        {
          id: "1",
          title: "Pizza Project",
          description: "This is developed with HTML/CSS",
          tag: ["ALL", "HTML/CSS"],
          imageUrl: "/Images/1.png",
          github: "/",
          demoUrl: "",
        },
        {
          id: "2",
          title: "Blog App",
          description: "A blogging platform built with React",
          tag:["ALL", "HTML/CSS"],
          imageUrl: "/Images/2.png",
          github: "/",
          demoUrl: "",
        },
        {
          id: "3",
          title: "E-commerce Site",
          description: "An online store using Shopify",
          tag: ["ALL", "HTML/CSS"],
          imageUrl: "/Images/3.png",
          github: "/",
          demoUrl: "",
        },
        {
          id: "4",
          title: "Mobile App",
          description: "A mobile app for iOS and Android",
          tag: ["ALL", "React"],
          imageUrl: "/Images/4.png",
          github: "/",
          demoUrl: "",
        },
        {
          id: "5",
          title: "Portfolio Website",
          description: "Personal website showcasing my work",
          tag: ["ALL", "React"],
          imageUrl: "/Images/5.png",
          github: "/",
          demoUrl: "",
        },
        {
          id: "6",
          title: "Game Project",
          description: "An interactive game built with JavaScript",
          tag: ["ALL", "React"],
          imageUrl: "/Images/6.png",
          github: "/",
          demoUrl: "",
        }
      ]
      
      const filteredProject = Project_Data.filter((project)=> project.tag.includes(tag) )


  return (
    <>
    <section id='projects'>
        <div  className='my-3 p-3 h-auto w-auto'>
            <h2 className=' mb-6 text-center text-4xl text-white font-extrabold'>My Projects</h2>
            <div className='my-5 relative w-full  h-16 flex items-center justify-center gap-4'>
                <ProjectTag
                onClick={handleToChange}
                name= "ALL"
                isSelected={tag === "ALL"}
                />
                <ProjectTag
                onClick={handleToChange}
                name= "HTML/CSS"
                isSelected={tag === "HTML/CSS"}
                />
                <ProjectTag
                onClick={handleToChange}
                name= "React"
                isSelected={tag === "React"}
                />
            </div>

            <ul  className=' mb-5 grid md:grid-cols-3 text-white gap-5 lg:gap-10'>
                {
              
                  filteredProject.map((project, index)=> 
                  <motion.li ref={ref}
                  key={index}
                  variants={cardvarients}
                  initial="initial"
                  animate={ inView ?"animate" : "initial"}
                  transition={{ duration:0.3, delay: index* 0.4 }}
                  >
                    <ProjectCard
                    title={project.title}
                    description={project.description}
                    tag={project.tag}
                    imageUrl={project.imageUrl}
                    github={project.github}
                    demoUrl={project.demoUrl}
                    />
                  </motion.li>
                  )
                
                }
            </ul>
        </div>
      </section>
    </>
  )
}

export default ProjectSection
