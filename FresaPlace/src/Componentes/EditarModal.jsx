import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


const EditarModal = ({ show, CerrarModal, updateProducto, onSave }) => {
    const [nuevoNombre, setNuevoNombre] = useState('');
    const [nuevoPrecio, setNuevoPrecio] = useState('');
    const [nuevaDescripcion, setNuevaDescripcion] = useState('');
    const [nuevaImagen, setNuevaImagen] = useState('');
  
    useEffect(() => {
      if (updateProducto) {
        setNuevoNombre(updateProducto.nombre || '');
        setNuevoPrecio(updateProducto.precio || '');
        setNuevaDescripcion(updateProducto.descripcion || '');
        setNuevaImagen(updateProducto.imagen || '');
      }
    }, [updateProducto]);
  
    const GuardarCambios = () => {
      if (nuevoNombre && nuevaDescripcion && nuevaImagen) {
        if (typeof onSave === 'function') {
          onSave({ ...updateProducto, nombre: nuevoNombre, precio: nuevoPrecio, descripcion: nuevaDescripcion, imagen: nuevaImagen });
        } else {
          console.error('onSave is not a function');
        }
        CerrarModal();
      }
    };

// const EditarModal = ({ show, CerrarModal, updateProducto, onSave }) => {
//     const [nuevoNombre, setNuevoNombre] = useState(updateProducto?.nombre || "");
//     const [nuevoPrecio, setNuevoPrecio] = useState(updateProducto?.precio || "")
//     const [nuevaDescripcion, setNuevaDescripcion] = useState(updateProducto?.descripcion || "");
//     const [nuevaImagen, setNuevaImagen] = useState(updateProducto?.imagen || "");

//     useEffect(() => {



//         // Cuando updateProducto cambie, actualiza los valores del estado
//         setNuevoNombre(updateProducto?.nombre || "");
//         setNuevoPrecio(updateProducto?.precio || "");
//         setNuevaDescripcion(updateProducto?.descripcion || "");
//         setNuevaImagen(updateProducto?.imagen || "");
//     }, [updateProducto]);

//     const GuardarCambios = () => {
//         if (nuevoNombre && nuevaDescripcion && nuevaImagen) {
//             onSave({ ...updateProducto, nombre: nuevoNombre, precio: nuevoPrecio, descripcion: nuevaDescripcion, imagen: nuevaImagen });
//             CerrarModal();
//         }
//     };

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
                    <Form.Group controlId="formPrecio">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder="Edita el precio del Producto"
                            value={nuevoPrecio}
                            onChange={(e) => setNuevoPrecio(e.target.value)}
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




