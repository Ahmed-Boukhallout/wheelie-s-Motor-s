"use client";
import React from 'react';
import './login.css'
import Link from 'next/link';
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { push } = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState<string>('');


 

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    if(!Email||!Password){
      setError('Invalid email or password')
      return;
    }
    
    try {
      const logUser = await axios.post("http://localhost:3000/api/auth/login", { Email, Password });      
      localStorage.setItem('id', logUser.data.UserID);
      console.log("data ", logUser);

      if(logUser.data.Role ==="user") {   
        push("/Home")
      }
      if(logUser.data.Role ==="admin") {
        push("/Admin/dashboard")
      }
    } catch (e) {     
      
      const error = e as AxiosError;    
      console.log(error);
      
      
    }
  };
  const getUserIdFromLocalStorage = () => {
    const storeduserId = localStorage.getItem('id');
    if (storeduserId) {
      setUserId(storeduserId);
    }
  };
  return (
    <div className='flex justify-center items-center h-screen '>
          <div className="video-background  ">
              <video src={process.env.PUBLIC_URL+"/assets/video3.mp4"} loop autoPlay muted className='object-cover absolute h-screen w-screen -z-10 top-0 left-0'></video>
          </div>
      <ToastContainer/>
      <div className="container" >
        <form onSubmit={handleSubmit} >
        <div className="card mx-auto">
          <a className="login">Log in</a>
          <div className="inputBox">
            <input type="text" required={true}  
            value={Email}
            onChange={(e)=>{setEmail(e.target.value)}}/>
            <span className="user">email</span>
          </div>

          <div className="inputBox">
            <input type="password" required={true} 
            value={Password}
            onChange={(e)=>{setPassword(e.target.value)}}/>
            <span>Password</span>
          </div>

          <button className="enter" onClick={()=>{getUserIdFromLocalStorage()}} >Log In</button>
          <div className='flex text-sm mt-3 text-white'>
          <h1  className='-mt-6 mb-4  '>Already have account  ?  </h1> <Link className='-mt-6 ' href={'/Signup'}><span className='underline  cursor-pointer'>  Register Now</span></Link>
          </div>
         
        </div>
        </form>
      </div>
    </div>
  );
};

export default Login;