import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

export const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="cart-content">
        <h2>Carrito de Compras</h2>
        <div className="empty-cart">
          <p>Tu carrito está vacío</p>
          <button className="continue-shopping-btn" onClick={() => navigate('/')}>
            Volver a la tienda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-content">
      <h2>Carrito de Compras</h2>
      
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            
            <div className="cart-item-info">
              <h4>{item.name}</h4>
              <p>S/ {item.price.toFixed(2)}</p>
            </div>

            <div className="cart-item-quantity">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>

            <div className="cart-item-subtotal">
              S/ {(item.price * item.quantity).toFixed(2)}
            </div>

            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>S/ {totalPrice.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Envío:</span>
          <span style={{ color: '#22c55e' }}>Gratis</span>
        </div>
        <div className="summary-row total">
          <span>Total:</span>
          <span>S/ {totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <div className="cart-actions">
        <button className="checkout-btn" onClick={() => navigate('/checkout')}>
          Proceder al Pago
        </button>
        <button className="continue-shopping-btn" onClick={() => navigate('/')}>
          Continuar Comprando
        </button>
      </div>
    </div>
  );
};