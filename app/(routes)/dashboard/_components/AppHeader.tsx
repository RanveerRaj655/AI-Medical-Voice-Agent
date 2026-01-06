'use client';
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image';
import { title } from 'process';
import { User, Menu, X } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

const menuOptions = [
    {
        id: 1,
        name: 'Home',
        path: '/dashboard',
    }   ,
    {
        id: 2,
        name: 'History',
        path: '/dashboard/history',    
    },
    {
        id: 3,
        name: 'Pricing',
        path: '/dashboard/billing',    
    },
    {
        id: 4,
        name: 'Profile',
        path: '/dashboard/profile',    
    }

]
function AppHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className='relative' ref={mobileMenuRef}>
      <div className='flex items-center justify-between p-3 md:p-5 border-b shadow-md px-4 md:px-10 lg:px-20 xl:px-40 bg-white dark:bg-gray-800'>
        <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
          <Image
            src="/logo.svg"
            alt="EchoHealth_AI Logo"
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20"
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className='hidden md:flex gap-8 lg:gap-12 items-center'>
          {menuOptions.map((option,index) => (
             <Link key={index} href={option.path}>
              <h2 className='hover:font-bold cursor-pointer transition-all text-sm lg:text-base'>{option.name}</h2>
              </Link>
          ))}
        </div> 
        
        {/* Mobile Menu Button */}
        <div className='flex items-center gap-4'>
          <button 
            onClick={toggleMobileMenu}
            className='md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <UserButton />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 border-b shadow-lg z-50'>
          <div className='px-4 py-4 space-y-4'>
            {menuOptions.map((option,index) => (
               <Link key={index} href={option.path} onClick={() => setIsMobileMenuOpen(false)}>
                <div className='block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'>
                  <h2 className='text-base font-medium'>{option.name}</h2>
                </div>
                </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default AppHeader
