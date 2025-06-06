import React from 'react';
import './PromoBanner.css';
import hero1Shoe from '../../assets/images/hero1-shoe.png'; // adjust path if needed

const PromoBanner = () => {
  return (
    <section className="promo-section">
      <div className="promo-left">
        <h1>KIDS COLLECTION<br />20% OFF SALE</h1>
        <p>Exclusive, one-time offer</p>
        <button>SHOP NOW</button>
      </div>
      <div className="promo-right">
        <img src={hero1Shoe} alt="Sneakers" />
      </div>
    </section>
  );
};

export default PromoBanner;
