import { Outlet } from 'react-router';
import '@/css/Layout.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function Layout() {
  

  return (
    <>
    <div className="app-container">
      <header>
        <Header />
      </header>

      <main className="app-content">
        <Outlet />
      </main>
      
      <footer>
        <Footer />
      </footer>
    </div>
    </>
  );
}

export default Layout
