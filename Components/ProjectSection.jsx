"use client"
import React, { useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { InView, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once when it comes into view
    rootMargin: '-50px 0px 0px 0px', // Adjust the root margin to trigger the animation when the component's top is in view
  });
  const cardVariants = {
    initial: { opacity: 1, y: 5 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const [tag, setTag] = useState("ALL");
  const [animationRanForAll, setAnimationRanForAll] = useState(false);
  const [animationRanForHTMLCSS, setAnimationRanForHTMLCSS] = useState(false);
  const [animationRanForReact, setAnimationRanForReact] = useState(false);

  const handleTagChange = (newTag) => {
    switch (newTag) {
      case 'ALL':
        if (!animationRanForAll) {
          setAnimationRanForAll(true);
        }
        break;
      case 'HTML/CSS':
        if (!animationRanForHTMLCSS) {
          setAnimationRanForHTMLCSS(true);
        }
        break;
      case 'React':
        if (!animationRanForReact) {
          setAnimationRanForReact(true);
        }
        break;
      default:
        break;
    }

    setTag(newTag);
  };

  const Project_Data = [
    {
      id: "1",
      title: "Watch Product Landing Page",
      description: "Responsive watch product landing page",
      tag: ["ALL", "HTML/CSS"],
      imageUrl: "Images/1.jpg",
      github: "https://github.com/Place4you/Watch-Landing-Page",
      demoUrl: "https://saadatwatch.netlify.app/",
    },
    {
      id: "2",
      title: "Blog App",
      description: "A blogging platform built with React",
      tag:["ALL", "HTML/CSS"],
      imageUrl: "Images/2.png",
      github: "/",
      demoUrl: "",
    },
    {
      id: "3",
      title: "E-commerce Site",
      description: "An online store using Shopify",
      tag: ["ALL", "HTML/CSS"],
      imageUrl: "Images/3.png",
      github: "/",
      demoUrl: "",
    },
    {
      id: "4",
      title: "Bubble Game Javascript",
      description: "Bubble game developed using JavaScript and SCSS",
      tag: ["ALL", "React"],
      imageUrl: "Images/4.jpg",
      github: "https://github.com/Place4you/Bubble-Game-Javascript",
      demoUrl: "https://saadatbubblegame.netlify.app/",
    },
    {
      id: "5",
      title: "Portfolio Website",
      description: "Personal website showcasing my work",
      tag: ["ALL", "React"],
      imageUrl: "Images/5.png",
      github: "/",
      demoUrl: "",
    },
    {
      id: "6",
      title: "Headphone-Landing-Page",
      description: "Complete responsive headphone landing page built using HTML and SCSS.",
      tag: ["ALL", "HTML/CSS"],
      imageUrl: "Images/6.jpg",
      github: "https://github.com/Place4you/Headphone-Landing-Page",
      demoUrl: "https://sadiheadphone.netlify.app/",
    },
    {
      id: "7",
      title: "DigitalUk Landing Page",
      description: "Responsive digital agency clone landing page",
      tag: ["ALL", "HTML/CSS"],
      imageUrl: "Images/7.jpg",
      github: "https://github.com/Place4you/DigitalUk",
      demoUrl: "https://saadatdigitalagency.netlify.app/",
    },
    {
      id: "8",
      title: "Creative Golf Landing Page",
      description: "Responsive digital agency clone landing page",
      tag: ["ALL", "HTML/CSS"],
      imageUrl: "Images/8.jpg",
      github: "https://github.com/Place4you/Creative-Golf-Landing-page",
      demoUrl: "https://creativegolflanding.netlify.app/",
    },
    {
      id: "9",
      title: "Pizza Clone Landing Page",
      description: "Responsive Pizza clone landing page",
      tag: ["ALL", "HTML/CSS"],
      imageUrl: "Images/8.jpg",
      github: "https://github.com/Place4you/Creative-Golf-Landing-page",
      demoUrl: "https://creativegolflanding.netlify.app/",
    },
  ];

  const filteredProject = Project_Data.filter((project) => project.tag.includes(tag));

  return (
    <>
      <section id="projects" className="my-5 bg-black backdrop-blur-lg p-4 rounded-lg">
        <div className="my-3 p-3 h-auto w-auto">
          <h2 className="mb-6 text-center text-4xl text-white font-extrabold">My Projects</h2>
          <div className="my-5 relative w-full flex flex-wrap sm:flex-nowrap items-center justify-center gap-4">
            <ProjectTag onClick={handleTagChange} name="ALL" isSelected={tag === "ALL"} />
            <ProjectTag onClick={handleTagChange} name="HTML/CSS" isSelected={tag === "HTML/CSS"} />
            <ProjectTag onClick={handleTagChange} name="React" isSelected={tag === "React"} />
          </div>

          <ul className="mb-5 grid md:grid-cols-3 text-white gap-5 lg:gap-10">
            {filteredProject.map((project, index) => (
              <motion.li
                ref={ref}
                key={index}
                variants={cardVariants}
                initial={getAnimationInitialState(project.tag)}
                animate={inView ? 'animate' : 'initial'}
                transition={{ duration: 0.3, delay: index * 0.2 }}
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
            ))}
          </ul>
        </div>
      </section>
    </>
  );

  function getAnimationInitialState(tags) {
    switch (tags[0]) {
      case 'ALL':
        return animationRanForAll ? 'animate' : 'initial';
      case 'HTML/CSS':
        return animationRanForHTMLCSS ? 'animate' : 'initial';
      case 'React':
        return animationRanForReact ? 'animate' : 'initial';
      default:
        return 'initial';
    }
  }
};

export default ProjectSection;
