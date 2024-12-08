import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero bg-white py-20 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-gray-800">Welcome to Our Ecommerce Store</h1>
        <p className="text-lg text-gray-600 mt-4">Find the best products for your needs, handpicked just for you.</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
