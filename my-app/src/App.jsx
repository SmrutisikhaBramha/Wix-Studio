import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Productcard from './components/Productcard/Productcard';
import Productlist from './components/Productlist/Productlist';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Productcard
                product={{
                  name: 'Active JR',
                  image: '/assets/active-jr.jpg',
                  oldPrice: 90,
                  newPrice: 64,
                }}
              />
              <Productlist />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/products" element={<Productlist />} />
      </Routes>
    </Router>
  );
}

export default App;