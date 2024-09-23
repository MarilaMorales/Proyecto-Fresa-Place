import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import "../Styles/CarruselTienda.css"
import Cart from "../Componentes/Cart";

const CarruselProductos = ({ productos, abrirModal, Cart }) => {
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
          <div key={producto.id} className="producto-item">
            <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
            <h3>{producto.nombre}</h3>
            <p>{producto.precio} Colones</p>
            <button onClick={() => agregarAlCarrito(producto)}>Add to Cart</button>
            <div onClick={() => abrirModal(producto)}>View Details</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};




//   return (
//     <div className="carrusel-productos">
//       <Slider {...settings}>
//         {productos.map((producto) => (
//           <div key={producto.id} className="producto-item" onClick={() => abrirModal(producto)}>
//             <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
//             <h3>{producto.nombre}</h3>
//             <p>{producto.precio} USD</p>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );


export default CarruselProductos;
