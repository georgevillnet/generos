import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { getGeneros } from '../controllers/apiController';
import '../App.css';

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
    
    
    <div className="generoscontainer">
      <h1 className="titulogeneros">Géneros</h1>
      
      <div className="cardcontainer">
        {genres.map((genre) => (
          <div className="cards" key={genre.id}>
            <h3 className="cardtitle">{genre.nombreGenero}</h3>
            <img src={genre.urlImagen} alt={genre.nombreGenero} className="cardimage" />
            <button className="modifybutton">Modificar</button>
            <button className="deletebutton">Eliminar</button>
          </div>
        ))}
      </div>
      
      <button className="createbutton" onClick={handleSelectTab}>Crear nuevo género</button>
      
      
    </div>
        </>
  );
};

export default GenerosCard;
