
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

import React, { useState, useTransition } from 'react'

export default function Classdelete({id,onupdate}:{
    id:string,
    onupdate:any
}) {
    const [isOpen,setIsOpen]= useState<boolean>(false)
    const [isPending,startTransition]= useTransition()
    const handleDelete=()=>{
        console.log("hello")
        startTransition(async()=>{
            console.log("Hello")
            const response= await axios.delete(`http://localhost:3001/classes/${id}`,{
                withCredentials:true
            })
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
