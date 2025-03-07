
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import axios from "axios"

import { useState, useTransition } from 'react'

export default function Classdelete({id,onupdate}:{
    id:string,
    onupdate:any
}) {
    const [isOpen,setIsOpen]= useState<boolean>(false)
    const [_,startTransition]= useTransition()
    const handleDelete=()=>{
        console.log("hello")
        startTransition(async()=>{
            console.log("Hello")
            const response= await axios.delete( `${import.meta.env.VITE_API_URL}/classes/${id}`)
            if(response.status==200){
                setIsOpen(false)
                onupdate()
            }
        })
    }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} >
    <DialogTrigger>Delete</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete
          and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>
      <Button onClick={handleDelete}>Yes</Button>
    </DialogContent>
  </Dialog>
  )
}
