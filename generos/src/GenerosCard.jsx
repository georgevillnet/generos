import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GenreCard = () => {
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();

  // Obtener géneros desde la API
  useEffect(() => {
    fetch('http://localhost:5245/api/genres')
      .then(response => response.json())
      .then(data => setGenres(data))
      .catch(error => console.error('Error fetching genres:', error));
  }, []);

  // Función para eliminar un género
  const handleDelete = (id) => {
    fetch(`http://localhost:5245/api/genres/${id}`, {
      method: 'DELETE',
    })
      .then(() => setGenres(genres.filter(genre => genre.id !== id)))
      .catch(error => console.error('Error deleting genre:', error));
  };

  // Navegar a la página de creación de género
  const goToCreateGenre = () => {
    navigate('/create-genre');
  };

  return (
    <div>
      <h1>Lista de Géneros Musicales</h1>
      <div className="genre-list">
        {genres.map((genre) => (
          <div key={genre.id} className="genre-card">
            <h2>{genre.name}</h2>
            <button onClick={() => navigate(`/edit-genre/${genre.id}`)}>Editar</button>
            <button onClick={() => handleDelete(genre.id)}>Eliminar</button>
          </div>
        ))}
      </div>

      <button onClick={goToCreateGenre}>Crear Género</button>
    </div>
  );
};

export default GenerosCard;
