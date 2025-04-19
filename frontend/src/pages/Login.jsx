import React from 'react'
import signup from './signup'
import { Link } from 'react-router-dom'
import useLogin from '../hooks/useLogin'
import { useState } from 'react'


const Login = () => {

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const{ login , loading } = useLogin()

const handleSubmit= async (e) => {
    e.preventDefault()
    await login(email , password)
}

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='flex flex-col items-center justify-center gap-2 w-full p-6 rounded-lg shadow-md bg-gray-200 text-neutral-900'>
                <h1 className='text-3xl font-bold text-center  '>Login</h1>
                <form onClick={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>User Email</span>
                        </label>
                        <input type="email" placeholder="Your email" className="input input-bordered h-10 w-ful text-white "
                        value ={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered h-10 w-ful text-white " 
                        value ={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                    </div>

                    
                    <Link to={"/signup"} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>{"Don't"} have an account?</Link>  
                    <button type ='submit' className='btn btn-primary w-full mt-4' disabled={loading} >
                        {loading ? (
<span className="loading loading-spinner" ></span>
                        ): (
                            "Login"
                        )}
                        </button>
                </form>
            </div>
        </div>
    )
}

export default Login