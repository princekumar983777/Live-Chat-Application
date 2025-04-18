import React from 'react'
import Sidebar from '../components/sidebar/sidebar'
import MessageContainer from '../components/Messages/MessageContainer'

const home = () => {
  return (

      <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-200 '>
        <Sidebar />

        <MessageContainer />

        {/* Add more content here if needed */}
      </div>

  )
}

export default home