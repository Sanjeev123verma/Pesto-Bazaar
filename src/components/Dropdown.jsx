
import React, { useState, useRef } from 'react';

const DropdownMenu = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [showProductCategories, setShowProductCategories] = useState(false);
  const [showCustomerReviews, setShowCustomerReviews] = useState(false);
  const [showBrands, setShowBrands] = useState(false);

  const allProductsTimeoutRef = useRef(null);
  const brandsTimeoutRef = useRef(null);


  const handleMouseEnter = (setStateFunc, timeoutRef) => {
    clearTimeout(timeoutRef.current);
    setStateFunc(true);
  };

  const handleMouseLeave = (setStateFunc, timeoutRef) => {
    timeoutRef.current = setTimeout(() => {
      setStateFunc(false);
    }, 500); // 0.5-second delay
  };

  return (
    <nav className=" max-w-full bg-[#1c085d] p-4 font-abc text-white">
      <ul className="flex space-x-24 ">
        <li
          className="relative z-40" 
          onMouseEnter={() => handleMouseEnter(setShowAllProducts, allProductsTimeoutRef)}
          onMouseLeave={() => handleMouseLeave(setShowAllProducts, allProductsTimeoutRef)}
        >
          <span className="text-white cursor-pointer text-xl">All Products</span>
          {showAllProducts && (
            <ul className="absolute left-0 mt-2 w-48 bg-white  shadow-lg rounded-md">
              <li
                className="px-4 py-4 hover:bg-gray-200 text-[#1c085d] font-semibold relative"
                onMouseEnter={() => setShowProductCategories(true)}
                onMouseLeave={() => setShowProductCategories(false)}
              >
                Product Categories
                {showProductCategories && (
                  <ul className="absolute left-full top-0 mt-0 w-48 bg-white shadow-lg rounded-md">
                    <li className="px-4 py-2 hover:bg-gray-200 text-[#1c085d]">Category 1</li>
                    <li className="px-4 py-2 hover:bg-gray-200 text-[#1c085d]">Category 2</li>
                    <li className="px-4 py-2 hover:bg-gray-200 text-[#1c085d]">Category 3</li>
                    <li className="px-4 py-2 hover:bg-gray-200 text-[#1c085d]">Category 4</li>
                    <li className="px-4 py-2 hover:bg-gray-200 text-[#1c085d]">Category 5</li>
                    <li className="px-4 py-2 hover:bg-gray-200 text-[#1c085d]">Category 6</li>
                    <li className="px-4 py-2 hover:bg-gray-200 text-[#1c085d]">Category 7</li>
                    <li className="px-4 py-2 hover:bg-gray-200 text-[#1c085d]">Category 8</li>
                  </ul>
                )}
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-200 text-[#1c085d] relative font-semibold"
                onMouseEnter={() => setShowCustomerReviews(true)}
                onMouseLeave={() => setShowCustomerReviews(false)}
              >
                Customer Reviews
                {showCustomerReviews && (
                  <ul className="absolute left-full top-0 mt-0 w-48 bg-white shadow-lg rounded-md">
                    <li className="px-4 py-2 hover:bg-gray-200 text-[#1c085d]">Customer 1</li>
                    <li className="px-4 py-2 hover:bg-gray-200 text-[#1c085d]">Customer 2</li>
                    <li className="px-4 py-2 hover:bg-gray-200 text-[#1c085d]">Customer 3</li>
                  </ul>
                )}
              </li>

            </ul>
          )}
        </li>

        <li
          className="relative"
          onMouseEnter={() => handleMouseEnter(setShowBrands, brandsTimeoutRef)}
          onMouseLeave={() => handleMouseLeave(setShowBrands, brandsTimeoutRef)}
        >
          <span className="text-white cursor-pointer text-xl">Brands</span>
          {showBrands && (
            <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
              {['Brand1', 'Brand2', 'Brand3'].map((brand) => (
                <li key={brand} className="px-4 py-2 hover:bg-gray-200 text-[#1c085d] font-semibold">
                  {brand}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default DropdownMenu;

