import React, { useState, useEffect, useRef } from "react";
import { Typography } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import Link from 'next/link';
import axios from "axios";

interface MenuItem {
  title: string;
  path: string;
}
interface User{
  UserID : number;
  FirstName: string | null;
  image_user: string | null;
}

// console.log(id)

const Sidebar: React.FC<{}> = () => {
  const [state, setState] = useState(false);
  const profileRef = useRef<HTMLButtonElement>(null);
  const [person,setPerson] = useState<User>({});
  var id= typeof window !== 'undefined' ? localStorage.getItem("id"): null;
  useEffect(()=>{
    axios.get(`http://localhost:3000/api/users/getOneUser/${id}`).then(res=>{
      setPerson(res.data);
      console.log('person',person)

    }).catch(err=>console.log(err))
  },[])
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
  console.log('ie',person.id)
  return (
    <div className="bg-gray-800 text-white pl-7 pr-[39.75rem] py-7 w-full flex flex-row items-center justify-between">
      {/* Left section with logo or title */}
      <div className="flex items-center space-x-4">
        {/* Your logo or title goes here */}
        <div className="flex items-center space-x-4">
        <button ref={profileRef} className="w-24 h-24 outline-none rounded-full ring-offset-2 ring-gray-100 ring-2 lg:focus:ring-indigo-600"
            onClick={() => setState(!state)}>
            <img
            src={person?.image_user || "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"}
             className="w-full h-full rounded-full"
      
            alt="Profile"
           // onChange={(e)=>setimage_user(e.target.value)} 
        />
        </button>


    </div>
      </div>

      {/* Right section with navigation items */}
      <div className="flex items-center space-x-4">
        {/* Navigation items */}
        <Link href="/Admin/dashboard" className="hover:bg-gray-300 hover:bg-opacity-50">
          <button className="flex items-center space-x-2">
            <HomeOutlinedIcon color="primary" />
            <Typography>Dashboard</Typography>
          </button>
        </Link>

        <Link href="/Admin/users" className="hover:bg-gray-300 hover:bg-opacity-50">
          <button className="flex items-center space-x-2">
            <GroupOutlinedIcon color="primary" />
            <Typography>Clients</Typography>
          </button>
        </Link>

        <Link href="/Admin/profile" className="hover:bg-gray-300 hover:bg-opacity-50">
          <button className="flex items-center space-x-2">
            <AccountCircleOutlinedIcon color="primary" />
            <Typography>Profile</Typography>
          </button>
        </Link>

        <Link href="/Admin/calendar" className="hover:bg-gray-300 hover:bg-opacity-50">
          <button className="flex items-center space-x-2">
            <EventOutlinedIcon color="primary" />
            <Typography>Calendar</Typography>
          </button>
        </Link>
        <Link href="/Admin/BarChart" className="hover:bg-gray-300 hover:bg-opacity-50">
          <button className="flex items-center space-x-2">
            <BarChartOutlinedIcon color="primary" />
            <Typography>Graph Chart</Typography>
          </button>
        </Link>

        <Link href="/Admin/LineChart" className="hover:bg-gray-300 hover:bg-opacity-50">
          <button className="flex items-center space-x-2">
            <ShowChartOutlinedIcon color="primary" />
            <Typography>Line</Typography>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
