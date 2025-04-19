import React from 'react'
import { useAuthContext } from '../context/AuthContext';
import toast from "react-hot-toast"
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';

const handleInputErrors = ({ username, email, password, confirmPassword, gender }) => {
    if (!username || !email || !password || !confirmPassword || !gender) {
        toast.error("fill all the context")
        return true
    }

    if (password !== confirmPassword) {
        toast.error("Password don't match")
        return true
    }
}


const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async ({ username, email, password, confirmPassword, gender }) => {
        const checkError = handleInputErrors({
            username,
            email,
            password,
            confirmPassword,
            gender
        });

        if (checkError) {
            return
        } 
        try {
            setLoading(true)
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                    confirmPassword,
                    gender,
                }),
            })

            const data = await res.json()
            if (data.error) {
                throw new Error(data.error)
            }
            // console.log(data);
            localStorage.setItem("user",JSON.stringify(data))
            setAuthUser(data)

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return {
        loading, signup
    }
}

export default useSignup
