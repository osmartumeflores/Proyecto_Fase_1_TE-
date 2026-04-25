// Importa React
import React from 'react';

// Importa funciones del carrito (Context)
import { useCart } from '../context/CartContext';

// Importa navegación entre páginas
import { useNavigate } from 'react-router-dom';

// Importa estilos
import './Cart.css';

// Componente del carrito
export const Cart = () => {

  // Datos y funciones del carrito
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  // Total del carrito
  const totalPrice = getTotalPrice();

  // Navegación
  const navigate = useNavigate();

  // Si el carrito está vacío
  if (cartItems.length === 0) {
    return (
      <div className="cart-content">
        <h2>Carrito de Compras</h2>

        <div className="empty-cart">
          <p>Tu carrito está vacío</p>

          {/* Botón para volver a la tienda */}
          <button 
            className="continue-shopping-btn" 
            onClick={() => navigate('/')}
          >
            Volver a la tienda
          </button>
        </div>
      </div>
    );
  }

  // Si hay productos en el carrito
  return (
    <div className="cart-content">
      <h2>Carrito de Compras</h2>
      
      {/* Lista de productos */}
      <div className="cart-items">

        {/* Recorre cada producto */}
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">

            {/* Imagen */}
            <img src={item.image} alt={item.name} className="cart-item-image" />
            
            {/* Información */}
            <div className="cart-item-info">
              <h4>{item.name}</h4>
              <p>S/ {item.price.toFixed(2)}</p>
            </div>

            {/* Cantidad */}
            <div className="cart-item-quantity">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>

            {/* Subtotal */}
            <div className="cart-item-subtotal">
              S/ {(item.price * item.quantity).toFixed(2)}
            </div>

            {/* Eliminar producto */}
            <button 
              className="remove-btn" 
              onClick={() => removeFromCart(item.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Resumen */}
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

      {/* Botones */}
      <div className="cart-actions">
        <button onClick={() => navigate('/checkout')}>
          Proceder al Pago
        </button>

        <button onClick={() => navigate('/')}>
          Continuar Comprando
        </button>
      </div>
    </div>
  );
};