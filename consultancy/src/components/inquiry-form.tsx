import React from 'react'
import logo from "@/assets/images/1.png"

export default function Inquiryform() {
  return (
       
<div className="form-container mx-auto lg:mx-0">
    <div className='flex flex-col items-center space-y-4'>
        <p className='text-lg font-bold text-blue-900'>Get in Touch</p>
        <p className='text-2xl font-bold text-primary'>Please Drop Your Inquiry Here</p>
    </div>
      <div className="logo-container ">
        <img src={logo} alt="" width={100} height={100} className='mx-auto'/>
      </div>

      <form className="form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your full name" required/>

          <label>Email</label>
          <input type="text" id="email" name="email" placeholder="Enter your email" required/>
          <label>Mobile Number</label>
          <input type="text" id="number" name="number" placeholder="Enter your mobile number" required/>
          <label>Age</label>
          <input type="text" id="age" name="age" placeholder="Enter your age" required/>
          <label>Inquiry</label>
          <textarea rows={9} className='outline-none resize-none ' id="inquiry" name="inquiry" placeholder="Type your inquiry here" required/>
        </div>

        <button className="form-submit-btn" type="submit">Submit</button>
      </form>
    </div>
  )
}
