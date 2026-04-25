import React from 'react'; // Importa React
import { useParams, useNavigate } from 'react-router-dom'; // Hooks para rutas
import { useCart } from '../context/CartContext'; // Contexto del carrito
import { products } from '../data/products'; // Lista de productos
import './ProductDetail.css'; // Estilos del componente

// Componente que muestra el detalle de un producto
export const ProductDetail = () => {

  // Obtiene el id desde la URL (/product/:id)
  const { id } = useParams();

  // Permite navegar entre rutas
  const navigate = useNavigate();

  // Función para agregar productos al carrito
  const { addToCart } = useCart();

  // Busca el producto por su id (conversión a string para evitar errores)
  const product = products.find(p => p.id.toString() === id);

  // Si no encuentra el producto, muestra mensaje
  if (!product) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Producto no encontrado</h2>

        {/* Botón para volver al catálogo */}
        <button onClick={() => navigate('/')}>
          Volver al catálogo
        </button>
      </div>
    );
  }

  // Función que se ejecuta al agregar al carrito
  const handleAddToCart = () => {
    addToCart(product); // Agrega el producto
    alert(`${product.name} agregado al carrito!`); // Mensaje
  };

  return (
    // Contenedor principal
    <div className="product-detail">
      
      {/* Botón para regresar al catálogo */}
      <button 
        className="back-btn" 
        onClick={() => navigate('/')}
      >
        ← Volver
      </button>

      {/* Contenedor del detalle */}
      <div className="product-detail-container">

        {/* Imagen del producto */}
        <div className="product-detail-image">
          <img 
            src={product.image} // Imagen
            alt={product.name} // Texto alternativo
          />
        </div>

        {/* Información del producto */}
        <div className="product-detail-info">

          {/* Nombre del producto */}
          <h2>{product.name}</h2>

          {/* Categoría */}
          <p className="category">
            {product.category}
          </p>

          {/* Descripción */}
          <p className="description">
            {product.description}
          </p>

          {/* Precio en soles */}
          <h3 className="price">
            S/ {product.price.toFixed(2)}
          </h3>

          {/* Stock disponible */}
          <p className="stock">
            Stock: {product.stock}
          </p>

          {/* Botón para agregar al carrito */}
          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart} // Evento click
            disabled={product.stock === 0} // Deshabilita si no hay stock
          >
            {/* Texto dinámico */}
            {product.stock > 0 ? 'Agregar al carrito' : 'Sin stock'}
          </button>

        </div>

      </div>
    </div>
  );
};