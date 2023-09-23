import React from 'react'
import mesh from '../assets/mesh.png'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'

const Template = ({title, desc1, desc2, image, formType, setLoggedIn}) => {
  return (
    <div className='text-white'>
      <div>
        <h1>{title}</h1>
        <p>
            <span>{desc1}</span>
            <span>{desc2}</span>
        </p>

        {formType === 'signup' ? 
        <SignUpForm setLoggedIn={setLoggedIn}/> :
        <LoginForm setLoggedIn={setLoggedIn}/>}

        <div>
            <div></div>
            <p>OR</p>
            <div></div>
        </div>

        <button>
            <p>Sign Up with Google</p>
        </button>
      </div>

      {/* Image  */}
      <div>
        <img src={mesh} alt="Pattern" width={558} height={504} loading='lazy'  />
        <img src={image} alt="imge" width={558} height={490} loading='lazy'  />
      </div>
    </div>
  )
}

export default Template
