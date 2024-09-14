import Carousel from 'react-bootstrap/Carousel';

import Ninas from "../IMG/Ninas.png"
import Payasita from "../IMG/Payasita.jpg"
import Totem from "../IMG/Totem.png"

function CarruselPrinc() {
  return (
    <Carousel fade>
      <Carousel.Item>
      <img className="d-block w-100" src={Ninas} alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={Payasita} alt="First slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100" src={Totem} alt="First slide"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarruselPrinc;