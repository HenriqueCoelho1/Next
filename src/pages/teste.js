import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Teste() {
    const [users, setUsers] = useState([])


    const fetchUsers = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        const data = await response.data
        setUsers(data)
    }

    console.log(users)
    useEffect(() => {
        fetchUsers()

    }, [])
    return <h1>Teste</h1>
}