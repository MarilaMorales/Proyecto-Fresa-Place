import Nav from 'react-bootstrap/Nav';
import "../Styles/Sidebar.css";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();



  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link id='linkAdmin' href="/home">Agregar Productos</Nav.Link>
      <Nav.Link id='linkAdmin' eventKey="link-1">Editar Cards</Nav.Link>
      <Nav.Link id='linkAdmin' eventKey="link-2">Imagenes</Nav.Link>
    </Nav>
  );
}

export default SideBar;