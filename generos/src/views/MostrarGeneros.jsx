import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { getGeneros } from '../controllers/apiController';
import '../Card.css';

const GenerosCard = () => {
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getGeneros()
      .then(data => setGenres(data))
      .catch(error => console.error('Error fetching genres:', error));
  }, []);

  const handleSelectTab = (key) => {
    navigate('/crearGenero');
  };

  return (
    <>
    {genres.map((genre) => (
      <div className="card" key={genre.id}>
      <img src={genre.urlImagen} alt={genre.nombreGenero} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{genre.nombreGenero}</h3>
      </div>
    </div>
    ))}
      <button onClick={handleSelectTab}>Crear nuevo género</button>

    <Outlet />
    </>
  );
};

export default GenerosCard;
