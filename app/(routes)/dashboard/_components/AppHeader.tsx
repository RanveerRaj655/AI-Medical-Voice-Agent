import React from 'react'
import Image from 'next/image';
import { title } from 'process';
import { User } from 'lucide-react';
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
  return (
    <div className='flex items-center justify-between p-5 border-b shadow-md px-10 md:px-20 lg:px-40'>
      <Image
        src="/logo.svg"
        alt="MediVoice AI Logo"
        width={100}
        height={100}
      />
      <div className='flex gap-12 items-center'>
        {menuOptions.map((option,index) => (
           <Link key={index} href={option.path}>
            <h2 className='hover:font-bold cursor-pointer transition-all'>{option.name}</h2>
            </Link>
        ))}
      </div> 
      <UserButton />
    </div>
  )
}

export default AppHeader
