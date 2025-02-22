import axios from 'axios'
import { useEffect, useState, useTransition } from 'react'
import { UserTable } from '../components/user-table'

export default function UserAdmin() {
    const [users,setUsers]=useState<any>([])
    const [_,startTransition]= useTransition()
    
    useEffect(()=>{
        startTransition(async()=>{
            const response =await axios.get(`${import.meta.env.VITE_API_URL}/users`)
            console.log(response)
            setUsers(response.data)
        })
    },[])
  return (
   <UserTable users={users}/>
  )
}
