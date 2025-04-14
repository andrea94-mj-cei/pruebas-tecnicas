import { Outlet } from 'react-router';
import '@/css/Layout.css'

function Layout() {
  

  return (
    <>
    <div className="app-container">
      <header className="app-header">
        <div className="logo">FotoGalería</div>
        <nav className="main-nav">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="https://www.flickr.com/services/api/" target="_blank" rel="noopener noreferrer">API Flickr</a></li>
          </ul>
        </nav>
      </header>
      
      <main className="app-content">
        <Outlet />
      </main>
      
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} - Galería de Imágenes - Prueba Técnica</p>
      </footer>
    </div>
    </>
  );
}

export default Layout
