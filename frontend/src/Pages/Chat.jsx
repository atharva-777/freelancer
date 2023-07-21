import React, { useEffect, useState } from 'react'
import useSocket from '../hooks/useSocket'

export default function Chat() {
    const socket = useSocket()
    const [message,setMessage] = useState("")
    const [messages,setMessages] = useState([])

    // user side
    const userId = "64a03da7f2668fea7eea1e57"
    const clientId = "64a8fb8662bbdca41f66742b"
    const roomId = `${userId}-${clientId}`

    // client
    // const userId = "clientId"
    // const clientid = "userId"

    useEffect(() => {
        (async() => {
            try {
                    const res= await fetch(`http://localhost:8080/messages?roomId=${roomId}`)
                    const data = await res.json()
                    
                console.log(data)
            } catch(error) {

            }
        })()
    }, [])

    useEffect(() => {
        if (!socket) return
        socket.emit("join-room",{
            roomId
        })

        return () => {
            socket.emit("leave-room", {
                roomId
            })
        }
    }, [socket])

    useEffect(() => {
        if (!socket) return 

        socket.on("new-message",(event) => {
            setMessages([...messages, event.message])
        })

        return () => {
            socket.off("new-message")
        }
    }, [socket])

    // function to handle send message button click
    const handleSendMessage = async () => {
        console.log("btn clicked")
        const data = {
            message,
            sender:userId,
            receiver:clientId
        }
        socket.emit(`chat`,data)
    }

  return (
    <div>
        <input type="text" onChange={(e) => setMessage(e.target.value)} value={message} />
        <button onClick={handleSendMessage}>Send Message</button>

        <div className="mt-4">
           {messages.map(message => <p>{message}</p>)}
        </div>
    </div>
  )
}
