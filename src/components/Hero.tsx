import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=3270&auto=format&fit=crop"
          alt="Hero burger"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Craft Your Perfect <span className="text-orange-500">Burger</span> Experience
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Hand-crafted burgers made with premium ingredients and passion
            </p>
            <div className="flex gap-4">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
                Order Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all">
                View Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}