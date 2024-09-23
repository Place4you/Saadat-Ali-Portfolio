"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'; // Keeping the Bars3Icon for mobile menu open icon
import Image from 'next/image';

const navLinks = [
  { title: "About", path: "#about", icon: "fa-solid fa-user" },
  { title: "Projects", path: "#projects", icon: "fa-solid fa-folder-open" },
  { title: "Contact", path: "#contact", icon: "fa-solid fa-envelope" },
];

const Navbar = () => {
  const [mbmenuopen, setMbmenuopen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stickyNavbarStyle = 'bg-[#19191E] shadow-lg';
  const normalNavbarStyle = 'bg-transparent';

  return (
    <nav
      className={`sticky px-12 top-0 z-50 transition-all duration-500 ease-in-out ${
        isSticky ? stickyNavbarStyle : normalNavbarStyle
      }`}
    >
      <div className="flex items-center justify-between mx-auto px-4 py-3 md:py-4">
        {/* Logo (Text: "Sadi") */}
        <Link href="/" className="text-white text-3xl font-bold z-50">
          Sadi
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMbmenuopen(!mbmenuopen)}
            className="text-yellow-500 hover:text-yellow-600 border border-yellow-500 p-2 rounded"
          >
            {mbmenuopen ? (
              <i className="fa fa-times h-6 w-6"></i> // Font Awesome CDN close icon
            ) : (
              <Bars3Icon className="h-6 w-6" /> // HeroIcon for menu open
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="text-orange-500 font-mono text-2xl hover:text-orange-300 transition-colors duration-200"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mbmenuopen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 z-40 flex flex-col items-center justify-center min-h-screen p-4 scroll-smooth">
          <button
            onClick={() => setMbmenuopen(false)}
            className="absolute top-4 right-4 z-50 text-white text-3xl"
          >
            <i className="fa fa-times h-8 w-8"></i> {/* Close icon */}
          </button>

          {/* Mobile Navigation Links */}
          <ul className="space-y-6 text-white text-xl">
            {navLinks.map((link, index) => (
              <li key={index} className="w-full text-left px-4">
                <Link
                  href={link.path}
                  onClick={() => setMbmenuopen(false)}
                  className="flex items-center py-2 hover:bg-gray-700 rounded transition-colors duration-300"
                >
                  <i className={link.icon + " mr-3"}></i> {/* Font Awesome Icon */}
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
