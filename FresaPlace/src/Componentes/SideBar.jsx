import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import "../Styles/Sidebar.css";

function SideBar() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link id='linkAdmin' as={Link} to="/home">Agregar Productos</Nav.Link>
      <Nav.Link id='linkAdmin' as={Link} to="/EditarCards">Editar Cards</Nav.Link>
      <Nav.Link id='linkAdmin' as={Link} to="/imagenes">Imagenes</Nav.Link>
    </Nav>
  );
}

export default SideBar;
