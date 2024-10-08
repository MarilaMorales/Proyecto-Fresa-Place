import Card from 'react-bootstrap/Card';
import { getProductos } from '../Services/get';
import React, { useState, useEffect } from 'react';
// import "../Styles/CardDecoracion.css"

function CardDecoracion() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function fetchProductos() {
      try {
        const productos = await getProductos();
        const productosFiltrados = productos.filter(producto => producto.tags === 'Decoracion');
        setProductos(productosFiltrados);
      } catch (error) {
        console.error('Error al filtrar los productos:', error);
      }
    }
    fetchProductos();
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {productos.map(producto => (
       <Card key={producto.id} id={`card-adorno-${producto.id}`} className="card-custom"
          style={{ boxShadow: "0 4px 22px rgba(0, 0, 0, 0.2)" }}>
          <Card.Img className="card-img-custom" variant="top" src={producto.imagen} />
          <Card.Body>
         <Card.Title>{producto.nombre}</Card.Title>
         <Card.Text>{producto.descripcion}</Card.Text>
         <Card.Title> Precio: {producto.precio} colones</Card.Title>
       </Card.Body>
     </Card>
      ))}
    </div>
  );
}

export default CardDecoracion;
