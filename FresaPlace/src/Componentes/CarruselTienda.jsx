import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import "../Styles/CarruselTienda.css"

const CarruselProductos = ({ productos, abrirModal }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carrusel-productos">
      <Slider {...settings}>
        {productos.map((producto) => (
          <div key={producto.id} className="producto-item">
            <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
            <h3>{producto.nombre}</h3>
            <p>{producto.precio} Colones</p>
            <button id={`agregar-${producto.id}`} onClick={producto.agregar}>
              Agregar al Carrito
            </button>
            <button id={`verDetalles-${producto.id}`} onClick={() => abrirModal(producto)}>
              Ver Detalles
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarruselProductos;