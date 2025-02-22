import axios from 'axios'
import React, { useEffect, useState, useTransition } from 'react'
import { UserTable } from '../components/user-table'

export default function UserAdmin() {
    const [users,setUsers]=useState<any>([])
    const [isPending,startTransition]= useTransition()
    
    useEffect(()=>{
        startTransition(async()=>{
            const response =await axios.get("http://localhost:3001/users",{
                withCredentials:true
            })
            console.log(response)
            setUsers(response.data)
        })
    },[])
  return (
   <UserTable users={users}/>
  )
}
