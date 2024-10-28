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

  const handleCreate = () => {
    console.log("has pulsado en crear")
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
            <img src={`data:image/jpeg;base64,${genre.imagen}`} alt={genre.nombreGenero} className="cardimage" />
            <button className="modifybutton" onClick={() => handleEdit(genre)}>Modificar</button>
            <button className="deletebutton" onClick={() => handleDelete(genre.id)}>Eliminar</button>
          </div>
        ))}
      </div>
      
      <button className="createbutton" onClick={handleCreate}>Crear nuevo género</button>
    
    </div>

    <Outlet />
        </>
  );

};

export default MostrarGeneros;
