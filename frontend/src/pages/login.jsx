import { useState } from 'react'
import image from '../assets/logo.png'

function Login()
{
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[number,setNumber]=useState("")
    const formsubmit=(event)=>
    {
        event.preventDefault()
        console.log(email,password,number)
    }

   return(
    <> 
    
    <img src={image} className='image'/>
    <h1 className='header' > LOGIN PAGE </h1>
    <form className="form" onSubmit={formsubmit}>
        Email <input type="email" className="mail" required placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/> 
        Password: <input type="password" required className="pass" placeholder='Enter Your password' value={password} onChange={(e)=>setPassword(e.target.value)}/> 
        PhoneNumber: <input  type="number" required className="num" placeholder='Enter Your PhNo' value={number} onChange={(e)=>setNumber(e.target.value)}/> 
        <button type="submit" className='bg-blue-500'>Submit</button>
   </form>
   </>

   )
   

}
export default Login