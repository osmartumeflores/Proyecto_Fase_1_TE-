import React from 'react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

export const Navbar = ({ onCartClick }) => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>🛒 TiendaVirtual</h1>
        </div>
        <button className="cart-button" onClick={onCartClick}>
          🛍️ Carrito ({totalItems})
        </button>
      </div>
    </nav>
  );
};
