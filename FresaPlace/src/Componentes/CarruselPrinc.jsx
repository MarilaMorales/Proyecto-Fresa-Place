import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/Carrusel.css";
import Faroles from "../IMG/Destacados/Faroles.png"
import Pinatas from "../IMG/Destacados/Pinatas.png"
import Paquetes from "../IMG/Destacados/Paquetes.png"

function CarruselPrinc() {
  return (

    <Carousel id="carrusel-principal" data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Faroles}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 id='textoCarrusel'>FAROLES</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Pinatas}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 id='textoCarrusel'>PIÑATAS</h5>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Paquetes}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 id='textoCarrusel'>PAQUETES DE FIESTA</h5>
          <p>
   
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarruselPrinc;
