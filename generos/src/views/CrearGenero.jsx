import { useState } from "react";
import { addGeneros } from "../controllers/apiController";
import { useNavigate } from "react-router-dom";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import '../App.css';

function CrearGenero() {
    const [nombreGenero, setNombreGenero] = useState("");
    const [urlImagen, setUrlImagen] = useState("");
    const [selectedImage, setSelectedImage] = useState(null); // Cambiar inicialización a null
    const navigate = useNavigate();

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
                setUrlImagen(imageBase64);

            } catch (error) {
                console.error("Error al convertir la imagen a base64", error);
            }
        }
    };

    // Dentro del handleSubmit en CrearGenero
    // En el formulario de React
    const handleSubmit = (e) => {
        e.preventDefault();
        addGeneros({ nombreGenero, ImagenBase64: urlImagen })
            .then(() => navigate('/'))
            .catch((error) => console.error('Error al crear un nuevo género', error));
    };

    return (
        <Container className="text-center">
            <h1 className="text-center">Crear Nuevo Género</h1>
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
                    {selectedImage && (
                        <div>
                            <img
                                alt="not found"
                                width={"250px"}
                                src={URL.createObjectURL(selectedImage)}
                            />
                            <br /> <br />
                            <button onClick={() => setSelectedImage(null)}>Remove</button>
                        </div>
                    )}

                    <input
                        type="file"
                        name="myImage"
                        onChange={handleImageChange} // Usa la nueva función handleImageChange
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Crear
                </Button>
            </Form>
        </Container>
    )
}

export default CrearGenero;
