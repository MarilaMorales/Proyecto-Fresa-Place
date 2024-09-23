import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getProductos } from '../Services/get';
import React, { useState, useEffect } from 'react';


function CardAdornos() {
  const [productos, setProductos] = useState([]);



  useEffect(() => {
    async function fetchProductos() {
      try {
        const productos = await getProductos();
        
        // Filtra los productos con el tag adorno
        const productosFiltrados = productos.filter(producto => producto.tags === 'Adorno');
        setProductos(productosFiltrados);
      } catch (error) {
        console.error('Error al filtrar los prodctos:', error);
      }
    }

    fetchProductos();
  }, []);



  // Itera sobre cada elemento en productos y crea un card con la info del db.json
  return (
    <div className="d-flex flex-wrap">
      {productos.map(producto => (
        <Card key={producto.id} style={{ width: '18rem', margin: '1rem' }}>
          <Card.Img variant="top" src={producto.imagen} />
          <Card.Body>
            <Card.Title>{producto.nombre}</Card.Title>
            <Card.Text>
              {producto.descripcion}
            </Card.Text>
            <Button variant="primary">Más info</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardAdornos;
