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
    autoplaySpeed: 3000,
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









































// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../Styles/Carrusel.css";
// import Faroles from "../IMG/Destacados/Faroles.png"
// import Pinatas from "../IMG/Destacados/Pinatas.png"
// import Paquetes from "../IMG/Destacados/Paquetes.png"

// function CarruselPrinc() {
//   return (

//     <Carousel id="carrusel-principal" data-bs-theme="dark">
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={Faroles}
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h5 id='textoCarrusel'>FAROLES</h5>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={Pinatas}
//           alt="Second slide"
//         />
//         <Carousel.Caption>
//           <h5 id='textoCarrusel'>PIÑATAS</h5>

//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={Paquetes}
//           alt="Third slide"
//         />
//         <Carousel.Caption>
//           <h5 id='textoCarrusel'>PAQUETES DE FIESTA</h5>
//           <p>
   
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default CarruselPrinc;
