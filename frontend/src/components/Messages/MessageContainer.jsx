import React from 'react'
import Messages from './messages'
import MessageInput from './MessageInput'
import useConversation from '../../zustand/useConversation'
import { useEffect, useState } from "react"
import { TiMessages } from "react-icons/ti"
import { useAuthContext } from '../../context/AuthContext'

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation()
    const { authUser } = useAuthContext()
    
    useEffect(() => {
        return () => setSelectedConversation(null)
    }, [setSelectedConversation])

    const NoConversation = () => {
        return (
            <div className='flex items-center justify-center w-full h-full'>
                <div className='px-4 text-center'>
                    <div className='text-slate-500 my-3'>Welcome, {authUser?.username}! 👋</div>
                    <div className='text-slate-500 my-3'>Select a conversation to start messaging</div>
                    <div className='flex justify-center'>
                        <TiMessages className='text-8xl text-slate-500' />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {!selectedConversation ? (<NoConversation />) : (
                <>
                    <div className='bg-slate-500 px-4 py-2 mb-2'>
                        <span className='label-text'>To : </span>
                        <span className='text-grey-900 font-bold'>{selectedConversation?.username}</span>
                    </div>

                    < Messages />
                    <MessageInput />
                </>
            )}
            {/* Header */}

        </div>
    )
}

export default MessageContainer