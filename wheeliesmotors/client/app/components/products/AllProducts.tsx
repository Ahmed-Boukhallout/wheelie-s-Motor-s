import { useEffect, useState , useRef } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Import arrow icons

const productList = [
    { id: 1, name: 'Yamaha Fascino White', image: "https://image3.jdomni.in/banner/23012023/D1/FB/5F/96801179D51A06B6D059C21EC6_1674473106063.jpeg?output-format=webp", price: '₹74,182' },
    { id: 2, name: 'Vespa 125 RED',image: "https://image3.jdomni.in/banner/23012023/D1/FB/5F/96801179D51A06B6D059C21EC6_1674473106063.jpeg?output-format=webp", price: '₹1,22,617' },
    { id: 3, name: 'Honda Aviator 2 Wheeler',image: "https://image3.jdomni.in/banner/23012023/D1/FB/5F/96801179D51A06B6D059C21EC6_1674473106063.jpeg?output-format=webp", price: '₹67,182' },
    { id: 4, name: 'TVS VICTOR',image: "https://image3.jdomni.in/banner/23012023/D1/FB/5F/96801179D51A06B6D059C21EC6_1674473106063.jpeg?output-format=webp", price: '₹57,212' },
    { id: 6, name: 'APACHE RTR 160',image: "https://image3.jdomni.in/banner/23012023/D1/FB/5F/96801179D51A06B6D059C21EC6_1674473106063.jpeg?output-format=webp", price: '₹1,06,622' },
    { id: 7, name: 'APACHE RTR 160',image: "https://image3.jdomni.in/banner/23012023/D1/FB/5F/96801179D51A06B6D059C21EC6_1674473106063.jpeg?output-format=webp", price: '₹1,06,622' },
    { id: 8, name: 'APACHE RTR 160',image: "https://image3.jdomni.in/banner/23012023/D1/FB/5F/96801179D51A06B6D059C21EC6_1674473106063.jpeg?output-format=webp", price: '₹1,06,622' }
  ];


const ProductCard = ({ product, index }: { product: { id: number; name: string; price: string; image?: string }; index: number }) => {
    const [loaded, setLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);
  
    useEffect(() => {
      if (imgRef.current && imgRef.current.complete) {
        setLoaded(true);
      }
    }, []);
  
    return (
      <motion.div
        key={product.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-2 rounded-lg shadow-md flex flex-col items-center justify-center"
        style={{ width: '12rem', height: '18rem', position: 'absolute', left: `${index * 14}rem` }} // Set position based on index
      >
        <img
          src={product.image}
          alt={product.name}
          className={`mb-2 ${loaded ? 'h-full w-full object-cover' : 'hidden'}`} // Dynamically set height and width after image is loaded
          ref={imgRef}
          onLoad={() => setLoaded(true)}
        />
        {!loaded && <div style={{ aspectRatio: '16 / 9' }} className="h-36 w-full bg-gray-200"></div>} {/* Placeholder for image while loading */}
        <h2 className="text-lg font-bold mb-2">{product.name}</h2>
        <p className="text-md font-semibold mb-4">{product.price}</p>
      </motion.div>
    );
  };
  
  const ProductSlider = () => {
    const containerRef = useRef<HTMLDivElement>(null);
  
    const showNextProducts = () => {
      if (containerRef.current) {
        containerRef.current.scrollTo({
          left: containerRef.current.scrollLeft + containerRef.current.offsetWidth / 2,
          behavior: 'smooth',
        });
      }
    };
  
    const showPrevProducts = () => {
      if (containerRef.current) {
        containerRef.current.scrollTo({
          left: containerRef.current.scrollLeft - containerRef.current.offsetWidth / 2,
          behavior: 'smooth',
        });
      }
    };

    const calculateIndex = () => {
      if (containerRef.current) {
        const { scrollLeft, offsetWidth } = containerRef.current;
        const index = Math.round(scrollLeft / offsetWidth);
        return index;
      }
      return 0;
    };
  
    return (
      <div className="relative flex items-center justify-center">
        <button onClick={showPrevProducts} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l-lg absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
          <FiChevronLeft size={24} />
        </button>
        <div className="flex p-4 relative" ref={containerRef} style={{ scrollSnapType: 'x mandatory', display: 'flex', overflowX: 'auto', width: '100%', height: '22rem' }}>
          {productList.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        <button onClick={showNextProducts} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r-lg absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <FiChevronRight size={24} />
        </button>
      </div>
    );
  };
  
  export default ProductSlider;
