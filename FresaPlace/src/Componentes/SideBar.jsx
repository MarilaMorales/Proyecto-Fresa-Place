import Nav from 'react-bootstrap/Nav';
import "../Styles/Sidebar.css";

function SideBar() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link id='linkAdmin' href="/home">Active</Nav.Link>
      <Nav.Link id='linkAdmin' eventKey="link-1">Link</Nav.Link>
      <Nav.Link id='linkAdmin' eventKey="link-2">Link</Nav.Link>
      <Nav.Link id='linkAdmin' eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  );
}

export default SideBar;