import React from 'react'
import userImage from '../../assets/user.png'

const UnitConversation = () => {
    return (
        <> 
        <div className='fex gap-2 items-center hover:bg-blue-500 rounded p-2 py-1 cursor-pointer transition duration-200 ease-in-out'>
            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    <img src={userImage} alt='user' className='' />
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <div className='flex fap-3 justify-between'>
                    <p className='font-bold text-slate-700'>Kushwaha</p>
                    <span className='text-sm text-slate-700'>12:00 PM</span>

                </div>
            </div>
        </div>
        <div className='divider my-0 py-0 h-1 bg-gray-500'></div>
        </>    
    )
}

export default UnitConversation