import React, { use, useState } from 'react'
import { Link } from 'react-router-dom'
import login from './login'
import GenderCheckBox from '../components/GenderCheckBox'
import useSignup from '../hooks/useSignup'

const Signup = () => {
    const[ formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
    })

    const {loading , signup} = useSignup()

    const handleCheckboxChange = (gender) => {
        setFormData({...formData, gender })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(formData)
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='flex flex-col items-center justify-center gap-2 w-full p-6 rounded-lg shadow-md bg-gray-200 text-neutral-900'>
                <h1 className='text-3xl font-bold text-center  '>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Usename</span>
                        </label>
                        <input 
                        type="text" 
                        placeholder="Your username" 
                        className="input input-bordered h-10 w-full text-white " 
                        value={formData.username}
                        onChange={(e) => setFormData({...formData, username: e.target.value})}
                        required />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Email</span>
                        </label>
                        <input 
                        type="email" 
                        placeholder="Your email" 
                        className="input input-bordered h-10 w-full text-white " 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email : e.target.value})}
                        required />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input 
                        type="password" 
                        placeholder="Enter Your password" 
                        className="input input-bordered h-10 w-full text-white "
                        required 
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password : e.target.value})}/>
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input 
                        type="password"
                        placeholder="Confirm password" 
                        className="input input-bordered h-10 w-full text-white " 
                        required 
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({...formData, confirmPassword : e.target.value})}
                        />
                    </div>

                    <GenderCheckBox
                    onCheckboxChange={handleCheckboxChange}
                    selectedGender={formData.gender} />


                    <Link to={"/login"} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an account</Link>  
                    <button type ='submit' className='btn btn-primary w-full mt-4' disabled={loading} >
                        {loading ? (
<span className="loading loading-spinner" ></span>
                        ): (
                            "sign Up"
                        )}
                        </button> 
                </form>
            </div>
        </div>
    )
}

export default Signup