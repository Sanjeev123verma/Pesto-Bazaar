import React from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { addToCart } from '../redux/slices/cartSlice'; // Update path as necessary

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  // Ensure price is valid and properly formatted
  const price = typeof product.price === 'number' ? product.price.toFixed(2) : '0.00';

  // Add to Cart Handler
  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success(`${product.name} added to your cart!`);
  };

  return (
    <div className="max-w-[300px] overflow-hidden shadow-2xl mx-auto md:my-6 bg-blue-100 hover:border-2 border-blue-300 rounded-md">
      <img
        className="w-full hover:scale-95 transform transition-transform duration-300"
        src={product.image}
        alt={product.name}
      />
      <div className="px-4 lg:py-1 md:py-4">
        <div className="font-bold text-xl lg:mb-1">{product.name}</div>
        <p className="hidden md:block text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 lg:pb-1">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ₹{price}
        </span>
      </div>
      <div className="pb-3 flex justify-center space-x-2">
        <button
          className="bg-[#1c085d] hover:bg-[#ea001b] text-white px-2 py-1 rounded-full"
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
