import { Link } from 'react-router';

const Header = () => {
    return ( 
        <header className="app-header">
        <div className="logo">FotoGalería</div>
        <nav className="main-nav">
          <ul>
            <Link href="/"><li>Inicio</li></Link>
            <li><a href="https://www.flickr.com/services/api/" target="_blank" rel="noopener noreferrer">API Flickr</a></li>
          </ul>
        </nav>
      </header>
     );
}
 
export default Header;