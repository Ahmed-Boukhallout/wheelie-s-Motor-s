"use client"
import React,{useRef,useState,useEffect} from "react"
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

import ChatIcon from '@mui/icons-material/Chat';
import "./search.module.css"


interface Menu {
    title: string;
    
  }


const navbar :React.FC =()=>{
    const [state, setState] = useState(false);
    const profileRef = useRef<HTMLButtonElement>(null);

  



    useEffect(() => {
        const handleDropDown = (e: MouseEvent) => {
            if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
                setState(false);
            }
        };
        document.addEventListener('click', handleDropDown);
        return () => {
            document.removeEventListener('click', handleDropDown);
        };
    }, []);
    return (
        <div  className="flex-1 bg-gray-100 p-4 ml-[350px]">
     <nav className="flex items-center justify-end bg-gray-100 border-gray-200  p-4">
      <div className="search-box flex items-center">
 
    <button><ChatIcon className="ml-2 mr-[14px]"   style={{ fontSize: '40px' }}/></button>
    <button ref={profileRef} onClick={() => setState(!state)}> <CircleNotificationsIcon className="ml-2" style={{ fontSize: '50px' }} />
  
    </button>       

  </div>

</nav> 
        </div>
    )
}
export default navbar ;