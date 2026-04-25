import './App.css'

// Componentes de la interfaz
import { Navbar } from './components/Navbar'
import { ProductCatalog } from './components/ProductCatalog'
import { Cart } from './components/Cart'
import { Checkout } from './components/Checkout'
import { ProductDetail } from './components/ProductDetail'

// Contexto del carrito (manejo global del estado)
import { CartProvider } from './context/CartContext'

// Manejo de rutas de la aplicación
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    // Proveedor global del carrito (permite usar el carrito en toda la app)
    <CartProvider>

      {/* Contenedor principal de la aplicación */}
      <div className="app">

        {/* Barra de navegación superior */}
        <Navbar />

        {/* Contenido principal */}
        <main className="main-content">

          <Routes>

            {/* Página principal (Home) */}
            <Route
              path="/"
              element={
                <>
                  {/* Sección de bienvenida */}
                  <section className="hero-section">
                    <h1>Bienvenido a NovaStore</h1>
                    <p>Descubre los mejores productos electrónicos del mercado a tu disposición</p>
                  </section>

                  {/* Catálogo de productos */}
                  <ProductCatalog />
                </>
              }
            />

            {/* Página de detalle de producto (por ID) */}
            <Route path="/product/:id" element={<ProductDetail />} />

            {/* Página del carrito de compras */}
            <Route path="/cart" element={<Cart />} />

            {/* Página de pago / checkout */}
            <Route path="/checkout" element={<Checkout />} />

          </Routes>

        </main>

        {/* Pie de página */}
        <footer className="footer">
          <p>&copy; 2024 TiendaVirtual. Todos los derechos reservados.</p>
        </footer>

      </div>
    </CartProvider>
  )
}

export default App