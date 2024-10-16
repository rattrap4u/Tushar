"use client"; // Ensure this component is rendered on the client side
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check if the checkbox is checked using the useEffect
  useEffect(() => {
    const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement; // Cast to HTMLInputElement
    if (menuToggle) {
      const handleChange = () => {
        setIsMenuOpen(menuToggle.checked);
      };
      menuToggle.addEventListener('change', handleChange);
      return () => {
        menuToggle.removeEventListener('change', handleChange);
      };
    }
  }, []);

  return (
    <nav className="w-full h-[65px] fixed top-0 bg-gradient-to-b from-purple-800 to-black text-white shadow-md z-50 px-4 md:px-10 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="font-bold ml-2 text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-cyan-500 hover:from-red-600 hover:to-indigo-700">
          T-P
        </Link>
      </div>

      <input type="checkbox" id="menu-toggle" className="hidden" />
      <label 
        htmlFor="menu-toggle" 
        className="block md:hidden cursor-pointer text-white text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)} // Update state when clicked
      >
        <span className={`hamburger-icon transition duration-300 ${isMenuOpen ? 'hidden' : 'block'}`}>☰</span>
        <span className={`cross-icon transition duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>✖</span>
      </label>

      <div
        className={`absolute top-[65px] left-0 w-full bg-transparent text-white md:static md:flex md:items-center md:w-auto md:bg-transparent transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 p-4 md:p-0 justify-center items-center">
          <Link href="/" className="menu-item">About Me</Link>
          <Link href="/#skills" className="menu-item">Skills</Link>
          <div className="relative group">
            <Link href="/projects" className="menu-item">Projects</Link>
          </div>
          <a
            href="../../utils/Tushar_1.5_years_Software_Developer.pdf"
            download
            className="button-primary text-center text-green-500 cursor-pointer max-w-[200px]"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        #menu-toggle:checked ~ div {
          background: #030014;
          transform: translateX(0);
        }
        #menu-toggle:not(:checked) ~ div {
          transform: translateX(-100%); /* Hide by default on smaller screens */
        }
        
        @media (min-width: 768px) { /* For larger screens */
          #menu-toggle:not(:checked) ~ div {
            transform: translateX(0); /* Keep it visible */
          }
        }

        .hamburger-icon {
          display: block;
        }
        .cross-icon {
          display: none;
        }
        #menu-toggle:checked + label .hamburger-icon {
          display: none;
        }
        #menu-toggle:checked + label .cross-icon {
          display: block;
        }
        
        .menu-item {
          opacity: 1; /* Ensure items are visible */
          padding: 0.5rem 1rem;
          border-radius: 5px;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        
        .menu-item:hover {
          background-color: rgba(255, 255, 255, 0.3); /* Light background on hover */
          color: #d8b3f1; /* Light violet text color */
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
