import React from 'react';
import './productlist.css'; 
import products from '../../data/products'; 

function ProductList() {
  return (
    <div className="product-section">
      <h2 className="product-title">OUR BEST SELLERS</h2>  
      <div className="view-all-wrapper">
        <a href="/products" className="view-all-link">VIEW ALL →</a>
      </div>    
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <span className="product-label">{product.label}</span>
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.title}</h3>
              <p className="product-price">
                {product.originalPrice && (
                  <span className="original-price">{product.originalPrice}</span>
                )}
                {product.price}
              </p>
            </div>
          </div>
        ))}
         </div>
    </div>
  );
}

export default ProductList;