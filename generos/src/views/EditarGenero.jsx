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
        <>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Row>
                            <Col md={8}>
                                <Form.Label>Nombre del género</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={nombreGenero}
                                    onChange={(e) => setNombreGenero(e.target.value)}
                                    required
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Label>Url de la imagen </Form.Label>
                                <Form.Control
                                    type="text"
                                    value={urlImagen}
                                    onChange={(e) => setUrlImagen(e.target.value)}
                                    required
                                />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Crear
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default EditarGenero;