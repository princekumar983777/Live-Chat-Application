import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
      <input 
        type='text' 
        placeholder='Search...' 
        className='input input-bordered rounded-full px-4 py-2 flex-grow text-white' 
      />
      <button 
        type='submit' 
        className='btn btn-circle bg-sky-500 text-white flex items-center justify-center'
      >
        <FaSearch className='w-5 h-5' />
      </button>
    </form>
  )
}

export default SearchInput