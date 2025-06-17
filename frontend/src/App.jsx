import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Productpage from './pages/Productpage'

const App = () => {
  return (
    <div className='min-h-screen  transition-colors duration-300'>
      
      < Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<Productpage/>} />
      </Routes>
    </div>
  )

}

export default App
