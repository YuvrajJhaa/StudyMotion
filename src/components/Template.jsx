import React from 'react'
import mesh from '../assets/mesh.png'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import {FcGoogle} from 'react-icons/fc'

const Template = ({title, desc1, desc2, image, formType, setLoggedIn}) => {
  return (
    <div className='text-white flex w-11/12 max-w-[1160px] justify-between  mx-auto gap-x-12 gap-y-0  py-12'>
      <div className='w-11/12 max-w-[450px] space-y-5'>
        <h1 className='text-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
        <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
            <span>{desc1}</span>
            <br />
            <span className='text-blue-300 italic'>{desc2}</span>
        </p>

        {formType === 'signup' ? 
        <SignUpForm setLoggedIn={setLoggedIn}/> :
        <LoginForm setLoggedIn={setLoggedIn}/>}

        <div className=''>
            <div></div>
            <p  className='flex gap-3  font-medium  before:flex-1 before:h-[0.25px] items-center before:bg-gray-300 after:h-[0.25px]   after:flex-1  after:bg-red-300'>OR</p>
            <div></div>
        </div>

        <button className='w-full font-medium px-[12px]  py-[8px] text-white border border-gray-800 rounded-[8px]'>
            <p className='flex items-center justify-center gap-x-5'><FcGoogle/> Sign Up with Google </p>
        </button>
      </div>

      {/* Image  */}
      <div className='relative w-11/12 max-w-[450px]'>
        <img src={mesh} alt="Pattern" width={558} height={504} loading='lazy'  />
        <img src={image} alt="imge" width={558} height={490} loading='lazy' className='absolute -top-4 right-4 rounded-sm'  />
      </div>
    </div>
  )
}

export default Template
