import React from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

export const Cart = ({ onCheckout, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();

  if (cartItems.length === 0) {
    return (
      <div className="cart-modal">
        <div className="cart-content">
          <button className="close-btn" onClick={onClose}>✕</button>
          <h2>Carrito de Compras</h2>
          <p className="empty-cart">Tu carrito está vacío</p>
          <button className="close-cart-btn" onClick={onClose}>Continuar comprando</button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-modal">
      <div className="cart-content">
        <button className="close-btn" onClick={onClose}>✕</button>
        <h2>Carrito de Compras</h2>
        
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <div className="cart-item-quantity">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <div className="cart-item-subtotal">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button 
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Envío:</span>
            <span>Gratis</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <div className="cart-actions">
          <button className="checkout-btn" onClick={onCheckout}>
            Proceder al Pago
          </button>
          <button className="continue-shopping-btn" onClick={onClose}>
            Continuar Comprando
          </button>
        </div>
      </div>
    </div>
  );
};
