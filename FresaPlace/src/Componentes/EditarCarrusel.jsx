import React from 'react';
import { Modal, Button } from 'react-bootstrap';




const EditarCarrusel = ({ show, CerrarModal, updateProducto }) => {
  return (
    <Modal show={show} onHide={CerrarModal}>
      <Modal.Header closeButton>
        <Modal.Title>{updateProducto?.nombre || 'Detalles del Producto'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Descripción:</strong> {updateProducto?.descripcion}</p>
        <p><strong>Precio:</strong> {updateProducto?.precio}</p>
        <img src={updateProducto?.imagen} alt={updateProducto?.nombre} style={{ width: '100%' }} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={CerrarModal}>
          Cerrar
        </Button>
        <Button variant="primary">
          Guardar cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditarCarrusel;
