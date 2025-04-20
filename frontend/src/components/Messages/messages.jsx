import React, { useRef, useEffect } from 'react'
import Message from './message'
import useGetMessages from '../../hooks/useGetMessages'

const messages = () => {

  const { loading, messages } = useGetMessages()

  console.log(messages)
  const lastMessage = useRef(null)

  useEffect(() => {
    if (lastMessage.current) {
      lastMessage.current.scrollIntoView({behavior: 'smooth'})
    }
  }, [messages])

  return (
    <div className='px-4 flex-1 overflow-auto'>

        {!loading && messages.length   === 0 && (
            <div className='flex justify-center items-center h-full'>
                <p className='text-center text-slate-900'>start a conversation</p>
            </div>
        )}
        {!loading && messages.length > 0 && (
            messages.map((message) => (
                <Message key={message._id} ref={lastMessage} message={message} />

            ))
        )}
        

    </div>
  )
}

export default messages