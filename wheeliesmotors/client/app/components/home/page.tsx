"use client"
import React from 'react'
import Navbar from '../Link/Header'
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./SlideShow.css"
import VehicleCards from '../products/VehicleCards';
import AllProducts from '../products/AllProducts'
function page() {
  const images: string[] = [
    "https://cdn.dribbble.com/users/7656374/screenshots/17017943/media/7f6db54e4da05cffbea2c730778713b3.jpg?resize=1200x900&vertical=center",
     "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sports-bike-template-design-83af5248bc8b6a3cb2c9982e03b93641_screen.jpg?ts=1695065539"
  
  ];
  
  const properties = {
    duration: 5000,
    transitionDuration: 1000,
    autoplay: true,
    indicators: true,
    arrows: false,
    easing: "ease-out",
    pauseOnHover: true,
  };
  const vehicles = [
    {
      id: 1,
      type: 'E-Scooter',
      subTypes: 'Scooter',
      imageUrl: 'https://image3.jdomni.in/banner/23012023/D1/FB/5F/96801179D51A06B6D059C21EC6_1674473106063.jpeg?output-format=webp',
      name: 'E-Scooter',
    },
    {
      id: 2,
      type: 'Moped',
      subTypes: '',
      imageUrl: 'https://image3.jdomni.in/banner/23012023/F6/E2/50/917E966BDF429D318FFBAC363B_1674473098130.jpeg?output-format=webp',
      name: 'Moped',
    },
    {
      id: 3,
      type: 'Maxi Scooter',
      subTypes: '',
      imageUrl: 'https://image3.jdomni.in/banner/23012023/F7/A3/C8/32EDED4ADFFAFBE6C9AB4A1762_1674473116998.jpeg?output-format=webp',
      name: 'Maxi Scooter',
    },
    {
      id: 4,
      type: 'EDGE',
      subTypes: 'Scooter, Moped, Maxi Scooter',
      imageUrl: 'https://image2.jdomni.in/banner/23012023/C7/56/6A/A4CE91A0F9AA3DAC99E4254065_1674473111495.jpeg?output-format=webp',
      name: 'EDGE',
    },
  ];
  return (
    <div>
          <Navbar />
       <div className="slide-container">
        <Slide {...properties}>
          {images.map((image, index) => (
            <div key={index} className="each-slide-effect">
              <div style={{ backgroundImage: `url(${image})` }}></div>
            </div>
          ))}
        </Slide>
      </div>
      <div className='bg-white p-4'>
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Scooter
      </h1>
      <VehicleCards vehicles={vehicles} />
      </div>
      <div className='bg-white p-4'>
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Bike
      </h1>
      <VehicleCards vehicles={vehicles}/>
      </div>
      <AllProducts/>
    </div>
  )
}

export default page