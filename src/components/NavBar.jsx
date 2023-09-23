import React from 'react'
import { Link } from 'react-router-dom'
import modi from '../assets/modi.png'
import {toast} from "react-hot-toast"

const NavBar = (props) => {
  let isLoggedin = props.isLoggedIn;
  let setLoggedIn = props.setLoggedIn;
  return (
    <div className='font-semibold mt-2 flex items-center justify-evenly  text-white'>
      <Link to={'/'}>
        <img className='h-16' src={modi} alt="modi" loading='lazy' height={59}  />
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

      <div className='space-x-6'>
        {!isLoggedin &&
          <Link to={'/login'}>
            <button >
              Log in
            </button>
          </Link>
        }
        {!isLoggedin &&
          <Link to={'/signup'}>
            <button >
              Sign Up
            </button>
          </Link>
        }
        {isLoggedin &&  
          <Link to={'/'}>
            <button onClick={()=>{
              setLoggedIn(false);
              toast.success("Logged Out")
            }}>
              Sign Out
            </button>
          </Link>
        }
        {isLoggedin &&
          <Link to={'/dashboard'}>
            <button>
              Dashboard
            </button>
          </Link>
        }
      </div>
    </div>
  )
}

export default NavBar
