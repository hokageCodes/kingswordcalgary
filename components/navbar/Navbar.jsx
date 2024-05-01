"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/logo.png';
import Dropdown from '../dropdown/Dropdown';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const handleLinkClick = () => setIsOpen(false); // Closes the menu on link click

  const sidebarVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' }
  };

  return (
    <nav className="bg-black text-white shadow-lg z-50 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image priority src={Logo} alt="Logo" width={140} height={60} layout="intrinsic" />
          </Link>
          {/* Primary Nav (desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="py-2 px-3 text-lg font-semibold">Home</Link>
            <Link href="/about" className="py-2 px-3 text-lg font-semibold">About</Link>
            <Link href="/connect" className="py-2 px-3 text-lg font-semibold">Connect</Link>
            <Link href="/give" className="py-2 px-3 text-lg font-semibold">Give</Link>
            <Link href="/listen" className="py-2 px-3 text-lg font-semibold">Listen</Link>
            <div className="relative">
              <button onClick={toggleDropdown} className="flex items-center py-2 px-3 text-lg font-semibold">
                Locations <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </button>
              <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} />
            </div>
          </div>
          {/* Mobile Button */}
          <div className="md:hidden z-50">
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-center p-2">
              {isOpen ? <FaTimes className="w-8 h-8" /> : <FaBars className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
        className={`absolute w-full h-screen bg-black md:hidden z-40`}
      >
        <div className="flex flex-col items-center pt-24">
          {['/', '/about', '/connect', '/give', '/listen'].map((path, index) => (
            <Link key={index} href={path} className="block py-4 px-8 text-lg font-bold hover:bg-gray-700 w-full text-center" onClick={handleLinkClick}>
              {['Home', 'About', 'Connect', 'Give', 'Listen'][index]}
            </Link>
          ))}
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center py-2 px-3 text-lg font-semibold">
              Locations <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
            </button>
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} />
          </div>
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
