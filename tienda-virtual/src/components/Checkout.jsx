// Importa React y useState para manejar el formulario
import React, { useState } from 'react';

// Importa funciones del carrito
import { useCart } from '../context/CartContext';

// Importa navegación
import { useNavigate } from 'react-router-dom';

// Importa estilos
import './Checkout.css';

// Componente de pago
export const Checkout = () => {

  // Obtiene total y función para limpiar carrito
  const { getTotalPrice, clearCart } = useCart();

  // Total a pagar
  const totalPrice = getTotalPrice();

  // Navegación entre páginas
  const navigate = useNavigate();

  // Estado del formulario
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  // Estado para simular proceso de pago
  const [isProcessing, setIsProcessing] = useState(false);

  // Maneja cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Actualiza el campo correspondiente
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // evita recargar la página
    setIsProcessing(true); // activa estado de carga

    // Simula proceso de pago
    setTimeout(() => {
      alert('¡Orden completada exitosamente! Gracias por tu compra.');

      clearCart(); // limpia el carrito

      navigate('/'); // redirige al inicio
    }, 2000);
  };

  // Verifica si todos los campos están llenos
  const isFormValid = Object.values(formData).every(
    value => value.trim() !== ''
  );

  return (
    <div className="checkout-content">

      {/* Botón cerrar */}
      <button 
        className="close-btn" 
        onClick={() => navigate('/')}
      >
        ✕
      </button>

      <h2>Checkout - Procesar Pago</h2>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="checkout-form">

        {/* Sección de envío */}
        <section className="form-section">
          <h3>Información de Envío</h3>

          <input 
            type="text" 
            name="fullName" 
            placeholder="Nombre Completo" 
            value={formData.fullName} 
            onChange={handleInputChange} 
            required 
          />

          <input 
            type="email" 
            name="email" 
            placeholder="Correo Electrónico" 
            value={formData.email} 
            onChange={handleInputChange} 
            required 
          />

          <input 
            type="tel" 
            name="phone" 
            placeholder="Teléfono" 
            value={formData.phone} 
            onChange={handleInputChange} 
            required 
          />

          <input 
            type="text" 
            name="address" 
            placeholder="Dirección" 
            value={formData.address} 
            onChange={handleInputChange} 
            required 
          />

          {/* Fila de 2 inputs */}
          <div className="form-row">
            <input 
              type="text" 
              name="city" 
              placeholder="Ciudad" 
              value={formData.city} 
              onChange={handleInputChange} 
              required 
            />

            <input 
              type="text" 
              name="zipCode" 
              placeholder="Código Postal" 
              value={formData.zipCode} 
              onChange={handleInputChange} 
              required 
            />
          </div>
        </section>

        {/* Sección de pago */}
        <section className="form-section">
          <h3>Información de Pago</h3>

          <input 
            type="text" 
            name="cardNumber" 
            placeholder="Número de Tarjeta" 
            value={formData.cardNumber} 
            onChange={handleInputChange} 
            required 
          />

          <div className="form-row">
            <input 
              type="text" 
              name="expiryDate" 
              placeholder="MM/YY" 
              value={formData.expiryDate} 
              onChange={handleInputChange} 
              required 
            />

            <input 
              type="text" 
              name="cvv" 
              placeholder="CVV" 
              value={formData.cvv} 
              onChange={handleInputChange} 
              required 
            />
          </div>
        </section>

        {/* Resumen */}
        <div className="order-summary">
          <h3>Resumen de Orden</h3>

          <div className="summary-item">
            <span>Total a Pagar:</span>
            <span className="total-amount">
              S/ {totalPrice.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Botón pagar */}
        <button 
          type="submit" 
          className="pay-btn" 
          disabled={!isFormValid || isProcessing}
        >
          {isProcessing 
            ? 'Procesando...' 
            : `Pagar S/ ${totalPrice.toFixed(2)}`
          }
        </button>

        {/* Aviso */}
        <p className="demo-notice">
          Esta es una tienda de demostración. Los datos no se guardarán.
        </p>
      </form>
    </div>
  );
};