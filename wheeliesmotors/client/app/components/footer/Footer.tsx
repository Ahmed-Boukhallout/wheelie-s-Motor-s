import React from 'react';
import MapContainer from './Map'; // Import the MapContainer component

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">123 Street Name</p>
            <p className="mb-2">City, Country</p>
            <p className="mb-2">Email: example@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <p className="mb-2">Monday - Friday: 9am - 6pm</p>
            <p className="mb-2">Saturday: 10am - 4pm</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="w-full lg:w-1/3">
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <div style={{ height: '227px', width: '420px' }}>
              <MapContainer  />
            </div>
          </div>    
        </div>
        <hr className="border-gray-600 my-8" />
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
