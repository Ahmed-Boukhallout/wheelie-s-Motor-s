import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { TbSquareRoundedArrowLeft, TbSquareRoundedArrowRight } from "react-icons/tb";

interface ProductCard {
  ProductID: number;
  Name: string;
  Price: string;
  Quantity: number;
  Color: string;
  Engine: string;
  Availability: string;
  ProductImage: string[];
}

const ProductSlider: React.FC = () => {
  const [products, setProducts] = useState<ProductCard[]>([]);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const showNextProducts = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += containerRef.current.offsetWidth / 2;
    }
  };

  const showPrevProducts = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= containerRef.current.offsetWidth / 2;
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/api/products/allProducts`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="relative">
      <button onClick={showPrevProducts} className="hover:bg-white text-gray-800 font-bold rounded-3xl absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
        <TbSquareRoundedArrowLeft size={30} />
      </button>
      <div className="flex relative bg-white  content-between" style={{ scrollSnapType: 'x mandatory', display: 'flex', overflowX: 'scroll', width: '100%', height: '22rem' }} ref={containerRef}>
        {products.map((product: ProductCard, index: number) => (
          <div
            key={product.ProductID}
            className="bg-white p-2 rounded-lg shadow-md flex flex-col items-center justify-center"
            style={{ width: '12rem', height: '18rem' }}
          >
            <img
              src={product.ProductImage[0]}
              alt={product.Name}
              ref={imgRef}
            />
                          
            <h2 className="text-lg font-bold mb-2 text-black text-center">{product.Name}</h2>
            <p className="text-md font-semibold mb-4">{product.Price}</p>
          </div>
        ))}
      </div>
      <button onClick={showNextProducts} className="hover:bg-white text-gray-800 font-bold rounded-3xl absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        <TbSquareRoundedArrowRight size={30} />
      </button>
    </div>
  );
};

export default ProductSlider;
