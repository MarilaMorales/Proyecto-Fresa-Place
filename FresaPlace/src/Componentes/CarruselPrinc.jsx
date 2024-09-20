import Carousel from 'react-bootstrap/Carousel';
import Ninas from "../IMG/Murales/Ninas.png";
import "../Styles/Carrusel.css"
import MuralPayasita from "../IMG/Murales/MuralPayasita.jpg";
import MuralMarino from "../IMG/Murales/MuralMarino.jpg";

function CarruselPrinc() {
  return (
    <div className="containerCarrusel">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={Ninas} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={MuralPayasita} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={MuralMarino} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarruselPrinc;




// import Carousel from 'react-bootstrap/Carousel';
// import "../Styles/Carrusel.css"
// import Ninas from "../IMG/Murales/Ninas.png"
// import MuralPayasita from "../IMG/Murales/MuralPayasita.jpg"
// import MuralMarino from "../IMG/Murales/MuralMarino.jpg"

// function CarruselPrinc() {
//   return (
//     <Carousel fade>
//       <Carousel.Item>
//       <img className="d-block w-100" src={Ninas} alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img className="d-block w-100" src={MuralPayasita} alt="First slide" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//           className="d-block w-100" src={MuralMarino} alt="First slide"/>
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default CarruselPrinc;