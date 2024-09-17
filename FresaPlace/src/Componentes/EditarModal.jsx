import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';







const EditarModal = ({ show, CerrarModal, putProductos, onSave }) => {
    const [nuevoNombre, setNuevoNombre] = useState(putProductos?.nombre || "");
    const [nuevoPrecio, setNuevoPrecio] = useState(putProductos?.precio || "")
    const [nuevaDescripcion, setNuevaDescripcion] = useState(putProductos?.descripcion || "");
    const [nuevaImagen, setNuevaImagen] = useState(putProductos?.imagen || "");

    useEffect(() => {



        // Cuando putProductos cambie, actualiza los valores del estado
        setNuevoNombre(putProductos?.nombre || "");
        setNuevoPrecio(putProductos?.precio || "");
        setNuevaDescripcion(putProductos?.descripcion || "");
        setNuevaImagen(putProductos?.imagen || "");
    }, [putProductos]);

    const GuardarCambios = () => {
        if (nuevoNombre && nuevaDescripcion && nuevaImagen) {
            onSave({ ...putProductos, nombre: nuevoNombre, descripcion: nuevaDescripcion, imagen: nuevaImagen });
            CerrarModal();
        }
    };

    return (
        <Modal show={show} onHide={CerrarModal}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formNombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Edita el nombre del producto"
                            value={nuevoNombre}
                            onChange={(e) => setNuevoNombre(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formDescripcion">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Edita la descripción del producto"
                            value={nuevaDescripcion}
                            onChange={(e) => setNuevaDescripcion(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formImagen">
                        <Form.Label>Imagen URL</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Edita la URL de la imagen"
                            value={nuevaImagen}
                            onChange={(e) => setNuevaImagen(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={CerrarModal}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={GuardarCambios}>
                    Guardar cambios
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditarModal;
