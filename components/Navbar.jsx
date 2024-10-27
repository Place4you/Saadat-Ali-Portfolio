"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Navlink from './Navlink';
import MobileOverlay from './MobileOverlay';

const navLinks = [
  { title: "Home", path: "#home" },
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [mbmenuopen, setMbmenuopen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMbmenuopen((prev) => !prev);
  const handleMenuClose = () => setMbmenuopen(false);

  const stickyNavbarStyle = 'bg-[#19191E] shadow-lg';
  const normalNavbarStyle = 'bg-transparent';

  return (
    <nav
      className={`sticky px-12 top-0 z-50 transition-all duration-500 ease-in-out ${
        isSticky ? stickyNavbarStyle : normalNavbarStyle
      }`}
    >
      <div className="flex items-center justify-between mx-auto px-4 py-3 md:py-4">
        <Link href="/" className="text-white text-3xl font-bold z-50">Sadi</Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50">
          <button
            onClick={toggleMenu}
            className={`text-[#ECAB09] border border-r-2 border-[#ECAB09] p-1 rounded-md transition-transform duration-300 transform hover:scale-110 ${mbmenuopen ? 'rotate-180' : ''}`}
          >
            <FontAwesomeIcon icon={mbmenuopen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <Navlink key={index} href={link.path} title={link.title} />
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mbmenuopen && <MobileOverlay links={navLinks} onClose={handleMenuClose} />}
    </nav>
  );
};

export default Navbar;
