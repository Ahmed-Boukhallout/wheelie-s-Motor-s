"use client"
import React ,{useState , useEffect} from "react";
import { Typography } from "@mui/material";
import Sidebar from "../sidebar/page"
import axios from "axios";
import Navbar from "../navbar/page"


interface Client {
  UserID: number;
  FirstName: string;
  LastName: string;
  Email:string;
  Role:string;
} 


const client: React.FC =()=>{
  const [data, setData] = useState<Client[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searched,setSearched]=useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users/allUsers');
        setData(response.data);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const search = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/users/getName/${searched}`);

      if (!response.ok) {
        console.error(`HTTP error! Status: ${response.status}`);
      }

      const searchData: Client[] = await response.json();
      setData(searchData);
      console.log("found", searchData);
    } catch (error) {
      console.error(error);
    }
  };
  const deletee = async (id:number) => {
    try {
      await fetch(`http://localhost:3000/api/users/deleteUser/${id}`, {
        method: 'DELETE',
      });
      console.log("user deleted");
    } catch (error) {
      console.error("delete category:", error);
    }
  };
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearched(event.target.value);
  };
    return (
      <div>
        <div className="h-screen">
        <Sidebar/>
     
           {/* Main Content */}
           <div className="flex-1 bg-gray-100 p-4 ">
           {/* Your main content goes here */}
           <div>
<div className="flex justify-between">
           <Typography variant="h1" fontWeight="bold" style={{ color: '#000080' }}>
             list clients 
           </Typography>
<div >
              <input
                type="text"
                placeholder="Search ...."
                value={searched}
                onChange={handleSearchChange}
                className="p-2 border border-gray-300 rounded-md"
              />
              <button onClick={search} className="ml-2 p-2 bg-blue-500 text-white rounded-md">
                Search
              </button>
            </div>
           </div>
           <div className="companies-container">
          
          <div  className="com-box">


<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-black dark:text-black">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>

                <th scope="col" className="px-6 py-3">
                    ID
                </th>
                <th scope="col" className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
                    FirstName 
                </th>
                <th scope="col" className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
                   LastName
                </th>

                <th scope="col" className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
                    Email
                </th>
                <th scope="col" className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
                Role 
                </th>

                <th scope="col" className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
                    Verification 
                </th>
            </tr>
        </thead>
        <tbody>
        {data && data.map((e,i) => (
            <tr >
                <th scope="col" className="px-6 py-3">
                   {e.UserID}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                {e.FirstName}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                {e.LastName}
                </th>
                <td className="px-6 py-4">
                {e.Email}
                </td>
                <td className="px-6 py-4">
                {e.Role}
                </td>

                <td className="flex items-center px-6 py-4"> 
                 <button onClick={() => { deletee(e.UserID) }}> <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a></button>  
                </td>
            </tr>
        ))}

            </tbody>
        
                </table>
                </div>
                </div>
      </div>

           </div>
           </div>
           </div>
           </div>
    )
}
export default client;
