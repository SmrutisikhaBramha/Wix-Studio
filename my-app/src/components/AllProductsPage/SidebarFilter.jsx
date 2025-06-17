import React from 'react';
import './SidebarFilter.css';

const categories = ['All Products', 'Active QX', 'Artisanal', 'Best Sellers', 'Kids Shoes'];

const SidebarFilter = ({ priceRange, setPriceRange }) => {
  const handlePriceChange = (e) => {
    const newValue = parseInt(e.target.value);
    setPriceRange([64, newValue]);
  };

  return (
    <div className="sidebar-filter">
      <h3>Browse by</h3>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index} className="category-item">
            {category}
          </li>
        ))}
      </ul>

      <div className="price-filter">
        <h4>Filter by Price</h4>
        <div className="price-range">
          <span>${priceRange[0]}</span>
          <input
            type="range"
            min="64"
            max="129"
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="price-slider"
          />
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;
