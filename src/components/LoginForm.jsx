import React, { useState } from 'react'
import {BsEyeSlash ,BsEye} from "react-icons/bs"
import { Link, useNavigate } from 'react-router-dom'
import {toast} from "react-hot-toast"

const LoginForm = ({setLoggedIn}) => {
    const [formData, setFormData] = useState({
        email:"", password:""
    })
    const [showPassword,setShowPassword] = useState(false);
    const navigate = useNavigate();

    function changeHandler (e){
        setFormData(prevValue=>({
            ...prevValue,
            [e.target.name]: e.target.value 
        }))
    }
    function submitHandler(e){
        e.preventDefault();
        setLoggedIn(true);
        toast.success("Logged In")
        navigate("/dashboard")

    }

  return (
    <form onSubmit={submitHandler} className='flex w-full flex-col gap-y-6 mt-4'>
        <label className='w-full '>
            <p className='text-[0.875rem] leading-[1.375rem] mb-1'>Email Address<sup className='text-pink-600'>*</sup></p>
            <input 
            name='email'
            required
            onChange={changeHandler}
            value={formData.email}
            type="email"
            placeholder='Enter Email Address'
            className='text-white rounded-sm w-full p-[12px] bg-[#071827] focus:ring-blue-500 focus:ring-2 outline-none  border-b-gray-200  '
            />
        </label>
        {/* For Password  */}
        <label className='w-full relative'>
            <p className='text-[0.875rem] leading-[1.375rem] mb-1'>Password<sup className='text-pink-600'>*</sup></p>
            <input 
           
            name='password'
            required
            onChange={changeHandler}
            value={formData.password}
            type= {showPassword ? ("text") : ("password")}
            placeholder='Enter Password'
            className='text-white rounded-sm w-full p-[12px] bg-[#071827] focus:ring-blue-500 focus:ring-2 outline-none  border-b-gray-200'

            />

            <span className='absolute  right-3 top-[43px] cursor-pointer' onClick={()=>{setShowPassword((prev) => !prev)}}>
                {showPassword ? (<BsEye/>) : (<BsEyeSlash/>)}
            </span>

            {/* Forgot Password */}
            <Link to={"#"}>
                <p className='text-xs mt-1 text-blue-600 absolute right-1'>Forgot Password</p>
            </Link>
        </label>

        <button className='text-center mt-6 bg-yellow-500 rounded-md text-semibold  text-black py-[6px] font-semibold leading-[1.375rem]'>Sign In</button>
    </form>
  )
}
    
export default LoginForm
