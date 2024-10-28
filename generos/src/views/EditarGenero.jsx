import { useLocation, useNavigate } from 'react-router-dom';
import { updateGenero } from '../controllers/apiController';
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { useState } from 'react';

function EditarGenero() {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedGenero } = location.state || {};
    const defaultIdGenero = selectedGenero.id;
    const defaultNombreGenero = selectedGenero.nombreGenero;
    const defaultUrlImagen = selectedGenero.urlImagen;
    const [nombreGenero, setNombreGenero] = useState(defaultNombreGenero)
    const [urlImagen, setUrlImagen] = useState(defaultUrlImagen)

    const handleSubmit = (e) => {
        e.preventDefault();
        const genero = { NombreGenero: nombreGenero, UrlImagen: urlImagen };

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
                    <Form.Control
                        type="text"
                        value={urlImagen}
                        onChange={(e) => setUrlImagen(e.target.value)}
                        required
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