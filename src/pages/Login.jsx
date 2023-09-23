import React from 'react'
import Template from '../components/Template'
import login from "../assets/login.webp"

const Login = ({setLoggedIn}) => {
  return (
    <div>
      <Template
        title="Welcome Back"
        desc1={"Build skills for today, tomorrow, and beyond."}
        desc2={"Education to future-proof your career."}
        image={login}
        formType={"login"}
        setLoggedIn={setLoggedIn}
      />
    </div>
  )
}

export default Login
