import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"

const Users = ({ users }) => {
    // const [users, setUsers] = useState([])


    // const fetchUsers = async () => {
    //     const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    //     const data = await response.data
    //     setUsers(data)
    // }

    // console.log(users)
    // useEffect(() => {
    //     fetchUsers()

    // }, [])


    return <div>
        {users.map((u) => (
            <div key={u.id}>{u.name}</div>
        ))}
    </div>
}

export async function getServerSideProps(context) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    const data = await response.data
    return {
        props: { users: data }
    }
}

export default Users