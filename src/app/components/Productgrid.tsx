'use client';
import React from 'react';
import Image from 'next/image';

const ProductGrid = () => {
  const products = [
    { id: 1, name: 'Syltherine', description: 'Stylish cafe chair', price: 'Rp 2.500.000', discount: '-30%', image: '/syltherine.jpg', isNew: false },
    { id: 2, name: 'Leviosa', description: 'Stylish sofa chair', price: 'Rp 2.500.000', discount: null, image: '/leviosa.jpg', isNew: false },
    { id: 3, name: 'Lolito', description: 'Luxury big sofa', price: 'Rp 7.000.000', discount: '-50%', image: '/lolito.jpg', isNew: false },
    { id: 4, name: 'Respira', description: 'Outdoor bar table and stool', price: 'Rp 500.000', discount: null, image: '/respira.jpg', isNew: true },
    { id: 5, name: 'Grifo', description: 'Night lamp', price: 'Rp 1.500.000', discount: null, image: '/grifo.jpg', isNew: false },
    { id: 6, name: 'Muggo', description: 'Small mug', price: 'Rp 150.000', discount: null, image: '/muggo.jpg', isNew: false },
    { id: 7, name: 'Pingky', description: 'Cute bed set', price: 'Rp 7.000.000', discount: '-50%', image: '/pingky.jpg', isNew: false },
    { id: 8, name: 'Potty', description: 'Minimalist flower pot', price: 'Rp 500.000', discount: null, image: '/potty.jpg', isNew: true },
  ];

  return (
    <div className="bg-[#f3f7ff] py-10 px-4 text-center">
      <h1 className="text-3xl font-bold text-[#00274d] mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-[#d1e7ff]">
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              {product.discount && (
                <span className="absolute top-2 left-2 bg-[#ffcc00] text-white text-xs py-1 px-3 rounded-full">
                  {product.discount}
                </span>
              )}
              {product.isNew && (
                <span className="absolute top-2 right-2 bg-[#004aad] text-white text-xs py-1 px-3 rounded-full">
                  New
                </span>
              )}
            </div>
            <div className="p-4 text-left">
              <h3 className="text-xl font-semibold text-[#00274d]">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <h4 className="text-lg font-bold text-[#004aad]">{product.price}</h4>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 py-2 px-6 bg-[#004aad] text-white rounded-lg hover:bg-[#ffcc00] hover:text-[#00274d] transition-all">
        Show More
      </button>
    </div>
  );
};

export default ProductGrid;



