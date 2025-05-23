import useConversation from "../zustand/useConversation"    
import { toast } from "react-hot-toast"
import { useEffect , useState } from "react"

const useGetMessages = () => {
  const [loading, setLoading] = useState(false)
  const { messages, setMessages, selectedConversation } = useConversation()

  useEffect(() => {
    const getMessages = async () => {
      try {
        setLoading(true)
        const res = await fetch(`/api/messages/${selectedConversation._id}`)

        const data = await res.json()
        if(data.error){
            throw new Error(data.error)
        }
        setMessages(data)

      } catch (error) {
        toast.error(error.message)
      } finally {
        setLoading(false)
      }
    }
    if(selectedConversation?._id){  
      getMessages()
    }
  }, [selectedConversation?._id , setMessages])

  return { loading, messages }
}

export default useGetMessages