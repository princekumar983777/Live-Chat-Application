import React from 'react'
import Conversations from './Conversations'
import LogoutButton from './logoutButton'
import SearchInput from './searchInput'

const sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col '>
      <SearchInput />
      <hr
        className="my-2 h-0.5 border-t-0 bg-gray-500 "
      />
      {/* 'divider my-0 py-0 h-1 bg-gray-500' */}
      <Conversations />

      <LogoutButton />
    </div>
  )
}

export default sidebar