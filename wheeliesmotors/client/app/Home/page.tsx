"use client"
import React from 'react'
import Navbar from '../Link/Header'
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./SlideShow.css"
import VehicleCards from '../products/VehicleCards';
import AllProducts from '../products/AllProducts'
import AboutUs from '../aboutus/AboutUs';
import Footer from '../footer/Footer';
import FloatingIcon from '../Chat/page';
import MapContainer from '../footer/Map';
import Stats from '../Stats/Stats'
import BrandLoop from '../Brands/page';
const Home:React.FC = function() {
  const images: string[] = [
    "https://cdn.dribbble.com/users/7656374/screenshots/17017943/media/7f6db54e4da05cffbea2c730778713b3.jpg?resize=1200x900&vertical=center",
     "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sports-bike-template-design-83af5248bc8b6a3cb2c9982e03b93641_screen.jpg?ts=1695065539"
  
  ];
  
  const properties = {
    duration: 2000,
    transitionDuration: 1000,
    autoplay: true,
    indicators: true,
    arrows: false,
    easing: "ease-out",
    pauseOnHover: false,
  };

  return (
    <div className='bg-white'>
          <Navbar />
       <div className="slide-container bg-white">
        <Slide {...properties}>
          {images.map((image, index) => (
            <div key={index} className="each-slide-effect">
              <div style={{ backgroundImage: `url(${image})` }}></div>
            </div>
          ))}
        </Slide>
      </div>
      <div className='bg-white  ' style={{height:"351px"}}>
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Bike
      </h1>
      <AllProducts/>
      
      </div>
     
   
      <div className="container mx-auto mt-4 width-[1163]">
      <h1 className="text-2xl font-bold mb-4 text-center">Brands</h1>
      <BrandLoop />
    </div>
      <Stats/>
      <AboutUs/>
      <div className="w-full" >
            <div style={{ height: '227px', width: '100%' }}>
              <MapContainer  />
            </div>
          </div>  
      <Footer/>
      <FloatingIcon />
    </div>
  )
}

export default Home