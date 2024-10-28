import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [ref, inView] = useInView({ triggerOnce: true });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const tabContentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <motion.ul
          variants={tabContentVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-4 text-[#ADB7BE] text-sm lg:text-lg"
        >
          {["HTML5", "Blade", "CSS3", "Tailwind", "JavaScript", "TypeScript", "Angular", "React", "Laravel", "PHP", "WordPress", "Shopify Store Setup"].map((skill, i) => (
            <motion.li key={i} className="list-disc" whileHover={{ scale: 1.1 }}>
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <motion.ul
          variants={tabContentVariants}
          initial="hidden"
          animate="visible"
          className="text-white space-y-4"
        >
          <motion.li className="list-disc">
            Bachelor's in Computer Science
            <ul className="text-gray-400 italic ml-5">
              <li>Mirpur University of Science & Technology</li>
              <li>2018-22</li>
            </ul>
          </motion.li>
          <motion.li className="list-disc">
            Intermediate in Computer Science
            <ul className="text-gray-400 italic ml-5">
              <li>Punjab Group of Colleges</li>
              <li>2016-18</li>
            </ul>
          </motion.li>
          <motion.li className="list-disc">
            Matric in Computer Science
            <ul className="text-gray-400 italic ml-5">
              <li>Public School</li>
              <li>2014-16</li>
            </ul>
          </motion.li>
        </motion.ul>
      ),
    },
    {
      title: "Certification",
      id: "certification",
      content: (
        <motion.ul
          variants={tabContentVariants}
          initial="hidden"
          animate="visible"
          className="text-white space-y-4"
        >
          {[
            { title: "LARAVEL QUIZ BEGINNER LEVEL", issuer: "SkillValue Training", date: "Jun 2024" },
            { title: "Let's Learn Laravel: A Guided Path For Beginners", issuer: "Udemy", date: "Jun 2024" },
            { title: "Introduction to HTML5", issuer: "Coursera", date: "Jun 2020" },
            { title: "HTML/CSS", issuer: "TestDome", date: "Jul 2023" },
            { title: "Programming in HTML5 with JavaScript and CSS3", issuer: "HackerRank", date: "Sep 2023" },
            { title: "Frontend Development", issuer: "Sheriyans", date: "2023" },
          ].map((cert, i) => (
            <motion.li key={i} className="list-disc">
              {cert.title}
              <ul className="text-gray-400 italic ml-5">
                <li>{cert.issuer}</li>
                <li>{cert.date}</li>
              </ul>
            </motion.li>
          ))}
        </motion.ul>
      ),
    },
  ];

  return (
    <section id="about" className="text-white bg-black bg-opacity-80 p-8 rounded-lg shadow-lg">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0, transition: { duration: 1 } } : {}}
      >
        <div className="grid md:grid-cols-2 gap-8">
          <Image
            src="/images/sadi-about.jpeg"
            alt="Saadat's portrait"
            width={350}
            height={350}
            className="rounded-3xl self-center"
            priority
          />
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold">👋 About me</h1>
            <p className="text-lg text-gray-300">
              Hello, I'm Saadat, a <i>passionate developer</i> specializing in full-stack solutions with HTML, CSS,
              JavaScript, PHP, Laravel, React, and more. I love merging design with technology to create web experiences
              that stand out. Let's make something amazing together!
            </p>
            <div className="flex space-x-3 mt-6">
              {TAB_DATA.map((tabItem) => (
                <TabButton
                  key={tabItem.id}
                  active={tab === tabItem.id}
                  selectTab={() => handleTabChange(tabItem.id)}
                  className="relative hover:text-[#ecab09] text-lg"
                >
                  {tabItem.title}
                </TabButton>
              ))}
            </div>
            <div className="mt-6">
              <AnimatePresence mode="wait">
                {TAB_DATA.find((t) => t.id === tab).content}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
