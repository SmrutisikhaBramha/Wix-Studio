import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Productcard from './components/Productcard/Productcard';
import Productlist from './components/Productlist/Productlist';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BannerMarquee from './components/BannerMarquee/BannerMarquee';
import CollectionSection from './components/CollectionSection/CollectionSection';
import PromoBanner from './components/PromoBanner/PromoBanner';
import LandingSection from './components/LandingSection/LandingSection';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Productcard
                product={{
                }}
              />
              <Productlist />
              <PromoBanner />
               <BannerMarquee />
              <CollectionSection />
              <LandingSection />
              <Contact />
            </>
          }
        />
        <Route path="/products" element={<Productlist />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
