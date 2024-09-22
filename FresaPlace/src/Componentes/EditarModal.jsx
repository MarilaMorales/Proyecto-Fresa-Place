import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import imageUpload64 from '../Controller/Convertobase64'; // Importa la función








const EditarModal = ({ show, CerrarModal, updateProducto, guardaEditar }) => {
    const [nuevoNombre, setNuevoNombre] = useState("");
    const [nuevoPrecio, setNuevoPrecio] = useState("");
    const [nuevaDescripcion, setNuevaDescripcion] = useState("");
    const [nuevaImagen, setNuevaImagen] = useState("");




    useEffect(() => {
    
        if (updateProducto) {
            setNuevoNombre(updateProducto.nombre || "");
            setNuevoPrecio(updateProducto.precio || "");
            setNuevaDescripcion(updateProducto.descripcion || "");
            setNuevaImagen(updateProducto.imagen || "");
        }
    }, [updateProducto]);

    
    const GuardarCambios = () => {
        if (nuevoNombre && nuevaDescripcion && nuevaImagen) {
            const productoActualizado = {
                id: updateProducto.id,
                nombre: nuevoNombre,
                precio: nuevoPrecio,
                descripcion: nuevaDescripcion,
                imagen: nuevaImagen
            };
            guardaEditar(productoActualizado);
            CerrarModal();
        } else {
            console.log('Faltan campos por completar');
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
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control
                            type="file"
                            onChange={async (e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    try {
                                        const base64Image = await imageUpload64(file);
                                        setNuevaImagen(base64Image);
                                    } catch (error) {
                                        console.error('Error al cargar la imagen:', error);
                                    }
                                }
                            }}
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


























// import React, { useState, useEffect } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import imageUpload64 from '../Controller/Convertobase64';




// const EditarModal = ({ show, CerrarModal, updateProducto, guardaEditar }) => {
//     const [nuevoNombre, setNuevoNombre] = useState("");
//     const [nuevoPrecio, setNuevoPrecio] = useState("");
//     const [nuevaDescripcion, setNuevaDescripcion] = useState("");
//     const [nuevaImagen, setNuevaImagen] = useState("");

//     useEffect(() => {
//         if (updateProducto) {
//             if (updateProducto.nombre) {
//                 setNuevoNombre(updateProducto.nombre);
//             }
//             if (updateProducto.precio) {
//                 setNuevoPrecio(updateProducto.precio);
//             }
//             if (updateProducto.descripcion) {
//                 setNuevaDescripcion(updateProducto.descripcion);
//             }
//             if (updateProducto.imagen) {
//                 setNuevaImagen(updateProducto.imagen);
//             }
//         }
//     }, [updateProducto]);

//     const GuardarCambios = () => {
//         if (nuevoNombre !== "" && nuevaDescripcion !== "" && nuevaImagen !== "") {
//           if (guardaEditar) {
//             const productoActualizado = {
//               id: updateProducto.id, // Copiamos manualmente las propiedades necesarias
//               nombre: nuevoNombre,
//               precio: nuevoPrecio,
//               descripcion: nuevaDescripcion,
//               imagen: nuevaImagen
//             };
//             guardaEditar(productoActualizado);
//           } else {
//             console.log('La función guardaEditar no está definida');
//           }
//           CerrarModal();
//         } else {
//           console.log('Faltan campos por completar');
//         }
//       };
      
//     return (
//         <Modal show={show} onHide={CerrarModal}>
//             <Modal.Header closeButton>
//                 <Modal.Title>Editar Producto</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <Form>
//                     <Form.Group controlId="formNombre">
//                         <Form.Label>Nombre</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="Edita el nombre del producto"
//                             value={nuevoNombre}
//                             onChange={(e) => setNuevoNombre(e.target.value)}
//                         />
//                     </Form.Group>
//                     <Form.Group controlId="formPrecio">
//                         <Form.Label>Precio</Form.Label>
//                         <Form.Control
//                             type='number'
//                             placeholder="Edita el precio del Producto"
//                             value={nuevoPrecio}
//                             onChange={(e) => setNuevoPrecio(e.target.value)}
//                         />
//                     </Form.Group>
//                     <Form.Group controlId="formDescripcion">
//                         <Form.Label>Descripción</Form.Label>
//                         <Form.Control
//                             as="textarea"
//                             rows={3}
//                             placeholder="Edita la descripción del producto"
//                             value={nuevaDescripcion}
//                             onChange={(e) => setNuevaDescripcion(e.target.value)}
//                         />
//                     </Form.Group>
//                     <Form.Group controlId="formImagen">
//                         <Form.Label>Imagen URL</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="Edita la URL de la imagen"
//                             value={nuevaImagen}
//                             onChange={(e) => setNuevaImagen(e.target.value)}
//                         />
//                     </Form.Group>
//                 </Form>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button variant="secondary" onClick={CerrarModal}>
//                     Cancelar
//                 </Button>
//                 <Button variant="primary" onClick={GuardarCambios}>
//                     Guardar cambios
//                 </Button>
//             </Modal.Footer>
//         </Modal>
//     );
// };

// export default EditarModal;






















