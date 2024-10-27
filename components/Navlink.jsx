"use client";

import React from 'react';
import Link from 'next/link';

const Navlink = ({ href, title }) => {
  return (
    <Link href={href} className="block py-2 text-[#ECAB09] font-mono text-2xl md:p-0 hover:text-white transition duration-300 ease-in-out">
      {title}
    </Link>
  );
};

export default Navlink;
