
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

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, quantity: item.quantity + 1 }));
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 m-4">
      {/* Cart Table Section */}
      <div className="w-full lg:w-3/4">
        {/* Table for larger screens */}
        <table className="hidden sm:table min-w-full bg-white shadow-md rounded-md">
          <thead className="bg-gray-200 text-center text-gray-600">
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
                    className="w-18 h-16 object-cover"
                  />
                </td>
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">₹ {item.price}</td>
                <td className="py-3 px-4 ml-16 flex items-center gap-2">
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

        {/* Responsive Cards for smaller screens */}
        <div className="sm:hidden flex flex-col gap-4">
          {cartItems.map((item, index) => (
            <div key={item.id} className="border p-4 bg-white shadow-md rounded-md">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-20 object-cover"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>Price: ₹ {item.price}</p>
                  <p>Subtotal: ₹ {(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 text-center ml-4">
                <div className="flex items-center gap-2 justify-center">
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
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item))}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
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
      <Toaster position="top-center" />
    </div>
  );
};

export default CartPage;
