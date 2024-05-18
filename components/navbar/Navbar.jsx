"use client"
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import RealLogo from '/assets/logo.png';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [showLocationsDropdown, setShowLocationsDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleLocationsDropdown = () => {
    setShowLocationsDropdown(!showLocationsDropdown);
  };

  const closeNav = () => {
    setNav(false);
  };

  const handleLinkClick = () => {
    closeNav();
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLocationsDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='bg-black text-white fixed top-0 left-0 right-0 z-50'>
      <div className='flex justify-between items-center h-24 px-4 md:px-10'>
        <Link legacyBehavior href="/" passHref>
          <a className='flex items-center' onClick={closeNav}>
            <Image src={RealLogo} alt='Real Logo' width={164} height={64} layout='intrinsic' priority />
          </a>
        </Link>
        <div className='hidden md:flex relative' ref={dropdownRef}>
          <ul className='flex items-center'>
            <li className='p-4 font-bold hover:text-[#c27803] text-xl transition duration-500 ease-out hover:ease-in cursor-pointer'><Link legacyBehavior href="/"><a onClick={handleLinkClick}>Home</a></Link></li>
            {/* Add onClick event handler to each link */}
            <li className='p-4 font-bold hover:text-[#c27803] text-xl transition duration-500 ease-out hover:ease-in cursor-pointer'><Link legacyBehavior href="/about"><a onClick={handleLinkClick}>About</a></Link></li>
            <li className='p-4 font-bold hover:text-[#c27803] text-xl transition duration-500 ease-out hover:ease-in cursor-pointer'><Link legacyBehavior href="/connect"><a onClick={handleLinkClick}>Connect</a></Link></li>
            <li className='p-4 font-bold hover:text-[#c27803] text-xl transition duration-500 ease-out hover:ease-in cursor-pointer'><Link legacyBehavior href="/give"><a onClick={handleLinkClick}>Give</a></Link></li>
            <li className='p-4 font-bold hover:text-[#c27803] text-xl transition duration-500 ease-out hover:ease-in cursor-pointer'><Link legacyBehavior href="/listen"><a onClick={handleLinkClick}>Listen</a></Link></li>
            <li className='p-4 font-bold hover:text-[#c27803] text-xl transition duration-500 ease-out hover:ease-in cursor-pointer relative flex items-center' onClick={toggleLocationsDropdown}>
              Locations <AiOutlineDown className="ml-1" />
              {showLocationsDropdown && (
                <div className='absolute left-0 mt-52 w-48 bg-white text-black rounded shadow-lg'>
                  <ul>
                    <li className='p-2 hover:bg-gray-200'><Link legacyBehavior href="/locations/calgary"><a onClick={handleLinkClick}>Calgary</a></Link></li>
                    <li className='p-2 hover:bg-gray-200'><Link legacyBehavior href="/locations/toronto"><a onClick={handleLinkClick}>Toronto</a></Link></li>
                    <li className='p-2 hover:bg-gray-200'><Link legacyBehavior href="/locations/vancouver"><a onClick={handleLinkClick}>Vancouver</a></Link></li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className='md:hidden z-30 text-3xl' onClick={handleNav}>
          { !nav ? <AiOutlineMenu /> : <AiOutlineClose /> }
        </div>
        {nav && (
          <motion.div 
            initial="closed"
            animate="open"
            variants={{ open: { opacity: 1, x: 0 }, closed: { opacity: 0, x: "-100%" } }}
            transition={{ duration: 0.8 }}
            className='fixed top-0 left-0 w-[75%] sm:w-[60%] h-full bg-black shadow-lg z-20'
          >
            <ul className='pt-20'>
              {/* Add onClick event handler to each link */}
              <li className='p-4'><Link legacyBehavior href="/"><a onClick={handleLinkClick}>Home</a></Link></li>
              <li className='p-4'><Link legacyBehavior href="/about"><a onClick={handleLinkClick}>About</a></Link></li>
              <li className='p-4'><Link legacyBehavior href="/connect"><a onClick={handleLinkClick}>Connect</a></Link></li>
              <li className='p-4'><Link legacyBehavior href="/give"><a onClick={handleLinkClick}>Give</a></Link></li>
              <li className='p-4'><Link legacyBehavior href="/listen"><a onClick={handleLinkClick}>Listen</a></Link></li>
              <li className='p-4'>
                <button onClick={toggleLocationsDropdown} className="flex items-center justify-between w-full text-left">
                  Locations <AiOutlineDown className="ml-1" />
                </button>
                {showLocationsDropdown && (
                  <ul className='bg-white text-black'>
                    <li className='p-2 hover:bg-gray-200'><Link legacyBehavior href="/locations/calgary"><a onClick={handleLinkClick}>Calgary</a></Link></li>
                    <li className='p-2 hover:bg-gray-200'><Link legacyBehavior href="/locations/toronto"><a onClick={handleLinkClick}>Toronto</a></Link></li>
                    <li className='p-2 hover:bg-gray-200'><Link legacyBehavior href="/locations/vancouver"><a onClick={handleLinkClick}>Vancouver</a></Link></li>
                  </ul>
                )}
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
