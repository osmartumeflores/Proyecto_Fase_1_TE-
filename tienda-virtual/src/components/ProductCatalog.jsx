import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';
import './ProductCatalog.css';

export const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', ...new Set(products.map(p => p.category))];

  const filteredProducts = selectedCategory === 'Todos' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="catalog-container">
      <h2>Catálogo de Productos</h2>
      
      <div className="category-filter">
        <h3>Filtrar por categoría:</h3>
        <div className="category-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No hay productos en esta categoría</p>
        )}
      </div>
    </div>
  );
};
