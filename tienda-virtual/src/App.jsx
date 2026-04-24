import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { ProductCatalog } from './components/ProductCatalog'
import { Cart } from './components/Cart'
import { Checkout } from './components/Checkout'
import { CartProvider } from './context/CartContext'

function App() {
  const [showCart, setShowCart] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)

  const handleCartClick = () => {
    setShowCart(true)
  }

  const handleCheckout = () => {
    setShowCart(false)
    setShowCheckout(true)
  }

  const handleCloseModal = () => {
    setShowCart(false)
    setShowCheckout(false)
  }

  const handleOrderComplete = () => {
    setShowCheckout(false)
  }

  return (
    <CartProvider>
      <div className="app">
        <Navbar onCartClick={handleCartClick} />
        
        <main className="main-content">
          <section className="hero-section">
            <h1>Bienvenido a TiendaVirtual</h1>
            <p>Descubre los mejores productos electrónicos del mercado</p>
          </section>
          
          <ProductCatalog />
        </main>

        {showCart && (
          <Cart 
            onCheckout={handleCheckout}
            onClose={handleCloseModal}
          />
        )}

        {showCheckout && (
          <Checkout 
            onClose={handleCloseModal}
            onOrderComplete={handleOrderComplete}
          />
        )}

        <footer className="footer">
          <p>&copy; 2024 TiendaVirtual. Todos los derechos reservados.</p>
        </footer>
      </div>
    </CartProvider>
  )
}

export default App
