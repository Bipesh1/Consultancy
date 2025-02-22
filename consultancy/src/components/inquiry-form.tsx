import React from 'react'
import logo from "@/assets/images/1.png"
import { userFormSchema } from '@/formschemas/user'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from "zod"
import { useTransition } from "react";
import axios from 'axios';

export default function Inquiryform() {
  const [isPending,startTransition]= useTransition()
    const form = useForm<z.infer<typeof userFormSchema>>({
      resolver: zodResolver(userFormSchema),
      defaultValues: {
        fullname: "",
        email: "",
        age: "",
        number: "",
        inquiry: "",
      },
    });
  const { register, handleSubmit, formState: { errors } } = form;
  const onSubmit=(values:z.infer<typeof userFormSchema>)=>{
    startTransition(async()=>{
      const response= await axios.post("http://localhost:3001/users",values,{
        withCredentials:true
      })
      if(response.status==201){
        form.reset()
        alert('Your form has been submitted')
      }
    })

  }
  return (
       
<div className="form-container mx-auto lg:mx-0">
    <div className='flex flex-col items-center space-y-4'>
        <p className='text-lg font-bold text-blue-900'>Get in Touch</p>
        <p className='text-2xl font-bold text-primary'>Please Drop Your Inquiry Here</p>
    </div>
      <div className="logo-container ">
        <img src={logo} alt="" width={100} height={100} className='mx-auto'/>
      </div>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" id="name" placeholder="Enter your full name" {...register("fullname")} required/>
          {errors.fullname && <p className="text-red-500">{errors.fullname.message}</p>}
          <label>Email</label>
          <input type="text" id="email" placeholder="Enter your email" {...register("email")} required/>
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          <label>Mobile Number</label>
          <input type="text" id="number" placeholder="Enter your mobile number" {...register("number")} required/>
          {errors.number && <p className="text-red-500">{errors.number.message}</p>}
          <label>Age</label>
          <input type="text" id="age" placeholder="Enter your age" {...register("age")} required/>
          {errors.age && <p className="text-red-500">{errors.age.message}</p>}
          <label>Inquiry</label>
          <textarea rows={9} className='outline-none resize-none ' id="inquiry" {...register("inquiry")} placeholder="Type your inquiry here" required/>
          {errors.inquiry && <p className="text-red-500">{errors.inquiry.message}</p>}
        </div>

        <button className="form-submit-btn" type="submit">Submit</button>
      </form>
    </div>
  )
}
