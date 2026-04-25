import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './ProductCard.css';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} agregado al carrito!`);
  };

  return (
    <div className="product-card">

      {/* Imagen clickeable */}
      <Link to={`/product/${product.id}`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image" 
        />
      </Link>

      <div className="product-info">

        {/* Nombre clickeable */}
        <Link to={`/product/${product.id}`} className="product-link">
          <h3>{product.name}</h3>
        </Link>

        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>

        <div className="product-footer">
          <span className="product-price">
            S/ {product.price.toFixed(2)}
          </span>

          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            {product.stock > 0 ? 'Añadir al carrito' : 'Sin stock'}
          </button>
        </div>

        <p className="product-stock">
          En stock: {product.stock}
        </p>
      </div>
    </div>
  );
};