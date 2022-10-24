import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './Contact.css'
const Contact = () => {

  const {register,formState: { errors }, handleSubmit} =useForm();
  const [data , setData ] =useState("");
  return (
    
    <div className='page'>
    <div className='container'>
      <div className='contactdiv'>
        <div className='form'>
        <h2>Get in Touch</h2>
        <form className= "fle" onSubmit={handleSubmit((data) => {setData(JSON.stringify(data));   
          
          alert("Your Message is Sent\n"+ 
          "Name : " + JSON.stringify(data.name) + "\n" +
          "Email : " + JSON.stringify(data.email) +  "\n" +
          "Subject : " + JSON.stringify(data.subject) +  "\n" +
          "Message : " + JSON.stringify(data.msg)); })}>

        <input type="text"{...register("name",{ required: true })} placeholder='Name' className='tf' />
        {errors.name && <p style={{color: "yellow" , fontSize:"15px"}}>Name is Required*</p>}
        <input type="text"{...register("email", { required: true })} placeholder='Email' className='tf' />
        {errors.email && <p style={{color: "yellow" , fontSize:"15px"}}>Email is Required*</p>}
        <input type="text"{...register("subject", { required: true })} placeholder='Subject' className='tf' />
        <input type="text"{...register("msg", { required: true, maxLength: 200  })} placeholder='Message' className='msg' />
        {errors.msg && <p style={{color: "yellow" , fontSize:"15px"}}>Message is Required*</p>}
        {/* <p>{data}</p> */}
        <input type="submit" value="submit" className='sendbtn'/>
        </form>
        </div>
      </div>
      <div className='Infodiv'>

        <h2>Contact Us</h2>
        <div className='infoline'>
        <div className='circle'><span className="material-symbols-outlined mg">home</span></div>
        <h4><b>Address : </b></h4>
        <p> Millitar accounts CHS</p>
        </div>

        <div className='infoline'>
        <div className='circle'><span className="material-symbols-outlined mg">call</span></div>
        <h4><b>Phone : </b></h4>
        <p> 03364274008</p>
        </div>

        <div className='infoline'>
        <div className='circle'><span className="material-symbols-outlined mg">contact_mail</span></div>
        <h4><b>Email : </b></h4>
        <p> anique.unique@gmail.com</p>
        </div>

        <div className='infoline'>
        <div className='circle'><span className="material-symbols-outlined mg">language</span></div>
        <h4><b>Website : </b></h4>
        <p> Netflix.com</p>
        </div>
       
      </div>
    </div>
    </div>
   
  )
}

export default Contact
