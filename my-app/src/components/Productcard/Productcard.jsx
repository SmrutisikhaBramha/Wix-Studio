import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="badge">Best Seller</div>
      <div className="image-container">
        <img src={product.image} alt={product.name} className="product-img" />
      </div>
      <h3 className="product-name">{product.name}</h3>
      <p className="price">
        {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
        <span className="new-price">${product.newPrice}</span>
      </p>
    </div>
  );
};

export default ProductCard;