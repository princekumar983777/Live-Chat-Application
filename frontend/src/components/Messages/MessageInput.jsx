import React from 'react'
import { BsSend } from 'react-icons/bs'
import { useState } from 'react'
import useSendMessage from '../../hooks/useSendMessage'
import { toast } from 'react-hot-toast'
import { FaSpinner } from 'react-icons/fa'

const MessageInput = () => {
  const [message, setMessage] = useState('')
  const { sendMessage, loading } = useSendMessage()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!message) return
    await sendMessage(message)
    setMessage('')
  }

  return (
    <form className='px-4 my-3 ' onSubmit={handleSubmit}>
        <div className='w-full relative'>
            <input type="text" placeholder='Type here...' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />

            <button type ='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 cursor:pointer hover:text-blue-600 rounded-lg transition-all duration-200 ease-in-out'>
                {loading ? <FaSpinner className='animate-spin' /> : <BsSend />}
            </button>
        </div>

    </form>
  )
}

export default MessageInput