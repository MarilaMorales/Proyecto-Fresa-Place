import React, { useEffect, useState } from 'react';
import { getProductos } from "../Services/get";
import { updateProductos } from '../Services/put';
import { deleteProductos } from '../Services/delete';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EditarModal from './EditarModal'; 





const EditarProductos = () => {
    const [productos, setProductos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [updateProducto, setupdateProducto] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProductos();
            setProductos(data);
        };
        
        fetchData();
    }, []);

    const eliminarProductos = async (id) => {
        await deleteProductos(id);
        setProductos(productos.filter(producto => producto.id !== id));
    };

    const abrirModal = (producto) => {
        setupdateProducto(producto);
        setShowModal(true);
    };

    const cerrarModal = () => {
        setShowModal(false);
        setupdateProducto(null);
    };

    const guardarCambios = async (productoActualizado) => {
        try {
            const productoActualizadoEnDb = await updateProductos(productoActualizado.id, productoActualizado);
            console.log("producto");
            setProductos(productos.map(producto =>
                producto.id === productoActualizado.id ? productoActualizadoEnDb : producto
            ));
            console.log("producto");
            
            toast.success("Producto actualizado con éxito");
        } catch (error) {
            toast.error("Error al actualizar el producto");
        }
    };







    return (
        <div className="container mt-4">
            {productos.map(producto => (
                <Card key={producto.id} style={{ width: '18rem', margin: '1rem' }}>
                    <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
                    <Card.Body>
                        <Card.Title>{producto.nombre}</Card.Title>
                        <Card.Text>
                            {producto.descripcion}
                        </Card.Text>
                        <Card.Text>
                            {producto.precio}
                        </Card.Text>
                        <Button variant="danger" onClick={() => eliminarProductos(producto.id)}>Eliminar</Button>
                        <Button variant="primary" onClick={() => abrirModal(producto)}>Editar</Button>
                  
                    </Card.Body>
                </Card>
            ))}
            {updateProducto && (
                <EditarModal
                    show={showModal}
                    CerrarModal={cerrarModal}
                    updateProducto={updateProducto}
                    onSave={guardarCambios}
                />
            )}
        </div>
    );
};

export default EditarProductos;
