import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getProductos } from '../Services/get';
import React, { useState, useEffect } from 'react';
import "../Styles/CardPinata.css"

function CardPinata() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function fetchProductos() {
      try {
        const productos = await getProductos();
        const productosFiltrados = productos.filter(producto => producto.tags === 'Pinata');
        setProductos(productosFiltrados);
      } catch (error) {
        console.error('Error al filtrar los piñata:', error);
      }
    }
    fetchProductos();
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {productos.map(producto => (
        <Card key={producto.id} id={`card-pinata-${producto.id}`} className="card-custom" style={{ width: '18rem', margin: '1rem' }}>
          <Card.Img className="card-img-custom" variant="top" src={producto.imagen} />
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

export default CardPinata;
