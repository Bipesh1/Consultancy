import axios from 'axios'
import { useEffect, useState, useTransition } from 'react'
import { UserTable } from '../components/user-table'

export default function UserAdmin() {
    const [users,setUsers]=useState<any>([])
    const [isPending,startTransition]= useTransition()
    
    useEffect(()=>{
        startTransition(async()=>{
            const response =await axios.get(`${import.meta.env.VITE_API_URL}/users`)
            console.log(response)
            setUsers(response.data)
        })
    },[])

    if (isPending) {
        return (
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
          </div>
        );
      }
  return (
   <UserTable users={users}/>
  )
}
