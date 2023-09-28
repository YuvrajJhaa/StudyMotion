import './App.css';
import NavBar from './components/NavBar';
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  
  return (
    <div className='h-screen w-screen flex flex-col'>

      <NavBar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login setLoggedIn={setLoggedIn}/>} />
        <Route path='/signup' element={<SignUp setLoggedIn={setLoggedIn}/>} />
        <Route path='/dashboard' element={
        <PrivateRoute isLoggedIn={isLoggedIn}>
          <Dashboard/>
        </PrivateRoute>
        }/>
      </Routes>
      <Toaster/>
    </div>

  

  );
}

export default App;
