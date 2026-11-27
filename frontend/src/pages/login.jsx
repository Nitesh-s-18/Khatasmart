import { useState } from 'react'
import image from '../assets/logo.png'
import logo from '../assets/image.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function Login()
{
    const navigate=useNavigate()
    const location=useLocation()
    const registerdata=location.state
    const[logindata,setLogindata]=useState({email:"" , password:""})
    function handlechange(e)
    {
        e.preventDefault()
        setLogindata({
            ...logindata,
            [e.target.name] : e.target.value
        })
    }
    const formsubmit=(event)=>
    {
        
        event.preventDefault()
        if(registerdata.email===logindata.email && registerdata.password===logindata.password)
        {
            console.log(logindata)
            toast.success("Login Successfull!")  
            setTimeout(()=>{         
            navigate("/dashboard",{state:logindata})},1000)
        }
        else{
            toast.error("Invalid Credentials!")
        }        
        
        

    }

   return(
    <> 
    
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">

            <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white px-6 py-8 shadow-xl"> 
    <form className="flex flex-col gap-5" onSubmit={formsubmit}>
        <img src={logo}  className="mx-auto mb-3 h-auto w-56 max-w-full object-contain"/>
        <h1 className="text-center text-3xl font-bold text-indigo-900" > LOGIN PAGE </h1>
       <div className="flex flex-col gap-2">
             <label className="font-semibold text-gray-700">Email  </label> 
             <input type="email" className="border rounded-md border-black px-3 py-2" required placeholder='Enter Your Email' name='email' onChange={handlechange}/> </div>
        <div className="flex flex-col gap-2">
             <label className="font-semibold text-gray-700">Password</label>
             <input type="password" required className=" block w-full rounded-md border border-black px-3 py-2" placeholder='Enter Your password' name='password'onChange={handlechange}/> </div>
        <button type="submit"  className="mt-2 w-full rounded-lg bg-blue-600 px-4 py-3 font-bold text-white shadow-md transition hover:bg-blue-700 active:scale-95">Submit</button>
   </form>
   </div>
   </div>
   </>
   )  

}
export default Login