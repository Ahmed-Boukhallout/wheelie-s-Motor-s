"use client"
import React, { useState, useEffect, useRef } from "react";
import ReactStars from "react-stars";
import { CiSquarePlus, CiSquareMinus, CiDeliveryTruck } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import axios from "axios";
import Navbar from "../../Link/OriginNav";
import AllPro from "../../products/page";

interface Product {
  ProductID: number;
  Name: string;
  ProductImage: string[];
  Price: string;
  Availability: string;
  Quantity: number;
}

const ProductDetails: React.FC = () => {
  const [inp, setInp] = useState<number>(0);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [product, setProduct] = useState<Product>({});
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const userId = localStorage.getItem("id");

  const handleImageHover = (imageSrc: string): void => {
    setHoveredImage(imageSrc);
  };

  const handleImageLeave = () => {
    setHoveredImage(null);
  };

  const ratingChanged = (newRating: number) => {
    console.log(newRating);
  };

  const addCart = (obj: object) => {
    axios
      .post("http://localhost:3000/api/cart/addCart", obj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    var currentUrl = window.location.href;
    var endPoint = currentUrl.split("/");
    var i = endPoint[endPoint.length - 1];
    axios
      .get<Product>(`http://localhost:3000/api/products/getOneProd/${i}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleScrollUp = () => {
    const newPosition = Math.max(0, scrollPosition - 200);
    setScrollPosition(newPosition);
    scrollContainerRef.current?.scrollTo({
      top: newPosition,
      behavior: "smooth",
    });
  };

  const handleScrollDown = () => {
    const newPosition = Math.min(
      scrollContainerRef.current?.scrollHeight || 0,
      scrollPosition + 200
    );
    setScrollPosition(newPosition);
    scrollContainerRef.current?.scrollTo({
      top: newPosition,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar />
      <div className="top-[-10px] height-[690px] flex flex-row relative">
        <div className="bg-white h-[777px]">
          <div className="absolute w-[464px] h-[460px] top-[135px] left-[330px] bg-secondary rounded-[4px] overflow-hidden">
            <img
              className="absolute w-full h-full left-[-30px]"
              src={
                hoveredImage ||
                (product.ProductImage && product.ProductImage[0])
              }
              alt="Image0"
            />
          </div>
          <div
            ref={scrollContainerRef}
            className="absolute overflow-y-auto top-[200px] left-[62px] w-[fit-content] max-h-[400px]"
          >
            {product.ProductImage &&
              product.ProductImage.map((imageSrc, index) => (
                <img
                  key={index}
                  src={imageSrc}
                  alt={`Image${index}`}
                  className="w-40 h-40 cursor-pointer"
                  onMouseOver={() => handleImageHover(imageSrc)}
                  onMouseLeave={handleImageLeave}
                />
              ))}
          </div>
          <div className="absolute top-[200px] left-[820px] space-y-4">
            <div className="font-heading-24px-semibold text-text-2">
              {product && product.Name}
            </div>
            <div className="font-heading-24px-regular text-text-2">
              {product && product.Price && `${product.Price}DT`}
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  color2={"#ffd700"}
                />
                <span className="text-sm opacity-50">(150 Reviews)</span>
              </div>
              <div className="font-title-14px-regular text-button-1">
                {product && product.Availability}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-[40px] h-[44px] rounded-l-[4px] border border-solid border-[#00000080] flex justify-center items-center cursor-pointer">
                <CiSquareMinus
                  onClick={() => setInp(inp - 1)}
                  className="w-6 h-6"
                />
              </div>
              <input
                type="text"
                value={inp}
                onChange={(e) => setInp(parseInt(e.target.value))}
                className="w-[80px] h-[44px] border-t border-b border-solid border-[#00000080] text-center"
              />
              <div className="w-[40px] h-[44px] rounded-r-[4px] border border-solid border-[#00000080] flex justify-center items-center cursor-pointer">
                <CiSquarePlus
                  onClick={() => setInp(inp + 1)}
                  className="w-6 h-6"
                />
              </div>
            </div>
            <button
              onClick={() =>
                addCart({
                  NameCart: product.Name,
                  CartImage: product.ProductImage[0],
                  Price: product.Price,
                  Quantity: product.Quantity,
                  userUserID: userId,
                })
              }
              className="bg-red-600 text-white rounded w-48 h-12"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <AllPro />
      </div>
    </div>
  );
};

export default ProductDetails;
