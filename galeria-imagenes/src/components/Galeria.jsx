import { useState, useEffect } from 'react';
import ImagenCard from './ImagenCard';
import '@/css/Galeria.css';

const Galeria = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('nature');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchImages();
  }, [searchTerm]);

  const fetchImages = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Variables de entorno para la API de Flickr
      const apiKey = import.meta.env.VITE_API_KEY;
      const apiUrl = import.meta.env.VITE_API_URL;
      
      const url = `${apiUrl}${apiKey}&text=${searchTerm}&format=json&nojsoncallback=1&per_page=10&safe_search=1`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('No se pudieron cargar las imágenes');
      }
      
      const data = await response.json();
      
      if (data.stat === 'fail') {
        // Mensaje de error en castellano
        const mensajeError = 'Error en la API de Flickr: ' + (data.message || 'Error desconocido');
        throw new Error(mensajeError);
      }
      
      
      const fetchedImages = data.photos.photo.map(photo => ({
        id: photo.id,
        title: photo.title,
        url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
        thumbUrl: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`,
      }));
      
      setImages(fetchedImages);
      
      // Si no hay imágenes pero no hubo error de API
      if (fetchedImages.length === 0) {
        setError('No se encontraron imágenes para esta búsqueda');
      }
      
    } catch (err) {
      console.error('Error en la carga de imágenes:', err);
      
      setError(err.message || 'Error desconocido al cargar las imágenes');
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchImages();
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Galería de Imágenes</h1>
      
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Buscar imágenes..."
          className="search-input"
        />
        <button type="submit" className="search-button">Buscar</button>
      </form>
      
      {loading && <div className="loading">Cargando imágenes...</div>}
      {error && <div className="error">Error: {error}</div>}
      
      <div className="gallery-grid">
        {images.map(image => (
          <ImagenCard key={image.id} image={image} />
        ))}
      </div>
      
      {images.length === 0 && !loading && !error && (
        <div className="no-results">No se encontraron imágenes para esta búsqueda</div>
      )}
      
    </div>
  );
};

export default Galeria;