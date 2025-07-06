import React from 'react'
import beauty from "../assets/beauty.avif"
import dress from "../assets/dress.webp"
import orna from "../assets/ornam.jpg"
import pads from "../assets/pads.webp"
import Marqueee from './Marqueee'
import Productpage from './Productpage'



const HomePage = () => {
  return (
    <div className="h-screen pt-16"> 
      <div className="carousel w-full h-1/2">
        <div id="item1" className="carousel-item w-full h-full">
          <img src={beauty} className="w-full h-full object-cover" />
        </div>
        <div id="item2" className="carousel-item w-full h-full">
          <img src={dress} className="w-full h-full object-cover" />
        </div>
        <div id="item3" className="carousel-item w-full h-full">
          <img src={orna} className="w-full h-full " />
        </div>
        <div id="item4" className="carousel-item w-full h-full">
          <img src={pads} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
      </div>

      <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-14 justify-center space-x-14 m-10 font-dancing'>
        <div className='w-full md:w-[300px] border-b-pink-600 border-4 rounded-full font-bold text-purple-900 p-6' >
          
         “TWIRL & WIN” 🎉
          <p className='pt-6'>
            "Buy 2 Dresses, Get 1 FREE! + Extra 10% OFF on your first order."
            </p>
          
          
        </div>
        <div className='w-full md:w-[300px] border-b-purple-900 border-4 font-bold text-pink-700 rounded-full p-6'>
         “GLOW_UP FESTIVAL” 💖

          <p className='pt-6'>"Combo Deals: Buy any 3 beauty products & get 20% OFF + free surprise gift 🎁!"</p>

          
        </div>
        <div className='w-full md:w-[300px] border-b-rose-700 border-4 rounded-full p-6 font-bold text-purple-500'>
         “SHINE LIKE A STAR 🌟
          <p className='pt-6'>

            "Flat 25% OFF on all jewelry + FREE shipping on orders above ₹1999."</p>
        </div>
      </div>

      
      
    </div>
  )
}

export default HomePage
