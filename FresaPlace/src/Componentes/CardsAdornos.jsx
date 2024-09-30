import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getProductos } from '../Services/get';
import React, { useState, useEffect } from 'react';
// import "../Styles/CardAdornos.css"



function CardAdornos() {
  const [productos, setProductos] = useState([]);


    //useEffect se utiliza aquí para realizar una acción cuando el componente se monta. 
  useEffect(() => {
    async function fetchProductos() {
      try {
        const productos = await getProductos();
        const productosFiltrados = productos.filter(producto => producto.tags === 'Adorno');
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
        <Card key={producto.id} id={`card-adorno-${producto.id}`} className="card-custom">
          <Card.Img className="card-img-custom" variant="top" src={producto.imagen} />
          <Card.Body>
            <Card.Title>{producto.nombre}</Card.Title>
            <Card.Title> Precio: {producto.precio} colones</Card.Title>
            <Card.Text>
              {producto.descripcion}
            </Card.Text>
 
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardAdornos;




