import React from 'react';
import { useState } from 'react';
import asma from "../assets/asmapa.png";
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import CartCountBadge from './CartCountBadge';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }


  return (
    <div>
      <nav className='p-3 shadow-lg fixed top-0 left-0 w-full bg-white z-50'>
        <div className='container mx-auto flex justify-between items-center'>

          {/* Left Section: Logo + Menu */}
          <div className='flex items-center space-x-6'>
            <img src={asma} className='w-20 h-10' alt='logo' />
            <div className='text-xl font-playfair text-purple-900 font-extrabold'>
              Queenly Cart
            </div>


            <ul className='hidden md:flex space-x-5 text-pink-700 font-extrabold font-playfair'>
              <li><button onClick={() => onCategoryChange("All")}>Ornaments</button></li>
              <li><button onClick={() => onCategoryChange("Dresses")}>Dresses</button></li>
              <li><button onClick={() => onCategoryChange("Ornaments")}>Beauty Products</button></li>
              <li><button onClick={() => onCategoryChange("Pads")}>Pads</button></li>
              <li className='text-purple-900'><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Right Section: Cart or More */}
          <div className='flex items-center space-x-4 text-xl'>
            <div className='icon_wrapper'>
              <a>🛒</a>
              <CartCountBadge size="w-[25px] h-[25px]" />
            </div>
            
            <div className='icon_wrapper'>
              <FaUserCircle />
             
            </div>

            {/* Hamburger (Mobile Only) */}
            <div className='md:hidden'>
              <button onClick={toggleMenu}>
                {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>
            </div>
                                   
          </div>

        </div>

        {isOpen && (
          <div className='md:hidden mt-3 px-4'>
            <ul className='flex flex-col space-y-2 text-pink-700 font-bold font-playfair'>
              <li><button onClick={() => onCategoryChange("All")}>Ornaments</button></li>
              <li><button onClick={() => onCategoryChange("Dresses")}>Dresses</button></li>
              <li><button onClick={() => onCategoryChange("Ornaments")}>Beauty Products</button></li>
              <li><button onClick={() => onCategoryChange("Pads")}>Pads</button></li>
              <li className='text-purple-900'><a href="/contact">Contact</a></li>
              <li><a href="/cart">🛒 Cart</a></li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
