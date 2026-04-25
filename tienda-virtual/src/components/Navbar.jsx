// Importa React
import React from 'react';

// Importa función del carrito
import { useCart } from '../context/CartContext';

// Importa Link para navegación sin recargar
import { Link } from 'react-router-dom';

// Importa estilos
import './Navbar.css';

// Componente Navbar
export const Navbar = () => {

  // Obtiene la cantidad total de productos en el carrito
  const { getTotalItems } = useCart();

  // Guarda el total de items
  const totalItems = getTotalItems();

  return (
    <nav className="navbar">

      <div className="navbar-container">
        
        {/* Logo que redirige al inicio */}
        <div className="navbar-logo">
          <Link 
            to="/" 
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <h1>🛒 TiendaVirtual</h1>
          </Link>
        </div>

        {/* Botón del carrito con contador */}
        <Link to="/cart" className="cart-button">
          🛍️ Carrito ({totalItems})
        </Link>

      </div>
    </nav>
  );
};