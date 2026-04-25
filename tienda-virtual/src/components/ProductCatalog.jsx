import React, { useState } from 'react'; // Importa React y useState
import { ProductCard } from './ProductCard'; // Componente para cada producto
import { products } from '../data/products'; // Lista de productos
import './ProductCatalog.css'; // Estilos del catálogo

// Componente principal del catálogo
export const ProductCatalog = () => {

  // Estado para guardar la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Obtiene todas las categorías únicas + "Todos"
  const categories = ['Todos', ...new Set(products.map(p => p.category))];

  // Filtra productos según la categoría seleccionada
  const filteredProducts = selectedCategory === 'Todos' 
    ? products // Si es "Todos", muestra todo
    : products.filter(p => p.category === selectedCategory); // Si no, filtra

  return (
    // Contenedor principal
    <div className="catalog-container">

      {/* Título del catálogo */}
      <h2>Catálogo de Productos</h2>
      
      {/* Sección de filtros */}
      <div className="category-filter">
        <h3>Filtrar por categoría:</h3>

        {/* Botones de categorías */}
        <div className="category-buttons">
          {categories.map(category => (
            <button
              key={category} // Clave única
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`} 
              // Aplica estilo activo si está seleccionada
              onClick={() => setSelectedCategory(category)} // Cambia categoría
            >
              {category} {/* Nombre de la categoría */}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de productos */}
      <div className="products-grid">

        {/* Si hay productos, los muestra */}
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard 
              key={product.id} // Clave única por producto
              product={product} // Pasa el producto como prop
            />
          ))
        ) : (
          // Mensaje si no hay productos en la categoría
          <p>No hay productos en esta categoría</p>
        )}

      </div>
    </div>
  );
};