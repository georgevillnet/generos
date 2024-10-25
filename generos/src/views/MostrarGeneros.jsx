import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { deleteGenero, getGeneros } from '../controllers/apiController';
import '../App.css';

const MostrarGeneros = () => {
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();

  const recogerGeneros = () => {
    getGeneros()
      .then(data => setGenres(data))
      .catch(error => console.error('Error fetching genres:', error));
  }

  useEffect(() => {
    recogerGeneros();
  }, []);

  const handleCreate = (key) => {
    navigate('/crearGenero');
  };

  const handleDelete = (id) => {
    deleteGenero(id)
      .then(() => recogerGeneros())
      .catch((error) => console.error('Error al crear un nuevo género', error));
  }

  const handleEdit = (genero) => {
    navigate('/modificarGenero', { state: { selectedGenero: genero } })
  }

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

export default MostrarGeneros;
