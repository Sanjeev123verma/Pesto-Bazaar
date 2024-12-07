import React from 'react';

const Brands = () => {
  return (
    <div className=" w-full flex flex-wrap justify-center items-center md:py-8 my-2 gap-8">
      <div className="bg-white text-center md:p-6 p-4 md:m-4 rounded-lg shadow-lg flex flex-col items-center hover:scale-125 transform transition duration-300">
        <img src="https://via.placeholder.com/150" alt="Brand 1" className="w-24 h-24 mb-4 rounded-full" />
        <h3 className="text-lg font-semibold">Brand 1</h3>
      </div>
      <div className="bg-white text-center md:p-6 p-4 md:m-4 rounded-lg shadow-lg flex flex-col items-center hover:scale-125 transform transition duration-300">
        <img src="https://via.placeholder.com/150" alt="Brand 2" className="w-24 h-24 mb-4 rounded-full" />
        <h3 className="text-lg font-semibold">Brand 2</h3>
      </div>
      <div className="bg-white text-center md:p-6 p-4 md:m-4 rounded-lg shadow-lg flex flex-col items-center hover:scale-125 transform transition duration-300">
        <img src="https://via.placeholder.com/150" alt="Brand 3" className="w-24 h-24 mb-4 rounded-full" />
        <h3 className="text-lg font-semibold">Brand 3</h3>
      </div>
      <div className="bg-white text-center md:p-6 p-4 md:m-4 rounded-lg shadow-lg flex flex-col items-center hover:scale-125 transform transition duration-300">
        <img src="https://via.placeholder.com/150" alt="Brand 4" className="w-24 h-24 mb-4 rounded-full" />
        <h3 className="text-lg font-semibold">Brand 4</h3>
      </div>
      <div className="bg-white text-center md:p-6 p-4 md:m-4 rounded-lg shadow-lg flex flex-col items-center hover:scale-125 transform transition duration-300">
        <img src="https://via.placeholder.com/150" alt="Brand 5" className="w-24 h-24 mb-4 rounded-full" />
        <h3 className="text-lg font-semibold">Brand 5</h3>
      </div>
    </div>
  );
};

export default Brands;

