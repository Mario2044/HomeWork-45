import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function Album() {
  const [photos, setPhotos] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(data => setPhotos(data));
  }, [userId]);

  return (
    <div>
      <h1>Альбом користувача {userId}</h1>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <Link to={`/photos/${photo.id}`}>{photo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Album;