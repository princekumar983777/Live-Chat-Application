import { useState } from "react"
import useConversation from "../zustand/useConversation"
import { useAuthContext } from "../context/AuthContext"
import { toast } from "react-hot-toast"

const useSendMessage = () => {
  const [loading, setLoading] = useState(false)
  const { messages, setMessages, selectedConversation } = useConversation()
  const { authUser } = useAuthContext()

  const sendMessage = async (message) => {
    setLoading(true)
    try {
        if(!message) return
        if(!selectedConversation?._id) {
            toast.error("Please select a conversation")
            return
        }
        
        const res = await fetch(`api/messages/send/${selectedConversation._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({message})
        })
        const data = await res.json()
        // console.log('Response data:', data)
        
        if(data.error){
            throw new Error(data.error)
        }
        
        setMessages([...messages, data])
        // return data // Return the response data
    } catch (error) {
        // console.error('Error sending message:', error)
        toast.error(error.message)
        // throw error // Re-throw the error to handle it in the component
    } finally {
        setLoading(false)
    }
  }
  return {sendMessage, loading}
}

export default useSendMessage