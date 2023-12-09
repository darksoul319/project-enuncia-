import React from 'react'
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Workcount from './components/Workcount';
import Swiper from './components/Swiper';
const App = () => {
  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Portfolio/>
     <Workcount/>
     <Services/>
     {/* <Swiper/> */}
    </>
  )
}

export default App;
