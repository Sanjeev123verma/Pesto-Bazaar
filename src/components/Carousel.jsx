import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';

const Carousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = window.innerWidth >= 1024 ? 4 : 2; // 4 items for desktop, 2 for mobile

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + products.length) % products.length);
  };

  useEffect(() => {
    const handleResize = () => {
      setCurrentIndex(0); // Reset to the first slide on resize
    };

    window.addEventListener('resize', handleResize);
    const interval = setInterval(nextSlide, 3000);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="relative md:max-w-[90%] mx-auto py-4 px-6">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <button onClick={prevSlide} className="p-2 bg-gray-700 text-white rounded-full hidden sm:block">
          <FaArrowLeft />
        </button>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <button onClick={nextSlide} className=" p-2 bg-gray-700 text-white rounded-full hidden sm:block">
          <FaArrowRight />
        </button>
      </div>
      <div className="flex justify-between items-center gap-2">
        {visibleProducts.map((product, index) => (
          <div key={index} className="w-1/2 lg:w-1/4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
