import React from 'react';

const categories = [
  { name: 'Rodent Control', image: './public/Icons/rodent.jpg'},
  { name: 'Roach Control', image: './public/Icons/roach.jpg'},
  { name: 'Mosquito Control', image: './public/Icons/mosquitoes.jpg'},
  { name: 'Lizard Control', image: './public/Icons/lizards.jpg'},
  { name: 'Termite Control', image: './public/Icons/terminate.jpg'},
  { name: 'Bedbugs Control', image: './public/Icons/bedbugs.jpg'},
  { name: 'Fly Control', image: './public/Icons/fly.jpg'},
  { name: 'Snake Control Products', image: './public/Icons/snakes.jpg'},
  { name: 'Pest Control Equipment', image: './public/Icons/pest.jpg'},
  { name: 'Agro Chemical Products', image: './public/Icons/crop.jpg'},
];

const Categories = () => {
  return (
    <div className="bg-violet-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <h2 className="text-3xl font-bold text-center text-[#1c085d] mb-8">
          Our Categories
        </h2> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <div 
              key={category.name}
              className="relative flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
            >
              <div className="relative flex items-center justify-center mb-4 w-24 h-24 bg-gray-100 rounded-full shadow-md overflow-hidden transition-transform duration-100 transform hover:-translate-y-6">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-center text-lg font-medium text-[#1c085d]">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

