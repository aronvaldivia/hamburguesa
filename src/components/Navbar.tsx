import React from 'react';
import { Menu, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/95 text-white z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-orange-500">BurgerCraft</div>
        <div className="hidden md:flex space-x-8">
          <a href="#menu" className="hover:text-orange-500 transition-colors">Menu</a>
          <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
          <a href="#location" className="hover:text-orange-500 transition-colors">Location</a>
          <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <ShoppingBag className="w-6 h-6 text-orange-500 cursor-pointer hover:text-orange-400" />
          <Menu className="md:hidden w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}