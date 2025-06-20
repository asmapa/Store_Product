import React from 'react'
import { useState } from 'react'
import asma from "../assets/asmapa.png"
const Navbar = () => {
  const [DropDown, setDropDown] = useState(false);

  const ToggleDropDown = () => {
    setDropDown(!DropDown);
  }
  return (
    <div>
      <nav className=' p-3 shadow-lg'>
        <div className='container mx-auto flex space-x-6 '>
          <div>
            <img src={ asma} className='w-20 h-10 '/>
          </div>
          <div className='text-xl font-playfair text-purple-900 font-extrabold '> 
            Queenly Cart
          </div>
          <ul className='flex space-x-5 text-pink-700 font-extrabold'>
            
           
            <li><button onClick={() => onCategoryChange("All")}>Ornaments</button></li>
            <li><button onClick={() => onCategoryChange("Dresses")}>Dresses</button></li>
            <li><button onClick={() => onCategoryChange("Ornaments")}>Beauty Products</button></li>
            <li><button onClick={() => onCategoryChange("Pads")}>Pads</button></li>
            <li><a href="/">Home</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/cart">🛒 Cart</a></li>
          </ul>
        </div>
        

       
      </nav>
    </div>
  )
}

export default Navbar