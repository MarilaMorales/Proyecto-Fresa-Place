
import React from 'react';
import { Modal, Button, Card } from 'react-bootstrap';

const ModalResults = ({ show, handleClose, results }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Resultados de Búsqueda</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {results.length > 0 ? (
                    results.map((producto) => (
                        <Card key={producto.id} style={{ marginBottom: '10px' }}>
                            <Card.Img variant="top" src={producto.imagen} /> 
                            <Card.Body>
                                <Card.Title>{producto.nombre}</Card.Title>
                                <Card.Text>{producto.descripcion}</Card.Text>
                             
                            </Card.Body>
                        </Card>
                    ))
                ) : (
                    <p>No se encontraron resultados.</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalResults;
