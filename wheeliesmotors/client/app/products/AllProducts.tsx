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
   
      <div className="flex relative bg-white  content-between" style={{ scrollSnapType: 'x mandatory', display: 'flex', overflowX: 'hidden', width: '100%', height: '13rem' }} ref={containerRef}>
        {products.map((product: ProductCard, index: number) => (
          <div
            key={product.ProductID}
            className="bg-white p-2 rounded-lg shadow-md flex flex-col items-center justify-center"
            style={{ width: '19rem', height: '13rem' }}
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
     
    </div>
  );
};

export default ProductSlider;
