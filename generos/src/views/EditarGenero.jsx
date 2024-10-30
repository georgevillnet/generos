import { useLocation, useNavigate } from 'react-router-dom';
import { updateGenero } from '../controllers/apiController';
import { Form, Container, Button } from "react-bootstrap";
import { useState, useEffect } from 'react';

function EditarGenero() {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedGenero } = location.state || {};
    const defaultIdGenero = selectedGenero.id;
    const defaultNombreGenero = selectedGenero.nombreGenero;
    const defaultImagen = selectedGenero.imagen; // Asumiendo que esta es la propiedad correcta
    const [nombreGenero, setNombreGenero] = useState(defaultNombreGenero);
    const [urlImagen, setUrlImagen] = useState(defaultImagen ? defaultImagen : ""); // Inicializar con la imagen existente
    const [selectedImage, setSelectedImage] = useState(null);

    // Función para convertir la imagen a base64
    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
            try {
                const base64String = await convertToBase64(file);
                const imageBase64 = base64String.split(',')[1]; // Esto eliminará el prefijo
                setUrlImagen(imageBase64); // Guardar el base64 en el estado

            } catch (error) {
                console.error("Error al convertir la imagen a base64", error);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const genero = { NombreGenero: nombreGenero, ImagenBase64: urlImagen }; // Usar ImagenBase64 para la API

        updateGenero(defaultIdGenero, genero)
            .then(() => navigate('/'))
            .catch((error) => console.error('Error al actualizar género', error));
    };

    return (
        <Container className="text-center">
            <h1 className="text-center">Modificar Género</h1>
            <Form onSubmit={handleSubmit} className="form-container">
                <Form.Group className="mb-3" controlId="formNombreGenero">
                    <Form.Label>Nombre del género</Form.Label>
                    <Form.Control
                        type="text"
                        value={nombreGenero}
                        onChange={(e) => setNombreGenero(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formUrlImagen">
                    <Form.Label>Url de la imagen</Form.Label>
                    {selectedImage && (
                        <div>
                            <img
                                alt="not found"
                                width={"250px"}
                                src={URL.createObjectURL(selectedImage)}
                            />
                            <br /> <br />
                            <button onClick={() => { setSelectedImage(null); setUrlImagen(""); }}>Remove</button>
                        </div>
                    )}

                    <input
                        type="file"
                        name="myImage"
                        onChange={handleImageChange} // Usa la nueva función handleImageChange
                    />
                </Form.Group>
                <Button variant="dark" type="submit" className="custom-button">
                    Modificar
                </Button>
            </Form>
        </Container>
    )
}

export default EditarGenero;