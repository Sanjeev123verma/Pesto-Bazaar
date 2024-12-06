import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { addToCart, removeFromCart } from '../redux/slices/cartSlice.jsx';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Handle add to cart with notification
  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, quantity: item.quantity + 1 }));
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 m-4">
      {/* Cart Table Section */}
      <div className="w-full lg:w-3/4 justify-center items-center">
        <table className="min-w-full bg-white shadow-md rounded-md">
          <thead className="bg-gray-200 text-center text-gray-600 justify-center items-center">
            <tr>
              <th className="py-2 px-4">Index</th>
              <th className="py-2 px-4">Item</th>
              <th className="py-2 px-4">Product Name</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Quantity</th>
              <th className="py-2 px-4">Subtotal</th>
              <th className="py-2 px-4">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={item.id} className="border-b">
                <td className="py-2 px-2">{index + 1}</td>
                <td className="py-2 px-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-18 h-16 pl-12 object-cover justify-center items-center text-center"
                  />
                </td>
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">₹ {item.price}</td>
                <td className="py-3 px-4 flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (item.quantity > 1) {
                        dispatch(addToCart({ ...item, quantity: item.quantity - 1 }));
                      }
                    }}
                    className="bg-gray-200 px-2 py-1 rounded"
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-gray-200 px-2 py-1 rounded"
                  >
                    +
                  </button>
                </td>
                <td className="py-3 px-4">₹ {(item.price * item.quantity).toFixed(2)}</td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => dispatch(removeFromCart(item))}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Checkout Section */}
      <div className="w-full lg:w-1/4 h-60 bg-gray-100 shadow-md p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-8">CART TOTAL ({cartItems.length} ITEMS)</h2>
        <div className="flex justify-between mb-4">
          <span>Subtotal:</span>
          <span>₹ {calculateSubtotal()}</span>
        </div>
        <div className="flex justify-between font-bold text-lg mb-4">
          <span>Total:</span>
          <span>₹ {calculateSubtotal()}</span>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mt-6">
          Proceed to Checkout
        </button>
      </div>

      {/* Toast Notifications */}
      <Toaster position='top-center'/>
    </div>
  );
};

export default CartPage;
