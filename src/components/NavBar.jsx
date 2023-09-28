import React from 'react'
import { Link } from 'react-router-dom'
import modi from '../assets/modi.png'
import {toast} from "react-hot-toast"

const NavBar = (props) => {
  let isLoggedin = props.isLoggedIn;
  let setLoggedIn = props.setLoggedIn;
  return (
    <div className='font-semibold mt-2 flex items-center justify-between w-11/12 max-w-[1160px] mx-auto text-white'>
      <Link to={'/'} className='flex items-center gap-x-4'>
        <img className='h-16' src={modi} alt="modi" loading='lazy' height={59}  />
        <p className='text-[29px] leading-[1.375rem]'>MelodiNation</p>
      </Link>

      <nav>
        <ul className='flex gap-7'>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact Us</Link>
          </li>
        </ul>
      </nav>

      <div className='space-x-6 items-center'>
        {!isLoggedin &&
          <Link to={'/login'}>
            <button className='bg-zinc-700 py-[8px] px-[12px] rounded-md border border-zinc-600'>
              Log in
            </button>
          </Link>
        }
        {!isLoggedin &&
          <Link to={'/signup'}>
            <button className='bg-zinc-700 py-[8px] px-[12px] rounded-md border border-zinc-600'>
              Sign Up
            </button>
          </Link>
        }
        {isLoggedin &&  
          <Link to={'/'}>
            <button className='bg-zinc-700 py-[8px] px-[12px] rounded-md border border-zinc-600' onClick={()=>{
              setLoggedIn(false);
              toast.success("Logged Out")
            }}>
              Sign Out
            </button>
          </Link>
        }
        {isLoggedin &&
          <Link to={'/dashboard'}>
            <button className='bg-zinc-700 py-[8px] px-[12px] rounded-md border border-zinc-600'>
              Dashboard
            </button>
          </Link>
        }
      </div>
    </div>
  )
}

export default NavBar
