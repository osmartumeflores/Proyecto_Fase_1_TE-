import React, { createContext, useContext, useState } from 'react'; 
// Importa herramientas de React

// Crea el contexto del carrito
const CartContext = createContext();

// Hook personalizado para usar el carrito
export const useCart = () => {
  const context = useContext(CartContext); // Accede al contexto

  // Validación: asegura que se use dentro del provider
  if (!context) {
    throw new Error('useCart debe usarse dentro de CartProvider');
  }

  return context; // Devuelve el contexto
};

// Componente proveedor que envuelve la app
export const CartProvider = ({ children }) => {

  // Estado que guarda los productos del carrito
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCartItems(prevItems => {

      // Busca si el producto ya existe en el carrito
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        // Si existe, aumenta la cantidad
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Si no existe, lo agrega con cantidad 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    setCartItems(prevItems => 
      prevItems.filter(item => item.id !== productId) // Filtra y elimina
    );
  };

  // Función para actualizar la cantidad de un producto
  const updateQuantity = (productId, quantity) => {

    // Si la cantidad es 0 o menor, elimina el producto
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      // Si no, actualiza la cantidad
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId
            ? { ...item, quantity } // Nueva cantidad
            : item
        )
      );
    }
  };

  // Calcula el precio total del carrito
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + (item.price * item.quantity), 
      0
    );
  };

  // Calcula la cantidad total de productos
  const getTotalItems = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity, 
      0
    );
  };

  // Vacía completamente el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Valores que se compartirán en toda la app
  const value = {
    cartItems, // Lista de productos
    addToCart, // Agregar producto
    removeFromCart, // Eliminar producto
    updateQuantity, // Actualizar cantidad
    getTotalPrice, // Total en dinero
    getTotalItems, // Total de items
    clearCart // Vaciar carrito
  };

  return (
    // Proveedor que envuelve los componentes hijos
    <CartContext.Provider value={value}>
      {children} {/* Componentes hijos */}
    </CartContext.Provider>
  );
};