import React from "react";
import Brands from "../components/Brands";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import Categories from "../components/Categories";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is a description for Product 1.",
    price: 10,
    image: "/Images/Image1.jpeg",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is a description for Product 2.",
    price: 20,
    image: "/Images/Image2.jpeg",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is a description for Product 3.",
    price: 30,
    image: "/Images/Image3.jpeg",
  },
  {
    id: 4,
    name: "Product 4",
    description: "This is a description for Product 4.",
    price: 40,
    image: "/Images/Image4.jpeg",
  },
  {
    id: 5,
    name: "Product 5",
    description: "This is a description for Product 5.",
    price: 50,
    image: "/Images/Image5.jpeg",
  },
  {
    id: 6,
    name: "Product 6",
    description: "This is a description for Product 6.",
    price: 60,
    image: "/Images/Image6.jpeg",
  },
  {
    id: 7,
    name: "Product 7",
    description: "This is a description for Product 7.",
    price: 70,
    image: "/Images/Image7.jpeg",
  },
  {
    id: 8,
    name: "Product 8",
    description: "This is a description for Product 8.",
    price: 80,
    image: "/Images/Image8.jpeg",
  },
  {
    id: 9,
    name: "Product 9",
    description: "This is a description for Product 9.",
    price: 90,
    image: "/Images/Image1.jpeg",
  },
  {
    id: 10,
    name: "Product 10",
    description: "This is a description for Product 10.",
    price: 100,
    image: "/Images/Image2.jpeg",
  },
];

const Productswithoutnav = () => {
  return (
    <>
      {/* added categories.jsx here */}
      <div className="max-w-[100%] m-2 mx-auto ">
        <h1 className=" font-abc text-2xl font-bold text-white py-4  bg-[#1c085d]">
          {" "}
          OUR PRODUCTS CATEGORIES{" "}
        </h1>
        <Categories />
      </div>

      {/* All Products Link Section */}
      <div className="bg-[#1c085d] lg:py-2">
        <Link to="/Products" className="block max-w-screen-md mx-auto">
          <h1 className=" font-abc text-2xl font-extrabold text-white text-center py-4">
            ALL PRODUCTS
          </h1>
        </Link>
      </div>

      {/* Carousel Section */}
      <div className="lg:py-8">
        <Carousel products={products} />
      </div>

      {/* Brands Section */}
      <div className="w-full lg:pb-8 bg-[#fff3bf]">
        <div className="max-w-screen-md mx-auto bg-[#1a185e] text-center p-4">
          <h1 className=" font-abc text-2xl font-extrabold text-white">
            OUR TOP BRANDS
          </h1>
        </div>
        <div className="px-4 sm:px-6 lg:px-8">
          <Brands />
        </div>
      </div>
    </>
  );
};

export default Productswithoutnav;
