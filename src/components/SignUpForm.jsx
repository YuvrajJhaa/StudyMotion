import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { BsEyeSlash ,BsEye } from "react-icons/bs"
import { useNavigate } from 'react-router-dom'

const SignUpForm = ({setLoggedIn}) => {
    const [formData, setFormData] = useState({
        firstName : "", lastName:"", email:"", password:"", confirmPassword:""
    })

    const [accountType, setAccountType] = useState("student");

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
        if(formData.password !== formData.confirmPassword){
            toast.error("Something went wrong !");
            return;
        }
        setLoggedIn(true);
        navigate("/dashboard");

        toast.success("Sign Up successfull");
        const accountData = {
            ...formData,
        }
        // console.log(accountData);
    }

  return (
    <div >
      {/* Student Instructor Tab  */}
      <div className='flex bg-gray-700 p-1  gap-x-1 text-center  my-6 rounded-full max-w-max'>
        <button onClick={()=>setAccountType("student")} className={`${accountType==="student" ? "bg-gray-900  " :  "bg-transparent"} rounded-full px-5 py-2 transition duration-200`}>Student</button>
        <button onClick={()=>setAccountType("instructor")} className={`${accountType!=="student" ? "bg-gray-900  " :  "bg-transparent"} py-2 px-5  rounded-full transition duration-200`}>Instructor</button>
      </div>

      <form onSubmit={submitHandler} className='flex w-full flex-col gap-y-6 mt-4' >
            {/* First Name and Last Name  */}
        <div className='flex gap-x-4'> 
            <label className='w-full'>
                <p className='text-[0.875rem] leading-[1.375rem] mb-1'>First Name <sup className='text-pink-600'>*</sup></p>
                <input 
                className='text-white rounded-sm w-full p-[12px] bg-[#071827] focus:ring-blue-500 focus:ring-2 outline-none  border-b-gray-200'
                required
                type="text"
                name='firstName'
                value={formData.firstName}
                onChange={changeHandler}
                placeholder='Enter Firstname'
                />
            </label>
            <label className='w-full'>
                <p className='text-[0.875rem] leading-[1.375rem] mb-1'>Last Name <sup className='text-pink-600'>*</sup></p>
                <input
                className='text-white rounded-sm w-full p-[12px] bg-[#071827] focus:ring-blue-500 focus:ring-2 outline-none  border-b-gray-200'
                required
                type="text"
                name='lastName'
                value={formData.lastName}
                onChange={changeHandler}
                placeholder='Enter Lastname'
                />
            </label>
        </div>

        <label className='w-full'>
            <p className='text-[0.875rem] leading-[1.375rem] mb-1'>Email Address <sup className='text-pink-600'>*</sup></p>
            <input 
            className='text-white rounded-sm w-full p-[12px] bg-[#071827] focus:ring-blue-500 focus:ring-2 outline-none  border-b-gray-200'
            name='email'
            required
            onChange={changeHandler}
            value={formData.email}
            type="email"
            placeholder='Enter Email Address'
            />
        </label>

        {/* Create and Confirm Password  */}
        <div className='flex gap-x-4'>
            <label className='w-full relative'>
                <p className='text-[0.875rem] leading-[1.375rem] mb-1'>Create Password <sup className='text-pink-600'>*</sup></p>
                <input
                    className='text-white rounded-sm w-full p-[12px] bg-[#071827] focus:ring-blue-500 focus:ring-2 outline-none  border-b-gray-200'
                    name='password'
                    type={showPassword ? ("text") : ("password")}
                    required
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter Password'
                />
                <span className='absolute  right-3 top-[43px] cursor-pointer' onClick={()=>{setShowPassword((prev) => !prev)}}>
                {showPassword ? (<BsEye/>) : (<BsEyeSlash/>)}
            </span>
            </label>
            <label className='w-full relative'>
                <p className='text-[0.875rem] leading-[1.375rem] mb-1'>Confirm Password <sup className='text-pink-600'>*</sup></p>
                <input
                    className='text-white rounded-sm w-full p-[12px] bg-[#071827] focus:ring-blue-500 focus:ring-2 outline-none  border-b-gray-200'
                    name='confirmPassword'
                    type={showPassword ? ("text") : ("password")}
                    required
                    value={formData.confirmPassword}
                    onChange={changeHandler}
                    placeholder='Confirm Password'
                />
                <span className='absolute  right-3 top-[43px] cursor-pointer' onClick={()=>{setShowPassword((prev) => !prev)}}>
                {showPassword ? (<BsEye/>) : (<BsEyeSlash/>)}
            </span>
            </label>
        </div>
        <button className='text-center mt-6 bg-yellow-500 rounded-md text-semibold  text-black py-[6px] font-semibold leading-[1.375rem]'>Create Account</button>
        
      </form>
    </div>
  )
}

export default SignUpForm
