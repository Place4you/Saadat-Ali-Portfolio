"use client";
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ReactPaginate from 'react-paginate';

const ProjectSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '-50px 0px 0px 0px' });
  const cardVariants = { initial: { opacity: 1, y: 5 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } };
  const [tag, setTag] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 6; // Max projects on desktop; adapt based on screen size if needed

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const Project_Data = [
    {
      id: "1",
      title: "Watch Product Landing Page",
      description: "Responsive watch product landing page",
      tag: ["ALL", "HTML/CSS/JS"],
      imageUrl: "/images/1.jpg",
      github: "https://github.com/Place4you/Watch-Landing-Page",
      demoUrl: "https://saadatwatch.netlify.app/",
    },
    {
      id: "2",
      title: "Carto",
      description: "Laravel-based social media application",
      tag:["ALL", "PHP"],
      imageUrl: "/images/carto.jpg",
      github: "https://github.com/Place4you/Carto-App",
      demoUrl: "https://bit.ly/4bhafaR",
    },
    {
      id: "3",
      title: "Bubble Game Javascript",
      description: "Bubble game developed using JavaScript and SCSS",
      tag: ["ALL", "HTML/CSS/JS"],
      imageUrl: "/images/4.jpg",
      github: "https://github.com/Place4you/Bubble-Game-Javascript",
      demoUrl: "https://saadatbubblegame.netlify.app/",
    },
    {
      id: "4",
      title: "Portfolio Website",
      description: "Personal website showcasing my work",
      tag: ["ALL", "React"],
      imageUrl: "/images/5.png",
      github: "/",
      demoUrl: "",
    },
    {
      id: "5",
      title: "Headphone-Landing-Page",
      description: "Complete responsive headphone landing page built using HTML and SCSS.",
      tag: ["ALL", "HTML/CSS/JS"],
      imageUrl: "/images/6.jpg",
      github: "https://github.com/Place4you/Headphone-Landing-Page",
      demoUrl: "https://sadiheadphone.netlify.app/",
    },
    {
      id: "6",
      title: "DigitalUk Landing Page",
      description: "Responsive digital agency clone landing page",
      tag: ["ALL", "HTML/CSS/JS"],
      imageUrl: "/images/7.jpg",
      github: "https://github.com/Place4you/DigitalUk",
      demoUrl: "https://saadatdigitalagency.netlify.app/",
    },
    {
      id: "7",
      title: "Creative Golf Landing Page",
      description: "Responsive digital agency clone landing page",
      tag: ["ALL", "HTML/CSS/JS"],
      imageUrl: "/images/8.jpg",
      github: "https://github.com/Place4you/Creative-Golf-Landing-page",
      demoUrl: "https://creativegolflanding.netlify.app/",
    },
    {
      id: "8",
      title: "Pizza Clone Landing Page",
      description: "Responsive Pizza clone landing page",
      tag: ["ALL", "HTML/CSS/JS"],
      imageUrl: "/images/9.jpg",
      github: "https://github.com/Place4you/Creative-Golf-Landing-page",
      demoUrl: "https://creativegolflanding.netlify.app/",
    },
    {
      id: "9",
      title: "Angular Landing Page",
      description: "Developed using Angular18+Typescript",
      tag: ["ALL", "Angular"],
      imageUrl: "/images/10.jpg",
      github: "https://github.com/Place4you/AngularLandingPage",
      demoUrl: "https://angularlanding.netlify.app/",
    },
    {
      id: "10",
      title: "Seal Coating Bussiness website",
      description: "Developed using Wordpress (Elementor)",
      tag: ["ALL", "PHP"],
      imageUrl: "/images/11.jpg",
      github: "https://github.com/Place4you/cliffsealcoating",
      demoUrl: "https://cliffordsealcoating.netlify.app/",
    },
    {
      id: "11",
      title: "React Todo list Webapp",
      description: "Developed using React",
      tag: ["ALL", "React"],
      imageUrl: "/images/12.jpg",
      github: "https://github.com/Place4you/todo-list-using-React",
      demoUrl: "https://sadireacttodolist.netlify.app/",
    },
    {
      id: "12",
      title: "Bucket App(NGRX) Webapp",
      description: "Developed using Angular(NGRX)",
      tag: ["ALL", "Angular"],
      imageUrl: "/images/13.jpg",
      github: "https://github.com/Place4you/NGRX-Starter-Project",
      demoUrl: "https://sadireacttodolist.netlify.app/",
    },
    
  ];

  const filteredProjects = Project_Data.filter((project) => project.tag.includes(tag));
  const pageCount = Math.ceil(filteredProjects.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentProjects = filteredProjects.slice(offset, offset + itemsPerPage);

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setCurrentPage(0); // Reset to first page on tag change
  };

  return (
    <>
      <section id="projects" className="my-5 bg-black backdrop-blur-lg p-4 rounded-lg">
        <div className="my-3 p-3 h-auto w-auto">
          <h2 className="mb-6 text-center text-4xl text-white font-extrabold">My Projects</h2>
          <div className="my-5 flex flex-wrap items-center justify-center gap-4">
            {["ALL", "HTML/CSS/JS", "React", "Angular", "PHP"].map((name) => (
              <ProjectTag key={name} onClick={handleTagChange} name={name} isSelected={tag === name} />
            ))}
          </div>

          <ul className="mb-5 grid md:grid-cols-3 text-white gap-5 lg:gap-10">
            {currentProjects.map((project, index) => (
              <motion.li
                ref={ref}
                key={project.id}
                variants={cardVariants}
                initial={cardVariants.initial}
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

          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
            pageLinkClassName="page-link"
            previousLinkClassName="previous-page"
            nextLinkClassName="next-page"
          />
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
