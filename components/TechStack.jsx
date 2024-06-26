"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';

function TechStack() {
  const webTechnologies = [
    { src: '/images/html5.svg', name: 'HTML5' },
    { src: '/images/css3.svg', name: 'CSS3' },
    { src: '/images/php.png', name: 'PHP' },
    { src: '/images/javascript.svg', name: 'JavaScript' },
    { src: '/images/typescript.png', name: 'TypeScript' },
    { src: '/images/laravel.png', name: 'Laravel' },
    { src: '/images/tailwind.png', name: 'Tailwind' },
    { src: '/images/vscode.svg', name: 'VSCode' },
    { src: '/images/github-icon.svg', name: 'GitHub' },
    { src: '/images/sass.svg', name: 'Sass' },

  ]

  const techStack = [
    { src: '/images/php.png', name: 'Php' },
    { src: '/images/laravel.png', name: 'Laravel' },
    { src: '/images/react.svg', name: 'React' },
    { src: '/images/node.svg', name: 'Node' },

  ]


  return (
    <>
    <motion.div
  className="text-white bg-[svg1919] container mx-auto px-4 py-8"
  initial={{ delay: 0, opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0, duration: 0.2 }}
>
  <div className="lg:flex lg:space-x-8">
    <div className="w-full lg:w-1/2">
      <h1
        className="py-4 font-extrabold text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 block mb-1 z-80"
      >
        Web Technologies
      </h1>
      <p className="font-mono">
        As a FullStack developer, I am well-versed in a variety of web technologies that enable me to create stunning and interactive web experiences. From the foundational building blocks like HTML5 and CSS3 to the dynamic capabilities of JavaScript and React, I harness these technologies to craft user-friendly and visually appealing websites. With expertise in tools like VSCode, GitHub, and Tailwind CSS, I ensure that my web projects are not only aesthetically pleasing but also efficient and easy to maintain. For the Backend, i have experience in Laravel to handle Database, Api etc. My proficiency in these technologies empowers me to bring your web design visions to life, blending creativity with functionality.
      </p>
    </div>
    <div className="pt-24 w-full lg:w-1/2">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 justify-items-center">
        {webTechnologies.map((language) => (
          <div
            key={language.name}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={language.src}
              alt={language.name}
              width={70}
              height={70}
              unoptimized
              style={{
                objectFit: 'cover', // Apply your desired objectFit value here
              }}
            />
            <p className="font-bold pt-3">{language.name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  <div className="mt-8 bg-[#19191E] py-8">
    {/* First Container - Heading */}
    <div className="my-5 text-center">
      <h1 className="font-extrabold text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 block mb-2 z-80">
        Tech Stack
      </h1>
    </div>

    {/* Second Container - Elements (Icons and Text) */}
    <div className="w-full text-center ">
      <div className="flex flex-wrap justify-evenly items-center">
        {techStack.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center justify-between mx-4 my-4">
            <Image
              src={tech.src}
              alt={tech.name}
              unoptimized
              width={70}
              height={70}
              style={{
                objectFit: 'cover', // Apply your desired objectFit value here
              }}
            />
            <p className="font-bold pt-3">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</motion.div>
              
    </>
  );
}

export default TechStack;
