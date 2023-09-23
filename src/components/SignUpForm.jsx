import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { BsEyeSlash ,BsEye } from "react-icons/bs"
import { useNavigate } from 'react-router-dom'

const SignUpForm = ({setLoggedIn}) => {
    const [formData, setFormData] = useState({
        firstName : "", lastName:"", email:"", password:"", confirmPassword:""
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
        console.log(accountData);
    }

  return (
    <div >
      {/* Student Instructor Tab  */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler} >
            {/* First Name and Last Name  */}
        <div> 
            <label>
                <p>First Name <sup>*</sup></p>
                <input 
                className='text-black'
                required
                type="text"
                name='firstName'
                value={formData.firstName}
                onChange={changeHandler}
                placeholder='Enter Firstname'
                />
            </label>
            <label>
                <p>Last Name <sup>*</sup></p>
                <input
                className='text-black' 
                required
                type="text"
                name='lastName'
                value={formData.lastName}
                onChange={changeHandler}
                placeholder='Enter Lastname'
                />
            </label>
        </div>

        <label>
            <p>Email Address <sup>*</sup></p>
            <input 
            className='text-black'
            name='email'
            required
            onChange={changeHandler}
            value={formData.email}
            type="email"
            placeholder='Enter Email Address'
            />
        </label>

        {/* CReate and Confirm Password  */}
        <div>
            <label>
                <p>Create Password <sup>*</sup></p>
                <input
                    className='text-black'
                    name='password'
                    type={showPassword ? ("text") : ("password")}
                    required
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter Password'
                />
                <span onClick={()=>{setShowPassword((prev) => !prev)}}>
                {showPassword ? (<BsEye/>) : (<BsEyeSlash/>)}
            </span>
            </label>
            <label>
                <p>Confirm Password <sup>*</sup></p>
                <input
                    className='text-black'
                    name='confirmPassword'
                    type={showPassword ? ("text") : ("password")}
                    required
                    value={formData.confirmPassword}
                    onChange={changeHandler}
                    placeholder='Confirm Password'
                />
                <span onClick={()=>{setShowPassword((prev) => !prev)}}>
                {showPassword ? (<BsEye/>) : (<BsEyeSlash/>)}
            </span>
            </label>
        </div>
        <button>Create Account</button>
        
      </form>
    </div>
  )
}

export default SignUpForm
