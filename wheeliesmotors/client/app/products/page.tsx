"use client"
import Nav from "../Link/OriginNav"
import React, { useState, useEffect } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import axios from "axios"
import Link from 'next/link'; 

const Product: React.FC = () => {
  const userId = localStorage.getItem('id');
  const [All, setAll] = useState<any[]>([]);
  const [showIcons, setShowIcons] = useState<boolean>(false);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products/allProducts');
        if (!response.ok) {
          throw new Error('Error fetching all products');
        }
        const data = await response.json();
        setAll(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const addWished = (wished: object) => {
    console.log("add to wishlist working fine!")
    
    axios.post("http://localhost:3000/api/wish/addwish", wished)
      .then((result) => {
        console.log(result.data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
console.log("user", userId)
  const handleMouseEnter = () => {
    setShowIcons(true);
  }

  const handleMouseLeave = () => {
    setShowIcons(false);
  }

  const addCart = (obj: object) => {
    axios.post("http://localhost:3000/api/cart/addCart", obj)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <Nav />
      <div className=' mb-20 gap-7 ' >
        <div className='flex gap-4 flex-wrap shadow-sm justify-around'>
          {All.map((product, i) => (
            <div key={i} className='relative'>
              <div
                className='w-80 h-72 bg-gray mt-10 flex-wrap relative'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                {showIcons && (
                  <div className='absolute top-0 right-0 z-10 flex'>
                    <div className='bg-transparent w-12 h-12 rounded-full flex items-center justify-center'>
                      <FaRegHeart onClick={() => addWished({
                           NameWish: product.Name,
                           WishPrice: product.Price,
                           WishImage: product.ProductImage,
                           userUserID: userId
                      })} size={20} />
                    </div>
                    <div className='bg-transparent w-12 h-12 rounded-full flex items-center justify-center'>
                      <MdOutlineRemoveRedEye size={20} />
                    </div>
                  </div>
                )}
                <button
                  className="cursor-pointer w-80 h-11 bg-black text-white flex justify-center items-center absolute mt-56"
                  style={{ visibility: showIcons ? 'visible' : 'hidden' }}
                  onClick={() =>
                    addCart({
                      NameCart: product.Name,
                      CartImage: product.ProductImage,
                      Price: product.Price,
                      Quantity: product.Quantity,
                      userUserID: userId,
                    })
                  }>
                  Add To Cart
                </button>
                <Link href={`/ProductDetails/${product.ProductID}`}>
                  <img className='justify-center w-full cursor-pointer' src={product.ProductImage[0] ? product.ProductImage[0] : product.ProductImage} alt="" />
                </Link>
              </div>
              <h1>{product.Name}</h1>
              <div className='flex gap-4'>
                <h1 className='text-red'>${product.Price}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
