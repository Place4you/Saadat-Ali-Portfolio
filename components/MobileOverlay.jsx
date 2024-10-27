"use client";

import React from 'react';
import Link from 'next/link';

const MobileOverlay = ({ links }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-opacity-95 z-40 flex flex-col items-center justify-center min-h-screen p-6 transition-all duration-500 ease-in-out">
      <ul className="flex items-center justify-center flex-col space-y-8 w-full px-4 text-center">
        {links.map((link, index) => (
          <li key={index} className="text-center w-full">
            <Link href={link.path} className="text-[#ECAB09] font-semibold text-2xl p-3 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileOverlay;
