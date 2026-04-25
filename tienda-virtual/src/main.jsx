import { StrictMode } from 'react' // activa modo estricto para detectar errores
import { createRoot } from 'react-dom/client' // crea el root de React 18
import { BrowserRouter } from 'react-router-dom' // habilita rutas en la app
import './index.css' // importa estilos globales
import App from './App.jsx' // componente principal

createRoot(document.getElementById('root')).render( // monta React en el div root
  <StrictMode> {/* activa validaciones extra en desarrollo */}
    <BrowserRouter>   {/* habilita navegación entre páginas (rutas) */}
      <App /> {/* componente principal de toda la app */}
    </BrowserRouter>
  </StrictMode>,
)