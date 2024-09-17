import Nav from 'react-bootstrap/Nav';
import "../Styles/Sidebar.css";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom

function SideBar() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Item>
        <Link id='linkAdmin' to="/Administracion">Agregar Productos</Link>
      </Nav.Item>
      <Nav.Item>
        <Link id='linkEdit' to="/EditarCards">Editar Cards</Link>
      </Nav.Item>
      <Nav.Item>
        <Link id='linkImages' to="/Imagenes">Imagenes</Link>
      </Nav.Item>
    </Nav>
  );
}

export default SideBar;
