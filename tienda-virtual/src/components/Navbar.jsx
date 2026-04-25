import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom'; // 👈 IMPORTANTE
import './Navbar.css';

export const Navbar = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className="navbar-logo">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1>🛒 TiendaVirtual</h1>
          </Link>
        </div>

        <Link to="/cart" className="cart-button">
          🛍️ Carrito ({totalItems})
        </Link>

      </div>
    </nav>
  );
};