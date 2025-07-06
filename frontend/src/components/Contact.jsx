import React from 'react'

const Contact = () => {
  return (
      <div>
          <div className="bg-purple-100 py-10 px-4 text-center">
              <hr className="border-t border-purple-300 my-8"/>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">📞 Get in Touch With Us!</h2>
              <p className="text-gray-800 mb-6 max-w-xl mx-auto">
                  Have a question, feedback, or just wanna say hi? Fill out the form below and we’ll get back to you with sparkle ✨
              </p>
              <form className="max-w-lg mx-auto grid gap-4">
                  <input type="text" placeholder="Your Name" className="border border-purple-300 p-3 rounded-md" />
                  <input type="email" placeholder="Your Email" className="border border-purple-300 p-3 rounded-md" />
                  <textarea placeholder="Your Message" className="border border-purple-300 p-3 rounded-md h-32"></textarea>
                  <button type="submit" className="bg-gray-800 text-white py-2 rounded-md hover:bg-purple-800 transition">
                      Send Message
                  </button>
              </form>
          </div>



          <footer className="bg-gray-800 text-white py-8 mt-10">
              <div className=" px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">

                  <div>
                      <h3 className="text-lg font-bold mb-2">Queenly Cart 👗</h3>
                      <p>Your one-stop store for fabulous fashion and beauty picks. Designed with 💜 and powered by code!</p>
                  </div>

                  <div>
                      <h4 className="font-bold mb-2">Quick Links</h4>
                      <ul className="space-y-1">
                          <li><a href="#" className="hover:underline">Home</a></li>
                          <li><a href="#" className="hover:underline">Shop</a></li>
                          <li><a href="#" className="hover:underline">About</a></li>
                          <li><a href="#" className="hover:underline">Contact</a></li>
                      </ul>
                  </div>

                  <div>
                      <h4 className="font-bold mb-2">Follow Us</h4>
                      <div className="flex justify-center md:justify-start space-x-4">
                          <a href="#" className="hover:text-purple-300">📸 Instagram</a>
                          <a href="#" className="hover:text-purple-300">📘 Facebook</a>
                          <a href="#" className="hover:text-purple-300">🐦 Twitter</a>
                      </div>
                  </div>

              </div>

              <div className="text-center text-sm mt-6">
                  © {new Date().getFullYear()} Queenly Cart. All rights reserved.
              </div>
          </footer>


    </div>
  )
}

export default Contact