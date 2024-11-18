import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../Styles/Carrusel.css"; // Asegúrate de que el CSS de Slick esté incluido
import Faroles from "../IMG/Destacados/Faroles.png";
import Pinatas from "../IMG/Destacados/Pinatas.png";
import Paquetes from "../IMG/Destacados/Paquetes.png";
import ProductosDestacados from "../IMG/ProductosDestacados.png"



const CarruselPrinc = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="carrusel-container">
      <img id='DestacadoTexto' src={ProductosDestacados} alt="" />
      <Slider {...settings}>
        <div className="slide">
          <img src={Faroles} alt="Faroles" />
          <h5 className="textoCarrusel">FAROLES</h5>
        </div>
        <div className="slide">
          <img src={Pinatas} alt="Piñatas" />
          <h5 className="textoCarrusel">PIÑATAS</h5>
        </div>
        <div className="slide">
          <img src={Paquetes} alt="Paquetes de Fiesta" />
          <h5 className="textoCarrusel">PAQUETES DE FIESTA</h5>
        </div>
      </Slider>
    </div>
  );
}

export default CarruselPrinc;





































