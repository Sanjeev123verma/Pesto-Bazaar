// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';



// const ProductDetails = () => {
//   const { id } = useParams();
//   const { addToCart } = useCart();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     // In a real app, you'd fetch the product data based on the id
//     // This is just a placeholder
//     const fetchProduct = async () => {
//       // Simulating an API call
//       const response = await fetch(`/api/products/${id}`);
//       const data = await response.json();
//       setProduct(data);
//     };

//     fetchProduct();
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   const handleAddToCart = () => {
//     addToCart(product);
//     // Optionally, show a confirmation message
//   };

//   const handleBuyNow = () => {
//     // Implement buy now logic
//     console.log('Buy Now clicked');
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex flex-col md:flex-row">
//         <div className="md:w-1/2">
//           <img 
//             src={product.image} 
//             alt={product.name} 
//             className="w-full rounded-lg shadow-lg"
//           />
//         </div>
//         <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
//           <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
//           <p className="text-2xl text-gray-600 mb-4">${product.price.toFixed(2)}</p>
//           <p className="mb-6">{product.description}</p>
//           <div className="flex space-x-4">
//             <button 
//               onClick={handleAddToCart}
//               className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
//             >
//               Add to Cart
//             </button>
//             <button 
//               onClick={handleBuyNow}
//               className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    // Fetch product details based on id
    const fetchProductDetails = async () => {
      try {
        // Replace this with your actual API call
        const response = await fetch(`/api/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    // Here you would typically add the product to a cart
    // For now, we'll just set a flag to show it's been added
    setIsAddedToCart(true);
    
    // In a real app, you might save to localStorage or send to an API
    console.log(`Added ${quantity} of product ${id} to cart`);
    
    // Reset after a short delay
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
        />
      </div>
      <button onClick={handleAddToCart} disabled={isAddedToCart}>
        {isAddedToCart ? "Added to Cart!" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductDetails;