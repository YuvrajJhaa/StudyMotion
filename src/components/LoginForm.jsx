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
    <form onSubmit={submitHandler}>
        <label>
            <p>Email Address <sup>*</sup></p>
            <input 
            name='email'
            required
            onChange={changeHandler}
            value={formData.email}
            type="email"
            placeholder='Enter Email Address'
            />
        </label>
        {/* For Password  */}
        <label>
            <p>Password<sup>*</sup></p>
            <input 
            className='text-black'
            name='password'
            required
            onChange={changeHandler}
            value={formData.password}
            type= {showPassword ? ("text") : ("password")}
            placeholder='Enter Password'
            />

            <span onClick={()=>{setShowPassword((prev) => !prev)}}>
                {showPassword ? (<BsEye/>) : (<BsEyeSlash/>)}
            </span>

            {/* Forgot Password */}
            <Link to={"#"}>Forgot Password</Link>
        </label>

        <button>Sign In</button>
    </form>
  )
}
 
export default LoginForm
