import React from 'react';
import './CollectionSection.css';

import activeQx from '../../assets/images/active-qx.jpg';
import kids from '../../assets/images/kids.jpg';
import artisanal from '../../assets/images/artisanal.jpg';

const collections = [
  {
    title: 'ACTIVE QX',
    image: activeQx,
  },
  {
    title: 'KIDS',
    image: kids,
  },
  {
    title: 'ARTISANAL',
    image: artisanal,
  },
];


const CollectionSection = () => {
  return (
    <div className="collection-container">
      <div className="collection-header">
        <h2>SHOP BY COLLECTION</h2>
        <a href="#" className="view-all">
          VIEW ALL →
        </a>
      </div>
      <div className="collection-grid">
        {collections.map((item, index) => (
          <div className="collection-card" key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title} →</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionSection;
