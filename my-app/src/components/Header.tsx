"use client";
import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../app/store'
import SearchIcon from './icons/SearchIcon';

const Header = () => {
  const data = useSelector((state: RootState) => state.todo);
  console.log(data);
  return (
    <div className='flex justify-between py-4 items-center px-12'>
      <h1 className='text-4xl font-bold'>DUN.</h1>
      <div className='flex items-center space-x-4 '>
         <span className="text-lg font-20px font-bold text-gray-700">Hello Ashan</span>
         <div className="w-6 h-6 cursor-pointer"><SearchIcon/></div>
      </div>
    </div>
      
  
  )
}

export default Header