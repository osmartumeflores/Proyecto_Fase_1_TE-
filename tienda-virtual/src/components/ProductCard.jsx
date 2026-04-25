import React from 'react'; // Importa React
import { useCart } from '../context/CartContext'; // Hook para manejar el carrito
import { Link } from 'react-router-dom'; // Permite navegar entre rutas
import './ProductCard.css'; // Estilos del componente

// Componente que representa una tarjeta de producto
export const ProductCard = ({ product }) => {

  // Obtiene la función para agregar productos al carrito desde el contexto
  const { addToCart } = useCart();

  // Función que se ejecuta al hacer clic en el botón "Añadir al carrito"
  const handleAddToCart = () => {
    addToCart(product); // Agrega el producto al carrito
    alert(`${product.name} agregado al carrito!`); // Muestra mensaje al usuario
  };

  return (
    // Contenedor principal de la tarjeta
    <div className="product-card">

      {/* Imagen del producto (clickeable para ir al detalle) */}
      <Link to={`/product/${product.id}`}>
        <img 
          src={product.image} // Ruta de la imagen
          alt={product.name} // Texto alternativo
          className="product-image" // Clase CSS
        />
      </Link>

      {/* Contenedor de la información del producto */}
      <div className="product-info">

        {/* Nombre del producto (clickeable) */}
        <Link to={`/product/${product.id}`} className="product-link">
          <h3>{product.name}</h3> {/* Muestra el nombre */}
        </Link>

        {/* Categoría del producto */}
        <p className="product-category">
          {product.category}
        </p>

        {/* Descripción del producto */}
        <p className="product-description">
          {product.description}
        </p>

        {/* Sección inferior que contiene precio y botón */}
        <div className="product-footer">

          {/* Precio formateado en soles */}
          <span className="product-price">
            S/ {product.price.toFixed(2)}
          </span>

          {/* Botón para agregar al carrito */}
          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart} // Evento click
            disabled={product.stock === 0} // Se desactiva si no hay stock
          >
            {/* Texto dinámico según el stock */}
            {product.stock > 0 ? 'Añadir al carrito' : 'Sin stock'}
          </button>

        </div>

        {/* Información de stock disponible */}
        <p className="product-stock">
          En stock: {product.stock}
        </p>

      </div>
    </div>
  );
};