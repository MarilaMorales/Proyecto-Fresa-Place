import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



import React from "react";
import Slider from "react-slick";

const CarruselProductos = ({ productos, abrirModal }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Mostrar 3 productos a la vez
    slidesToScroll: 1, // Desplazar 1 producto por vez
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
          <div key={producto.id} className="producto-item" onClick={() => abrirModal(producto)}>
            <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
            <h3>{producto.nombre}</h3>
            <p>{producto.precio} USD</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarruselProductos;
