import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/NavBar.css"
import { Link } from 'react-router-dom';





function NavBarInc() {



  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container id='back_color'>
        <Navbar.Brand href="#home">FRESA PLACE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">Escolar</Nav.Link>
            <Nav.Link href="#home">Envolturas</Nav.Link>
            <Nav.Link href="#home">Decoracion</Nav.Link>
            <Nav.Link href="#link">Adornos</Nav.Link>
            <NavDropdown title="Eventos Especiales" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Navidad</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Mes de la Independencia</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Articulos de Fiesta" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Paquetes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Piñatas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Murales</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Nose</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Cotice
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarInc;