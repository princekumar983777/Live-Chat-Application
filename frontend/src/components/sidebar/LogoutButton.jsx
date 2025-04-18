import React from 'react'
import { BiLogOut } from 'react-icons/bi'
const logoutButton = () => {
  return (
    <div className="mt-4">
        <BiLogOut className='w-6 h-6 text-red-500  cursor-pointer' />
    </div>
  )
}

export default logoutButton