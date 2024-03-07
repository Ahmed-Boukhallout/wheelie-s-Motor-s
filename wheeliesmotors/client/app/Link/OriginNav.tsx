"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { CgProfile } from "react-icons/cg";
import "./style.css";

const Navbar = () => {
  const [header, setHeader] = useState(false);
  
  useEffect(() => {
    const scrollHeader = () => {
      if (window.scrollY >= 20) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener('scroll', scrollHeader);
    return () => window.removeEventListener('scroll', scrollHeader);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
       
      
      {/* Original Navbar */}
      <div className={`fixed w-full z-20 p-2 transition-top duration-300 ease-in-out ${header ? 'bg-white text-black top-0' : 'bg-transparent text-white -top-15px mt-6'}`}>
        <nav className="flex items-center justify-between flex-wrap">
          <img src={"/images/logoo.png"} alt="logo" className="w-24 mt-1 ml-6" style={{ backgroundColor: header ? 'transparent' : 'transparent' }} />
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z"/></svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ml-24">
            <div className="text-sm lg:flex-grow ml-8">
              <Link href="#home" onClick={() => scrollToSection('home')} className={`block mt-4 lg:inline-block lg:mt-0 ${header ? 'text-gray-600' : 'text-black'} hover:text-gray-600 hover:border-b-2 hover:border-gray-600 mr-4`}>Home</Link>
              <Link href="/categories" className={`block mt-4 lg:inline-block lg:mt-0 ${header ? 'text-gray-600' : 'text-black'} hover:text-gray-600 hover:border-b-2 hover:border-gray-600 mr-4`}>Categories</Link>
              <Link href="/products" className={`block mt-4 lg:inline-block lg:mt-0 ${header ? 'text-gray-600' : 'text-black'} hover:text-gray-600 hover:border-b-2 hover:border-gray-600 mr-4`}>Products</Link>
              <Link href="#about" onClick={() => scrollToSection('about')} className={`block mt-4 lg:inline-block lg:mt-0 ${header ? 'text-gray-600' : 'text-black'} hover:text-gray-600 hover:border-b-2 hover:border-gray-600 mr-4`}>About Us</Link>
              <Link href="/brands" className={`block mt-4 lg:inline-block lg:mt-0 ${header ? 'text-gray-600' : 'text-black'} hover:text-gray-600 hover:border-b-2 hover:border-gray-600 mr-4`}>Brands</Link>
              <Link href="/gallery" className={`block mt-4 lg:inline-block lg:mt-0 ${header ? 'text-gray-600' : 'text-black'} hover:text-gray-600 hover:border-b-2 hover:border-gray-600 mr-4`}>Gallery</Link>
              <Link href="/videos" className={`block mt-4 lg:inline-block lg:mt-0 ${header ? 'text-gray-600' : 'text-black'} hover:text-gray-600 hover:border-b-2 hover:border-gray-600 mr-4`}>Videos</Link>
              <Link href="/testimonials" className={`block mt-4 lg:inline-block lg:mt-0 ${header ? 'text-gray-600' : 'text-black'} hover:text-gray-600 hover:border-b-2 hover:border-gray-600 mr-4`}>Testimonials</Link>
            </div>
            <div className="input-container">
              <input type="text" name="text" className="input text-black" placeholder="Search..."/>
              <span className="icon"> 
                <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "black" }}>
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"></path> </g>
                </svg>
              </span>
            </div>
            <label className="popup" style={{ zIndex: 10 }}>
              <input type="checkbox" />
              <div className="burger" tabIndex={0}>
                <CgProfile size={20} style={{ color: "black" }}/>
              </div>
              <nav className="popup-window">
                <ul>
                  <li>
                    <button>
                      <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                        {/* SVG paths */}
                      </svg>
                      <span>Profil</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                        {/* SVG paths */}
                      </svg>
                      <span>Cart</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                        {/* SVG paths */}
                      </svg>
                      <span>WishList</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                        {/* SVG paths */}
                      </svg>
                      <span>Log Out</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </label>
          </div>
        </nav>
      </div>
     

      </div>
   
  );
}

export default Navbar;
