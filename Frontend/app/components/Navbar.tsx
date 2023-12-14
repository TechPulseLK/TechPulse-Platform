import React from 'react'
import Link from 'next/link'
import { FaPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="icon.svg" alt="Logo" className="h-8 w-8" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">Techpulse</span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link href="#">
            <div className='flex py-2 mr-6'>
              <div className='pr-3 pt-1 text-gray-500'>
                  <FaPlus/>
              </div>
              <span className='text-base font-medium text-gray-500'>Place Your Event</span>
            </div>
            </Link>
            <button type="button" className="text-white bg-primary hover:bg-primary font-semibold rounded-md text-sm px-4 py-2 text-center">Register Now</button>
            
            {/* mobile hamburger icon */}
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
            </button>

          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar