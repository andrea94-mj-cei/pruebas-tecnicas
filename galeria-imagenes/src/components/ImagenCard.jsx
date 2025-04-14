import { useState } from 'react';
import '@/css/ImagenCard.css';

const ImagenCard = ({ image }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`image-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="image-container" onClick={toggleExpand}>
        <img 
          src={image.thumbUrl} 
          alt={image.title} 
          className="image-thumbnail"
          loading="lazy"
        />
        <div className="image-overlay">
          <span className="image-title">{image.title || 'Sin título'}</span>
        </div>
      </div>
      
      {isExpanded && (
        <div className="modal-overlay" onClick={toggleExpand}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={toggleExpand}>×</button>
            <img 
              src={image.url} 
              alt={image.title} 
              className="full-image"
            />
            <h3 className="modal-title">{image.title || 'Sin título'}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagenCard;