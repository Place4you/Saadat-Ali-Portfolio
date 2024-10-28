"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';

const ProjectCard = ({ title, description, imageUrl, github, demoUrl }) => {
  return (
    <Link href={demoUrl} target="_blank" className="block group">
      <div className="group relative rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-[0px_4px_20px_rgba(255,255,255,0.2)]">
        
        {/* Use Image component for optimized responsive handling */}
        <div className="relative w-full h-52 md:h-60">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            style={{ objectFit: "contain" }}
            className="rounded-t-lg"
            priority
          />
          <div className="overlay w-full h-full absolute top-0 left-0 hidden bg-black bg-opacity-80 group-hover:flex items-center justify-center gap-8">
            <Link href={demoUrl} target="_blank">
              <EyeIcon className="border-white rounded-full border-2 p-2 text-gray-400 hover:text-white h-14 w-14" />
            </Link>
            <Link href={github} target="_blank">
              <CodeBracketIcon className="border-white rounded-full border-2 p-2 text-gray-400 hover:text-white h-14 w-14" />
            </Link>
          </div>
        </div>
        
        <div
          className="bg-[#181818] py-3 px-4 rounded-b-lg"
          style={{
            backdropFilter: "blur(10px)",
            opacity: "0.9"
          }}
        >
          <h1 className="font-bold text-white">{title}</h1>
          <p className="italic text-[#ADB7BE]">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
