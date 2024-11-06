import React from 'react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'products' | 'portfolio') => void;
  currentPage: string;
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => onNavigate('home')}
            className="flex-shrink-0 font-bold text-2xl text-blue-600 hover:text-blue-700 transition"
          >
            dezerv
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('products')}
              className={`transition ${
                currentPage === 'products' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Products
            </button>
            <button 
              onClick={() => onNavigate('portfolio')}
              className={`transition ${
                currentPage === 'portfolio' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Portfolio
            </button>
            <button className="text-gray-700 hover:text-blue-600 transition">
              Learn
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}