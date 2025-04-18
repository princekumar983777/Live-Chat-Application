import React from 'react'
import userlogo from '../../assets/user.png'

const Message = () => {
    return (
        <div className='chat chat-start' >
            <div className="chat-image  avatar">
                <div className="w-10 rounded-full">
                    <img src={userlogo} alt="User Logo" />
                </div>
            </div>

            <div className = "chat-bubble text-white bg-blue-500">Hello</div>

            <div className='chat-footer oopacity-50 text-xs flex gap-1 items-center text-slate-950' >10:14</div>
        </div>
    )
}

export default Message