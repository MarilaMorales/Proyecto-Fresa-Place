import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SearchResultsModal = ({ show, handleClose, results }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Resultados de Búsqueda</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {results.length > 0 ? (
                    <ul>
                        {results.map((producto) => (
                            <li key={producto.id}>{producto.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No se encontraron resultados.</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SearchResultsModal;
