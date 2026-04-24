import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Checkout.css';

export const Checkout = ({ onClose, onOrderComplete }) => {
  const { getTotalPrice, clearCart } = useCart();
  const totalPrice = getTotalPrice();

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

  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simular procesamiento de pago
    setTimeout(() => {
      alert('¡Orden completada exitosamente! Gracias por tu compra.');
      clearCart();
      onOrderComplete();
      onClose();
    }, 2000);
  };

  const isFormValid = Object.values(formData).every(value => value.trim() !== '');

  return (
    <div className="checkout-modal">
      <div className="checkout-content">
        <button className="close-btn" onClick={onClose}>✕</button>
        <h2>Checkout - Procesar Pago</h2>

        <form onSubmit={handleSubmit} className="checkout-form">
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

          <section className="form-section">
            <h3>Información de Pago</h3>
            <input
              type="text"
              name="cardNumber"
              placeholder="Número de Tarjeta (demo: 4532XXXXXXXXXXXX)"
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

          <div className="order-summary">
            <h3>Resumen de Orden</h3>
            <div className="summary-item">
              <span>Total a Pagar:</span>
              <span className="total-amount">${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <button
            type="submit"
            className="pay-btn"
            disabled={!isFormValid || isProcessing}
          >
            {isProcessing ? 'Procesando...' : `Pagar $${totalPrice.toFixed(2)}`}
          </button>
          <p className="demo-notice">
            Esta es una tienda de demostración. Los datos no se guardarán.
          </p>
        </form>
      </div>
    </div>
  );
};
