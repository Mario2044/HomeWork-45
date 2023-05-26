import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Photo() {
  const [photo, setPhoto] = useState(null);
  const { photoId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
      .then(response => response.json())
      .then(data => setPhoto(data));
  }, [photoId]);

  return (
    <div>
      <h1>Фото</h1>
      {photo ? (
        <div>
          <img src={photo.url} alt={photo.title} />
          <p>{photo.title}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Photo;