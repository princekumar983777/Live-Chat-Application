import React from 'react'
import userlogo from '../../assets/user.png'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'
import { formatedTime } from '../../utils/formateTime'
const Message = ({message}) => {
    const {authUser} = useAuthContext()
    const {selectedConversation} = useConversation()
    // console.log(authUser)
    const isCurrentUser = message?.senderID === authUser?._id
    
    // console.log(message?.senderID , authUser?._id)
    if (message?.senderID === message?.receiverID  && message?.senderID === authUser?._id) {
        return null
    }
    const ChatClassName = isCurrentUser ? 'chat-end' : 'chat-start'
    const profilePic = isCurrentUser ? 
        authUser?.profilePic : 
        selectedConversation?.profilePic

    const BGColor = isCurrentUser ? 'bg-green-500' : 'bg-blue-500'
    console.log(authUser)

    const Formated_Time = formatedTime(message?.createdAt)

    return (
        <div className={`chat ${ChatClassName}`} >
            <div className="chat-image  avatar">
                <div className="w-10 rounded-full">
                    <img src={profilePic} alt="User Logo" />
                </div>
            </div>

            <div className = {`chat-bubble text-white ${BGColor}`}>{message?.message}</div>

            <div className='chat-footer oopacity-50 text-xs flex gap-1 items-center text-slate-950' >{Formated_Time}</div>
        </div>
    )
}

export default Message