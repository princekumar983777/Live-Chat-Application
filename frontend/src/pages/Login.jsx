import React from 'react'
import signup from './signup'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='flex flex-col items-center justify-center gap-2 w-full p-6 rounded-lg shadow-md bg-gray-200 text-neutral-900'>
                <h1 className='text-3xl font-bold text-center  '>Login</h1>
                <form >
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>User Email</span>
                        </label>
                        <input type="email" placeholder="Your email" className="input input-bordered h-10 w-ful text-white " required />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered h-10 w-ful text-white " required />
                    </div>

                    
                    <Link to={"/signup"} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>{"Don't"} have an account?</Link>  
                    <button className='btn btn-primary w-full mt-4'>Login</button>  
                </form>
            </div>
        </div>
    )
}

export default Login