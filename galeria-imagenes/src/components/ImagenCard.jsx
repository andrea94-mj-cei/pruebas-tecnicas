
import { useState } from 'react';
import '@/css/ImagenCard.css';

const ImagenCard = ({ image }) => {
  const [showTitle, setShowTitle] = useState(false);
  
  const toggleTitle = () => {
    setShowTitle(!showTitle);
  };

  return (
    <div className="image-card">
      <div 
        className={`image-container ${showTitle ? 'show-title' : ''}`} onClick={toggleTitle}>
        <img src={image.thumbUrl} alt={image.title} className="image-thumbnail" loading="lazy"/>
        <div className={`image-overlay ${showTitle ? 'visible' : ''}`}>
          <span className="image-title">{image.title || 'Sin título'}</span>
        </div>
      </div>
    </div>
  );
};

export default ImagenCard;