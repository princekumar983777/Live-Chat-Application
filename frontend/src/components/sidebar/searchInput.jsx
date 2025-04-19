import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
      <div className='relative flex-grow'>
        <input 
          type='text' 
          placeholder='Search or start new chat' 
          className='input input-bordered w-full pl-10 pr-4 py-2 bg-gray-700 text-white placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500' 
        />
        <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
      </div>
    </form>
  )
}

export default SearchInput