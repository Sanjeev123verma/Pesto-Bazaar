// src/Navbar.js
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);
  // Calculate total cart item count
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky md:h-auto md:z-50 z-30 max-w-full mx-auto bg-gray-100 md:text-[white] md:shadow-2xl shadow-xl items-center font-semibold">
      <div className="max-w-full mx-auto md:px-6 px-2 lg:px-8 items-center ">
        <div className="flex justify-between items-center text-center h-18">
          <div className="flex-shrink-0 align-middle py-2 md:py-0">
            <NavLink to="/">
              <img
                src="/Images/Pestobazaarlogo.png"
                alt="logo"
                className="md:w-40 w-28 cursor-pointer"
              />
            </NavLink>
          </div>

          <div className="hidden md:block bg-white rounded-full border-black border">
            <input
              type="text"
              placeholder="Search for Products... "
              className="md:min-w-[300px] lg:w-[400px] w-auto bg-white text-black rounded-full md:py-2 py-1 md:pl-6 focus:outline-none focus:bg-white capitalize text-lg text-center md:text-left justify-between"
            />
            <button
              type="submit"
              className=" lg:pr-4 pr-2 text-xl text-[#1a185e]"
            >
              <IoSearch />
            </button>
          </div>

          <div className="hidden md:flex space-x-4 text-center items-center justify-center">
            <NavLink
              to="/"
              className="block text-[#1c085d] hover:text-[#673cf5] text-base font-bold p-2"
            >
              Home
            </NavLink>
            <NavLink
              to="Products"
              className="text-[#1c085d] hover:text-[#673cf5] block rounded-md text-base font-bold p-2"
            >
              Shop
            </NavLink>

            {/* <NavLink
              to="About us"
              className="bg-[#1c085d] hover:bg-[#ea001b] block rounded-md text-base font-medium p-2 px-4"
            >
              About
            </NavLink> */}

            <NavLink
              to="BlogSection"
              className="text-[#1c085d] hover:text-[#673cf5] block rounded-md text-base font-bold p-2"
            >
              Blogs
            </NavLink>
            <NavLink
              to="Contact us"
              className="text-[#1c085d] hover:text-[#673cf5] block rounded-md text-base font-bold p-2"
            >
              Contact us
            </NavLink>
          </div>

          <div className="flex justify-items-center space-x-8">
            <div className="hidden md:block text-center items-center py-2 text-2xl relative group">
              <button className="flex flex-row items-center text-center font-abc font-semibold py-2 rounded-md text-[#1a185e]">
                <NavLink to="/Signup">
                  <FaUserCircle />
                </NavLink>
              </button>
              {/* Tooltip */}
              <span className="absolute bottom-16 left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-6 transition-all duration-300 bg-gray-800 text-white text-sm rounded-md px-2 py-1 z-50">
                Profile
              </span>
            </div>

            <div className="hidden md:block text-center items-center py-2 text-2xl relative group">
              <button className="flex flex-row items-center text-center font-abc font-semibold py-2 rounded-md text-[#1a185e]">
                <NavLink to="/">
                  <MdFavoriteBorder />
                </NavLink>
              </button>
              {/* Tooltip */}
              <span className="absolute bottom-16 left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-6 transition-all duration-300 bg-gray-800 text-white text-sm rounded-md px-2 py-1 z-50">
                Favorites
              </span>
            </div>

            <div className="flex">
              <div className="flex items-center text-2xl ml-16 md:ml-0 text-center ">
                <button className="flex flex-row items-center font-abc hover:bg-gray-300 md:px-4 p-1 rounded-md text-[#1a185e] space-x-3 text-right">
                  <BsFillCartPlusFill className="relative" />
                  <NavLink to="/Cart" className="relative">
                    Cart
                    {cartItemCount > 0 && (
                      <span className="absolute bottom-5 md:bottom-4 right-12 md:right-12 text-white text-sm bg-[#ea001b] px-1 rounded-full flex items-center justify-center">
                        {cartItemCount}
                      </span>
                    )}
                  </NavLink>
                </button>
              </div>
            </div>
          </div>

          <div className="relative md:hidden">
            {/* Toggle Button */}
            <button
              onClick={toggleMenu}
              className="hover:bg-gray-200 focus:outline-none"
            >
              <svg
                className="h-8 w-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>

            {/* Sliding Panel */}
            <div
              className={`fixed top-0 left-0 h-full bg-gray-100 shadow-lg transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
              style={{ width: "50%" }} // Adjust panel width to half the screen
            >
              <div className="flex flex-col px-4 py-6 space-y-4">
                <button
                  onClick={toggleMenu}
                  className="self-end text-[#1c085d hover:text-gray-800 focus:outline-none"
                >
                  Close
                </button>
                <ul className="space-y-2 text-center text-[#1c085d]">
                  <li className="text-2xl hover:bg-gray-300 mx-20 px-4 py-1 rounded-full">
                    <NavLink to="/Signup">
                      <FaUserCircle />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      className="hover:bg-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="Products"
                      className="hover:bg-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Aboutus"
                      className="hover:bg-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="BlogSection"
                      className="hover:bg-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Blogs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="Contact us"
                      className="hover:bg-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  <li className="flex items-center text-2xl">
                    <button className="flex flex-row items-center font-abc hover:bg-gray-300 px-4 py-2 rounded-md text-[#1a185e] space-x-2 mx-12">
                      <BsFillCartPlusFill className="relative" />
                      <NavLink to="/Cart" className="relative">
                        Cart
                        {cartItemCount > 0 && (
                          <span className="absolute bottom-5 md:bottom-4 right-10 md:right-12 text-white text-sm bg-[#ea001b] px-1 rounded-full flex items-center justify-center">
                            {cartItemCount}
                          </span>
                        )}
                      </NavLink>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
