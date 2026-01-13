import React from 'react';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50">
      {/* Animated Shipping Banner */}
      <div className="bg-gray-900 text-white py-3 px-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-sm font-medium">
          🚚 Free shipping above Rs.1000 - Limited time offer!
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Left Section - Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">FOKUS</h1>
            </div>

            {/* Center Section - Navigation Links */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                New Arrivals
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                Men
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                Women
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                Kids
              </a>
              <a href="#" className="text-red-600 hover:text-red-700 transition-colors duration-200">
                Sale
              </a>
            </div>

            {/* Right Section - Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-700 hover:text-gray-900 rounded-md transition-colors duration-200">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="p-2 text-gray-700 hover:text-gray-900 rounded-md transition-colors duration-200">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <button className="p-2 text-gray-700 hover:text-gray-900 rounded-md transition-colors duration-200">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;