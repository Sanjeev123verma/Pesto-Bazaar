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
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 md:z-50 z-30 max-w-full mx-auto bg-gray-100 md:text-[white] md:shadow-2xl shadow-xl items-center font-semibold">
      <div className="max-w-full mx-auto px-6 sm:px-6 lg:px-8 items-center ">
        <div className="flex justify-between items-center text-center h-18">
          <div className="flex-shrink-0 items-center text-center">
           <NavLink to="/"> 
           <img
              src="/Images/Pestobazaarlogo.png"
              alt="logo"
              className="md:w-40 w-24 cursor-pointer items-center"
            />
            </NavLink>
          </div>

          <div className="flex relative items-center bg-white rounded-full pr-4 border-black border">
            <input
              type="text"
              placeholder="Search for Products... "
              className="md:min-w-[300px] lg:w-[400px] bg-white text-black rounded-full pl-4 md:pl-8 pr-2 md:pr-5 md:py-2 py-1 px-2 md:px focus:outline-none focus:bg-white capitalize text-lg"
            />
            <button type="submit" className="pl-2 text-xl text-[#1a185e]">
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

            <div className="hidden md:block">
              <div className="flex items-center text-2xl">
                <button className="flex flex-row items-center font-abc hover:bg-gray-300 px-3 py-2 rounded-md text-[#1a185e] space-x-3">
                  <BsFillCartPlusFill />
                  <NavLink to="/Cart" className="relative">
                    Cart
                    {cartItemCount > 0 && (
                    <span className="absolute bottom-4 right-12 text-white text-sm bg-[#ea001b] px-1 rounded-full flex items-center justify-center">
                      {cartItemCount}
                    </span>
                    )}
                  </NavLink>
                </button>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className=" hover:bg-gray-200 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
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
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center items-center justify-center py-2">
          <ul className="flex flex-col text-center items-center">
            <li className="text-2xl text-center hover:bg-gray-300 px-3 py-2 rounded-full">
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
                to="Contact us"
                className="hover:bg-gray-300 block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



// import React, { useState } from "react";
// import { FaUserCircle } from "react-icons/fa";
// import { BsFillCartPlusFill } from "react-icons/bs";
// import { IoSearch } from "react-icons/io5";
// import { MdFavoriteBorder } from "react-icons/md";
// import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="sticky top-0 z-50 bg-gray-100 shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <NavLink to="/">
//               <img
//                 src="/Images/Pestobazaarlogo.png"
//                 alt="logo"
//                 className="w-32 md:w-40"
//               />
//             </NavLink>
//           </div>

//           {/* Search Bar */}
//           <div className="hidden md:flex items-center bg-white rounded-full border px-4">
//             <input
//               type="text"
//               placeholder="Search for Products..."
//               className="w-48 md:w-72 lg:w-96 bg-white text-black rounded-full py-1 px-4 focus:outline-none text-sm md:text-base"
//             />
//             <button type="submit" className="text-xl text-blue-600">
//               <IoSearch />
//             </button>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-6">
//             <NavLink
//               to="/"
//               className="text-gray-700 hover:text-blue-600 font-semibold"
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/Products"
//               className="text-gray-700 hover:text-blue-600 font-semibold"
//             >
//               Shop
//             </NavLink>
//             <NavLink
//               to="/BlogSection"
//               className="text-gray-700 hover:text-blue-600 font-semibold"
//             >
//               Blogs
//             </NavLink>
//             <NavLink
//               to="/Contact us"
//               className="text-gray-700 hover:text-blue-600 font-semibold"
//             >
//               Contact Us
//             </NavLink>
//           </div>

//           {/* User Icons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <NavLink to="/Signup" className="text-2xl text-gray-700">
//               <FaUserCircle />
//             </NavLink>
//             <NavLink to="/" className="text-2xl text-gray-700">
//               <MdFavoriteBorder />
//             </NavLink>
//             <div className="relative">
//               <NavLink to="/Cart" className="text-2xl text-gray-700">
//                 <BsFillCartPlusFill />
//               </NavLink>
//               {cartItemCount > 0 && (
//                 <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {cartItemCount}
//                 </span>
//               )}
//             </div>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               aria-label="Toggle Menu"
//               className="text-gray-700 focus:outline-none"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-gray-100 px-4 py-2 space-y-2">
//           <NavLink
//             to="/"
//             className="block text-gray-700 hover:text-blue-600 font-medium"
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/Products"
//             className="block text-gray-700 hover:text-blue-600 font-medium"
//           >
//             Shop
//           </NavLink>
//           <NavLink
//             to="/BlogSection"
//             className="block text-gray-700 hover:text-blue-600 font-medium"
//           >
//             Blogs
//           </NavLink>
//           <NavLink
//             to="/Contact us"
//             className="block text-gray-700 hover:text-blue-600 font-medium"
//           >
//             Contact Us
//           </NavLink>
//           <NavLink
//             to="/Signup"
//             className="block text-gray-700 hover:text-blue-600 font-medium"
//           >
//             Profile
//           </NavLink>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
