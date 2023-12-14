import React from 'react'
import { IoSearch } from "react-icons/io5";

const Searchbar = () => {
  return (
    <div>
        
    <form className='mt-32 ml-40 mr-36'>   
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
        <div className="relative">
            <input type="text" id="default-search" className="block w-full p-3 ps-10 text-base text-gray-500 border border-gray-300 rounded-lg placeholder:text-gray-300 placeholder:text-base bg-white" placeholder="Search events by name or keyword" required/>
            <button type="submit" className="text-gray-400 absolute end-2.5 bottom-2.5 rounded-lg text-2xl px-4 py-1"><IoSearch /></button> 
        </div>
    </form>

    </div>
  )
}

export default Searchbar