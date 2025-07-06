import React from 'react'
import image from '../assets/beauty.avif'

const Dress = () => {
    return (
        <div>
            <div className='flex flex-col items-center mt-20'>
                <h2 className="text-3xl md:text-xl font-extrabold text-purple-600 text-center mb-4 tracking-wide">
                    👗 Trendy Dresses Collection 💜
                </h2>

                <p className="text-lg text-purple-500 text-center max-w-xl mx-auto">
                    From breezy florals to bold statements, discover dresses that fit your vibe and flatter your fire 🔥. Style up & slay today!
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 mt-15'>

                <div className='border p-4 w-72 mt-12'>
                    <img src={image} className='w-full h-52 mb-5' />
                    <h3 className="text-lg font-semibold text-purple-600 mt-2">Floral Summer Dress 🌸</h3>
                    <p className="text-gray-700 font-extrabold">₹999</p>
                    <button className='w-full bg-purple-800 text-white py-2 rounded-md mt-6'>Add to cart</button>
                </div>

                <div className='border p-4 w-72 mt-12'>
                    <img src={image} className='w-full h-52 mb-5' />
                    <h3 className="text-lg font-semibold text-purple-600 mt-2">Elegant Party Gown 👑</h3>
                    <p className="text-gray-700 font-extrabold">₹1799</p>
                    <button className='w-full bg-purple-800 text-white py-2 rounded-md mt-6'>Add to cart</button>
                </div>

                <div className='border p-4 w-72 mt-12'>
                    <img src="demo.jpg" className='w-full h-52 mb-5' />
                    <h3 className="text-lg font-semibold text-purple-600 mt-2">Casual Denim Dress 👖</h3>
                    <p className="text-gray-700 font-extrabold">₹899</p>
                    <button className='w-full bg-purple-800 text-white py-2 rounded-md mt-6'>Add to cart</button>
                </div>

                <div className='border p-4 w-72 mt-12'>
                    <img src="demo.jpg" className='w-full h-52 mb-5' />
                    <h3 className="text-lg font-semibold text-purple-600 mt-2">Evening Maxi Dress ✨</h3>
                    <p className="text-gray-700 font-extrabold">₹1599</p>
                    <button className='w-full bg-purple-800 text-white py-2 rounded-md mt-6'>Add to cart</button>
                </div>

                <div className='border p-4 w-72 mt-12'>
                    <img src="demo.jpg" className='w-full h-52 mb-5' />
                    <h3 className="text-lg font-semibold text-purple-600 mt-2">Printed Kurti Set 🌼</h3>
                    <p className="text-gray-700 font-extrabold">₹799</p>
                    <button className='w-full bg-purple-800 text-white py-2 rounded-md mt-6'>Add to cart</button>
                </div>

                <div className='border p-4 w-72 mt-12'>
                    <img src="demo.jpg" className='w-full h-52 mb-5' />
                    <h3 className="text-lg font-semibold text-purple-600 mt-2">Ruffle Sleeve Dress 💃</h3>
                    <p className="text-gray-700 font-extrabold">₹1099</p>
                    <button className='w-full bg-purple-800 text-white py-2 rounded-md mt-6'>Add to cart</button>
                </div>

                <div className='border p-4 w-72 mt-12'>
                    <img src={image} className='w-full h-52 mb-5' />
                    <h3 className="text-lg font-semibold text-purple-600 mt-2">A-Line Cotton Dress 🌿</h3>
                    <p className="text-gray-700 font-extrabold">₹649</p>
                    <button className='w-full bg-purple-800 text-white py-2 rounded-md mt-6'>Add to cart</button>
                </div>

            </div>
        </div>
    )
}

export default Dress
