import { useState } from "react";
import { addGeneros } from "../controllers/apiController";
import { useNavigate } from "react-router-dom";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import '../App.css';

function CrearGenero() {
    const [nombreGenero, setNombreGenero] = useState("");
    const [urlImagen, setUrlImagen] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addGeneros({ nombreGenero, urlImagen })
            .then(() => navigate('/'))
            .catch((error) => console.error('Error al crear un nuevo género', error));
    }

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
                <Form.Label>Url de la imagen</Form.Label>
                <Form.Control
                    type="text"
                    value={urlImagen}
                    onChange={(e) => setUrlImagen(e.target.value)}
                    required
                />
            </Form.Group>

            <Button variant="dark" type="submit" className="custom-button">
                Crear
            </Button>
        </Form>
    </Container>
    )
}

export default CrearGenero;
