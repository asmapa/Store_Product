import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Productpage from './pages/Productpage'
import Marqueee from './pages/Marqueee'
import Dress from './pages/Dress'
import Contact from './components/Contact'


const App = () => {
  return (
    <div className='min-h-screen  transition-colors duration-300'>
      
      < Navbar/>
     <HomePage />
      <Marqueee />
      <Productpage />
      <Dress />
      <Contact/>
    
    </div>
  )

}

export default App
