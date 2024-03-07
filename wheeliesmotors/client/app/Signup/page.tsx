"use client";
import Link from 'next/link';
import './SignUp.css'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {

  const [FirstName, setFirstName] = useState<string>("");
  const [LastName, setLastName] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  // const [longitude, setLongtitude] = useState<string>("");
  // const [latitude, setLaltitude] = useState<string>("");

  
  const router = useRouter();
  const notify = () => toast.success('Your Account Created Succesfuly! please log in', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!FirstName  ||!LastName  || !Email || !Password) {
      setError("All fields are necessary.");
      return;
    }
  
    try {
      // Check if the user already exists
      const resUserExists = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Email }),
      });
  
  
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          FirstName,
          LastName,
          Email,
          Password,
        }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        notify()
        router.push("/Login");
      } else {
        console.log("User registration failed:", data.error );
        setError("User registration failed.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setError("Error during registration.");
    }
  };
  

    return ( 
        <div  className='flex justify-center items-center h-screen' >
           <div className="video-background ">
              <video src={process.env.PUBLIC_URL+"/assets/video3.mp4"} loop autoPlay muted className='object-cover absolute h-screen w-screen -z-10 top-0 left-0'></video>
          </div>
          <div className="container " >
          <form onSubmit={handleSubmit}>
        <div className="card mx-auto border ">
          <a className="login">sign up</a>
          <div className="inputBox">
            <input type="text" required={true} 
            onChange={(e)=>setFirstName(e.target.value)} 
            />
            <span className="user">FirstName</span>
          </div>
          <div className="inputBox">
            <input type="text" required={true} 
            onChange={(e)=>setLastName(e.target.value)} 
            />
            <span className="user">LastName</span>
          </div>
          <div className="inputBox">
            <input type="text" required={true} 
            onChange={(e)=>setEmail(e.target.value)} 
            />
            <span className="user">email</span>
          </div>
          <div className="inputBox">
            <input type="password" required={true}
            onChange={(e)=>setPassword(e.target.value)}
             />
            <span>Password</span>
          </div>
          <button className="enter" >register</button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <div className='flex text-sm text-white'>
          <h1  className=' mb-4'>Already have account  ?</h1><Link className=' ' href={'/Login'}><span className='underline  cursor-pointer'>  Log in</span></Link>
          </div>
        </div>
        </form>
      </div>
      
        </div>
     );
}
 
export default SignUp;