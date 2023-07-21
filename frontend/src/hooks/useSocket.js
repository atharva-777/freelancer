import React, { useEffect, useState } from 'react'
import {io} from "socket.io-client"

export default function useSocket() {
    const [socket,setSocket] = useState(null)

    useEffect(() => {
        const connection = io("http://localhost:8080")

        console.log(connection)

        setSocket(connection)

        return () => {
            socket?.disconnect()
        }
    }, [])

  return socket
}
