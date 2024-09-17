import React, { useEffect, useState } from 'react';
import { getProductos } from "../Services/get";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteProductos } from '../Services/delete';






const EditarProductos = () => {
    const [productos, setProductos] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await getProductos();
        setProductos(data);
      };
      
      fetchData();
    }, []);
  
    const eliminarProductos = async (id) => {
      await deleteProductos(id); // Llama a la función delete
      setProductos(productos.filter(producto => producto.id !== id)); // Actualiza el estado para eliminar el producto
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
              <Button variant="danger" onClick={() => eliminarProductos(producto.id)}>Eliminar</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  };
  
  export default EditarProductos;