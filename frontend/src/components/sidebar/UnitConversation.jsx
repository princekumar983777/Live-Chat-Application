import React from 'react'
import userImage from '../../assets/user.png'
import useConversation from '../../zustand/useConversation'

const UnitConversation = ({ conversation , lastIndex }) => {
    const {selectedConversation , setSelectedConversation} = useConversation()

    const isSelected = selectedConversation && selectedConversation._id === conversation?._id
    
    if (!conversation) return null;
    
    return (
        <> 
        <div className={`flex gap-2 items-center hover:bg-blue-500 rounded 
            p-2 py-1 cursor-pointer transition duration-200 ease-in-out
               ${isSelected ? "bg-sky-500" : ""} `} 
               onClick={() => setSelectedConversation(conversation)} >
            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    <img src={conversation?.profilePic} alt='' className='' />
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <div className='flex gap-5 justify-between'>
                    <p className='font-bold text-slate-700'>{conversation?.username }</p>
                    <span className='text-sm text-slate-700'>12:00 PM</span>
                </div>
            </div>
        </div>
    {!lastIndex && <div className='divider my-0 py-0 h-1 bg-gray-500'></div>}
        </>    
    )
}

export default UnitConversation