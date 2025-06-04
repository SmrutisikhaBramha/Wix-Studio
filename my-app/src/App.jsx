import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Productcard from './components/Productcard/Productcard';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
    
    <Productcard product={{
  name: 'Active JR',
  image: '/assets/active-jr.jpg',
  oldPrice: 90,
  newPrice: 64
}} />
      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
