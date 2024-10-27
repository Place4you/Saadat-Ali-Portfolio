"use client";

import React from 'react';
import Link from 'next/link';

const MobileOverlay = ({ links, onClose }) => {
  const handleLinkClick = (e, path) => {
    e.preventDefault();
    onClose();
    document.querySelector(path).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 top-[60px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-opacity-95 z-40 flex flex-col items-start pt-6 pl-6 w-full min-h-screen transition-all duration-500 ease-in-out">
      <ul className="space-y-6 w-full text-left">
        {links.map((link, index) => (
          <li key={index} className="w-full">
            <Link
              href={link.path}
              onClick={(e) => handleLinkClick(e, link.path)}
              className="text-[#ECAB09] font-semibold text-xl p-3 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out w-full flex justify-start gap-x-2 items-center"
            >
              {link.title}
              <span className="text-[#ECAB09]">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileOverlay;
