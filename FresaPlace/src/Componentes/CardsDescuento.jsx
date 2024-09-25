import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getProductos } from '../Services/get';
import React, { useState, useEffect } from 'react';
import "../Styles/Descuento.css"


function CardDescuentos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function fetchProductos() {
      try {
        const productos = await getProductos();
        
        // Filtra los productos con el tag adorno
        const productosFiltrados = productos.filter(producto => producto.tags === 'Descuento');
        setProductos(productosFiltrados);
      } catch (error) {
        console.error('Error al filtrar los productos:', error);
      }
    }

    fetchProductos();
  }, []);

  return (
    <div className="d-flex flex-wrap" id="card-descuentos">
      {productos.map(producto => (
        <Card key={producto.id} className="card-item">
          <Card.Img variant="top" src={producto.imagen} />
          <Card.Body>
            <Card.Title>{producto.nombre}</Card.Title>
            <Card.Text>
              {producto.descripcion}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardDescuentos;
