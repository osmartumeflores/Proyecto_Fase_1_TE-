import './App.css'
import { Navbar } from './components/Navbar'
import { ProductCatalog } from './components/ProductCatalog'
import { Cart } from './components/Cart'
import { Checkout } from './components/Checkout'
import { ProductDetail } from './components/ProductDetail'
import { CartProvider } from './context/CartContext'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />

        <main className="main-content">

          <Routes>

            {/* HOME */}
            <Route path="/" element={
              <>
                <section className="hero-section">
                  <h1>Bienvenido a TiendaVirtual</h1>
                  <p>Descubre los mejores productos electrónicos del mercado</p>
                </section>

                <ProductCatalog />
              </>
            } />

            {/* DETALLE */}
            <Route path="/product/:id" element={<ProductDetail />} />

            {/* CARRITO */}
            <Route path="/cart" element={<Cart />} />

            {/* CHECKOUT */}
            <Route path="/checkout" element={<Checkout />} />

          </Routes>

        </main>

        <footer className="footer">
          <p>&copy; 2024 TiendaVirtual. Todos los derechos reservados.</p>
        </footer>
      </div>
    </CartProvider>
  )
}

export default App