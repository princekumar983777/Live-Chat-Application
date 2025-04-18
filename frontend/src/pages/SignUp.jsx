import React from 'react'
import { Link } from 'react-router-dom'
import login from './login'
import GenderCheckBox from '../components/GenderCheckBox'

const signup = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='flex flex-col items-center justify-center gap-2 w-full p-6 rounded-lg shadow-md bg-gray-200 text-neutral-900'>
                <h1 className='text-3xl font-bold text-center  '>Sign Up</h1>
                <form >
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Usename</span>
                        </label>
                        <input 
                        type="text" 
                        placeholder="Your username" 
                        className="input input-bordered h-10 w-ful text-white " 
                        required />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Email</span>
                        </label>
                        <input 
                        type="email" 
                        placeholder="Your email" 
                        className="input input-bordered h-10 w-ful text-white " 
                        required />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input 
                        type="password" 
                        placeholder="Enter Your password" 
                        className="input input-bordered h-10 w-ful text-white " 
                        required />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input 
                        type="password"
                        placeholder="Confirm password" 
                        className="input input-bordered h-10 w-ful text-white " 
                        required />
                    </div>
                    <GenderCheckBox />
                    <Link to={"/login"} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an account</Link>  
                    <button className='btn btn-primary w-full mt-4'>Signup</button> 
                </form>
            </div>
        </div>
    )
}

export default signup