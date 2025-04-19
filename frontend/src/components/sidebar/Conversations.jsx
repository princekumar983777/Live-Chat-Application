import React from 'react'
import UnitConversation from './UnitConversation'
import useGetConversations from '../../hooks/useGetConversations'

const Conversations = () => {
  const { loading, conversations } = useGetConversations()
  console.log("calling first time", conversations )
  
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      { conversations.map((conversation, index) => (

        <UnitConversation
          key={conversation._id}
          conversation={conversation}
          lastIndex={index === conversations.length - 1}
        />
      ))}

      { loading ? (
       <span className='loading loading-spinner'></span>
      ) : null }
    <UnitConversation /> 
    </div>
  )
}

export default Conversations