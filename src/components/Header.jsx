import Link from 'next/link'
import React from 'react'
import { FaSearch } from "react-icons/fa";


const Header = () => {
  return (
   <>
   <div className='bg-slate-300 flex justify-between items-center py-2 px-10'>
    <Link href={"/"}>
    <span className='text-slate-500 font-bold text-[1.3rem] md:text-[1.5rem]'>Real</span>
    <span className='text-slate-900 font-bold text-[1.3rem] md:text-[1.5rem] ml-2'>Estate</span>
    </Link>
    <div className='bg-gray-400 flex items-center py-1 px-2 rounded-md'>
      <input type="text" name="searchTern" id="searchTerm" placeholder='search....'
      className='bg-transparent border-none outline-none text-white  w-[5rem] md:w-auto' />
      <FaSearch className='text-slate-800'/>
    </div>

    <ul className='hidden  md:flex gap-4 text-slate-900 text-[1rem]'>
      <li>Home</li>
      <li>About</li>
      <li>Sign In</li>
    </ul>
   </div>
   </>
  )
}

export default Header