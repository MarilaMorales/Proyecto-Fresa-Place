import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/NavBar.css"






function NavBarInc() {


  return (
 
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid id='back_color'>
          <Navbar.Brand href="/Tienda">Tienda</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Escolar">Escolar</Nav.Link>
              <Nav.Link href="/Decoracion">Decoracion</Nav.Link>
              <Nav.Link href="/Adornos">Adornos</Nav.Link>

              <NavDropdown title="Articulos de Fiesta" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Paquetes">Paquetes</NavDropdown.Item>
                <NavDropdown.Item href="/Pinatas">Pinatas</NavDropdown.Item>
                <NavDropdown.Item href="/Murales">Murales</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Cotizaciones">
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