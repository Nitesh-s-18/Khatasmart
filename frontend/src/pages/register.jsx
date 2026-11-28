import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { resgisterschema } from "../components/formschema/registerschema";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from '../assets/image.png'

function Register() {
    const navigate=useNavigate()
    const {register,handleSubmit,formState:{errors}}=useForm({resolver:zodResolver(resgisterschema)})
    function onsubmit1(data){
        console.log(data)
        if(data.password===data.confirmpassword)
            {
                toast.success("Registration successful")
                setTimeout(()=>{
                navigate("/login",{
                state:data
             })},1000)
    }
    else
        toast.error("Password & Confirm Password doesnt match")
        
    }
    return (  
        <>
         <div className=" flex  justify-center items-center bg-gradient-to-r from-blue-100 to-purple-300">
         <div className='mt-25 w max-w-sm  rounded-md border border-gray-400 bg-white  shadow-lime-50  px-4 py-6 ' >
        <form className="form" onSubmit={handleSubmit(onsubmit1)}>
             <img src={logo}  className="mx-auto mb-3 h-auto w-56 max-w-full object-contain"/>
            <h1 className=' text-center font-bold text-2xl mt-3'>REGISTER PAGE</h1>
        Name: <input type="text" placeholder="Enter your name" className='block w-full rounded-md border border-gray-300 px-3 py-2 text-center text-sm' {...register("name")}/>
        <p> {errors.name?.message}</p>
        Email: <input type="email" placeholder="Enter your mail" className='block w-full rounded-md border border-gray-300 px-3 py-2 text-center text-sm'  {...register("email")}a/>
        <p> {errors.email?.message}</p>       
        Mobile Number: <input type="number" placeholder="Enter your Age" className='block w-full rounded-md border border-gray-300 px-3 py-2 text-center text-sm'  {...register("mb")}/>
        <p> {errors.mb?.message}</p>
        Shop Name:<input type="text" placeholder="Enter Shop Name" className="block border w-full rounded-md border-gray-300 px-3 py-2 text-center text-sm" {...register("shopname")}/>
        <p>{errors.shopname?.message}</p>
        
       Select Shop Category: <select className="block border w-full rounded-md border-gray-300 px-3 py-2 text-center text-sm" {...register("shopCategory")}>
            <option value="">Select Shop Category</option>
            <option value="Grocery Store">Grocery Store</option>
            <option value="Supermarket">Supermarket</option>
            <option value="Medical Store">Medical Store</option>
            <option value="Clothing Store">Clothing Store</option>  
        </select>
        <p>{errors.shopCategory?.message}</p>
         Password: <input type="password" placeholder="Enter your password" className='block w-full rounded-md border border-gray-300 px-3 py-2 text-center text-sm' {...register("password")}/>
        <p> {errors.password?.message}</p>
        Confirm Password:<input type="password" placeholder="Re-enter your password" className="block border w-full rounded-md border-gray-300 px-3 py-2 text-center text-sm" {...register("confirmpassword")}/>
        <p>{errors.confirmpassword?.message}</p>

        <button type="submit" className='bg-indigo-500 mt-5 mx-auto block rounded-sm px-3 py-1 font-semibold text-white hover:bg-indigo-500'>SUBMITT</button>
        </form>
        <p> Already have an Account?<Link className="text-blue-500 " to={"/login"}>     Login</Link></p>
        </div>
        </div>
        </>
    );
}

export default Register;