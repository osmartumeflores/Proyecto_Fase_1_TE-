import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products'; // ⚠️ ajusta si usas export default
import './ProductDetail.css';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // 🔥 SOLUCIÓN CLAVE (string vs number)
  const product = products.find(p => p.id.toString() === id);

  // 🚨 Si no encuentra producto
  if (!product) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Producto no encontrado</h2>
        <button onClick={() => navigate('/')}>
          Volver al catálogo
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} agregado al carrito!`);
  };

  return (
    <div className="product-detail">
      
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Volver
      </button>

      <div className="product-detail-container">

        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-detail-info">
          <h2>{product.name}</h2>
          <p className="category">{product.category}</p>
          <p className="description">{product.description}</p>

          <h3 className="price">
            S/ {product.price.toFixed(2)}
          </h3>

          <p className="stock">
            Stock: {product.stock}
          </p>

          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            {product.stock > 0 ? 'Agregar al carrito' : 'Sin stock'}
          </button>
        </div>

      </div>
    </div>
  );
};