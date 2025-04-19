import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import Signup from "../pages/signup"
import toast from "react-hot-toast";

const handleInputError = ({email, password}) => {
    if (!email || !password) {
        toast.error("fill all the context")
        return true
    }

    return false
}

const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const login = async (email, password) => {
        const checkError = handleInputError({
            email,
            password
        })

        if (checkError) {
            return
        }
        try {
            setLoading(true)
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    email,
                    password,
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

    return {loading , login}
}

export default useLogin