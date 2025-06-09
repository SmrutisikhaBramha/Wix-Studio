
import './Productcard.css';

const Productcard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} />
      <div className="product-info">
        <span className="product-label">{product.label}</span>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default Productcard;