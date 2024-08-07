// Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h2 className="text-xl font-bold text-black "  >IMAGINARIA</h2>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="hover:bg-purple-700 bg-black  px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="hover:bg-purple-700 bg-black    px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#" className="hover:bg-purple-700 bg-black  px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#" className="hover:bg-purple-700 bg-black  px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleDrawer}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-purple-700 focus:outline-none  focus:text-white"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white text-white" >
          <a href="#" className="hover:bg-purple-700 text-black block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#" className="hover:bg-purple-700   text-black  block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#" className="hover:bg-purple-700   text-black block px-3 py-2 rounded-md text-base font-medium">Services</a>
          <a href="#" className="hover:bg-purple-700    text-black   block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
