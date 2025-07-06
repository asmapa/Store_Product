import React from 'react'
import image from '../assets/beauty.avif'

const Productpage = () => {
  return (
    <div>
      <div className='flex flex-col items-center mt-20'>
        <h2 className="text-3xl md:text-xl font-extrabold text-pink-600 text-center mb-4 tracking-wide">
          💄 Beauty Products 💖
        </h2>

        <p className="text-lg text-rose-500 text-center max-w-xl mx-auto">
          From bold lipsticks to glowing highlighters, our makeup collection is made to make you shine ✨. Grab your favorites now and glow like never before!
        </p>

      </div>
     
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 px-6 mt-15'>
        <div className='border p-4 w-72  mt-12'>
          <img src={image} className='w-full h-52 mb-5'/>
          <h3 className="text-lg font-semibold text-pink-600 mt-2">Glow Foundation ✨</h3>
          <p className="text-gray-700 font-extrabold">₹499</p>
          <button className='w-full bg-pink-800 text-white py-2 rounded-md mt-6'>Add to cart</button>
        </div>


        <div className='border p-4 w-72   mt-12'>
          <img src={image} className='w-full h-52 mb-5' />
          <h3 className="text-lg font-semibold text-pink-600 mt-2">Glow Foundation ✨</h3>
          <p className="text-gray-700 font-extrabold">₹499</p>
          <button className='w-full bg-pink-800 text-white py-2 rounded-md mt-6'>Add to cart</button>
        </div>


        <div className='border p-4 w-72  mt-12'>
          <img src="demo.jpg" className='w-full h-52 mb-5' />
          <h3 className="text-lg font-semibold text-pink-600 mt-2">Glow Foundation ✨</h3>
          <p className="text-gray-700 font-extrabold">₹499</p>
          <button className='w-full bg-pink-800 text-white py-2 rounded-md mt-6'>Add to cart</button>
        </div>


        <div className='border p-4 w-72   mt-12'>
          <img src="demo.jpg" className='w-full h-52 mb-5' />
          <h3 className="text-lg font-semibold text-pink-600 mt-2">Glow Foundation ✨</h3>
          <p className="text-gray-700 font-extrabold">₹499</p>
          <button className='w-full bg-pink-800 text-white py-2 rounded-md mt-6'>Add to cart</button>
        </div>


        <div className='border p-4 w-72  mt-12'>
          <img src="demo.jpg" className='w-full h-52 mb-5' />
          <h3 className="text-lg font-semibold text-pink-600 mt-2">Glow Foundation ✨</h3>
          <p className="text-gray-700 font-extrabold">₹499</p>
          <button className='w-full bg-pink-800 text-white py-2 rounded-md mt-6'>Add to cart</button>
        </div>

        <div className='border p-4 w-72  mt-12'>
          <img src="demo.jpg" className='w-full h-52 mb-5' />
          <h3 className="text-lg font-semibold text-pink-600 mt-2">Glow Foundation ✨</h3>
          <p className="text-gray-700 font-extrabold">₹499</p>
          <button className='w-full bg-pink-800 text-white py-2 rounded-md mt-6'>Add to cart</button>
        </div>


        <div className='border p-4 w-72   mt-12'>
          <img src={image } className='w-full h-52 mb-5' />
          <h3 className="text-lg font-semibold text-pink-600 mt-2">Glow Foundation ✨</h3>
          <p className="text-gray-700 font-extrabold">₹499</p>
          <button className='w-full bg-pink-800 text-white py-2 rounded-md mt-6'>Add to cart</button>
        </div>
      </div>


    </div>
  )
}

export default Productpage