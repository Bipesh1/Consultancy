import ClassDetailsSection from '@/components/sections/class-details-section'
import FromOurTutorSection from '@/components/sections/from-our-tutor-section'
import axios from 'axios'
import { motion } from 'framer-motion'
import { useEffect, useState, useTransition } from 'react'
import { useParams } from 'react-router-dom'

export default function Classdetails() {
    const {id}=useParams()
    const [classDetails, setClassDetails]= useState<any>()
    const [isPending,startTransition]= useTransition()

    useEffect(()=>{
            startTransition(async ()=>{
                const response= await axios.get(`http://localhost:3001/classes/${id}`,{
                    withCredentials:true
                })
                console.log(response)
                setClassDetails(response.data)
            })
    },[])
  return (
    <motion.div className='py-10 md:px-12 px-4'>
        <ClassDetailsSection classdetails={classDetails}/>
        <FromOurTutorSection classdetails={classDetails}/>
    </motion.div>
  )
}
