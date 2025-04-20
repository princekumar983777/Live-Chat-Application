import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation'
import useGetConversations from '../../hooks/useGetConversations';
import { toast } from 'react-hot-toast';

const SearchInput = () => {
  const {setSelectedConversation} = useConversation()
  const [search, setSearch] = useState('')
  const {conversations} = useGetConversations()

  // console.log("All Loaded Conversations", conversations)

  const handleSearch = (e) => {
    e.preventDefault()
    if(!search) return
    // console.log("Search", search)
    const conversation = conversations?.find((conversation) => {
       return conversation?.username.toLowerCase().includes(search?.toLowerCase())
    })
    console.log("Conversation : ", conversation)
    if(conversation) {
      setSelectedConversation(conversation)
      setSearch('')
    } else {
      toast.error('No conversation found')
    }
  }

  return (
    <form onSubmit={handleSearch} className='flex items-center gap-2 bg-gray-700 rounded-full p-2'>
      <div className='relative flex-grow'>
        <input
          type='text' 
          placeholder='Search or start new chat' 
          className='w-full pl-10 pr-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none' 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
      </div>
      <button 
        type="submit" 
        className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors duration-200 flex items-center justify-center min-w-[80px]'
      >
        Search
      </button>
    </form>
  )
}

export default SearchInput