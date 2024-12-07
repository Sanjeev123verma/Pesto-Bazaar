import React from 'react';
import ProductCard from '../components/ProductCard';
import Dropdown from '../components/Dropdown';
import Brands from '../components/Brands';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a description for Product 1.',
    price: 10,
    image: '/Images/Image1.jpeg',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is a description for Product 2.',
    price: 20,
    image: '/Images/Image2.jpeg',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is a description for Product 3.',
    price: 30,
    image: '/Images/Image3.jpeg',
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'This is a description for Product 4.',
    price: 40,
    image: '/Images/Image4.jpeg',
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'This is a description for Product 5.',
    price: 50,
    image: '/Images/Image5.jpeg',
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'This is a description for Product 6.',
    price: 60,
    image: '/Images/Image6.jpeg',
  },
  {
    id: 7,
    name: 'Product 7',
    description: 'This is a description for Product 7.',
    price: 70,
    image: '/Images/Image7.jpeg',
  },
  {
    id: 8,
    name: 'Product 8',
    description: 'This is a description for Product 8.',
    price: 80,
    image: '/Images/Image8.jpeg',
  },
  {
    id: 9,
    name: 'Product 9',
    description: 'This is a description for Product 9.',
    price: 90,
    image: '/Images/Image1.jpeg',
  },
  {
    id: 10,
    name: 'Product 10',
    description: 'This is a description for Product 10.',
    price: 100,
    image: '/Images/Image2.jpeg',
  },
];

const Products = () => {
  return (
    <>
    <div className=" max-w-full mx-auto md:px-4 px-4 items-center text-center">
      {/* Dropdown Section */}
      <div className="p-8 hidden md:block">
        <h1>
          <Dropdown />
        </h1>
      </div>
  
      {/* All Products Header */}
      <div className="bg-gray-200 max-w-full mx-auto rounded-lg my-2">
        <h1 className="text-4xl font-bold font-abc py-2 text-[#1c085d]">
          ALL PRODUCTS
        </h1>
      </div>
  
      {/* Product Cards Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center mx-auto px-4 my-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  
    {/* Our Brands Section */}
    <div className="bg-[#fff3bf]">
      <nav className="max-w-screen-md mx-auto bg-[#1c085d] text-2xl p-4 font-abc">
        <h1 className="text-white font-extrabold">OUR BRANDS</h1>
      </nav>
      <Brands />
    </div>
  </>
  
  );
};

export default Products;
