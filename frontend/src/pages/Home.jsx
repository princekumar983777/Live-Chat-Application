import React from 'react'
import Sidebar from '../components/sidebar/sidebar'

const home = () => {
  return (
    <div className=' w-full flex items-center justify-center h-screen bg-gray-100'>
      <div className='flex sm:h-[450px] md:h-[550px] w-full max-w-4xl rounded-lg overflow-hidden bg-gray-300 shadow-lg'>
        <Sidebar />
        {/* Add more content here if needed */}
      </div>
    </div>
  )
}

export default home