import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Headers({darkMode, setdarkMode}) {
  return (
    <Navbar>
        <Nav defaultActiveKey="/" >
          <Nav.Link eventKey="/" as={Link} to="/">Home</Nav.Link>
          <Nav.Link eventKey="board" as={Link} to="/board">Board</Nav.Link>
          <Nav.Link eventKey="test" as={Link} to="/test">Test</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <input type="checkbox" 
            onChange={(e) => setdarkMode(e.target.checked)}
            defaultChecked={darkMode}
            />
        </Navbar.Collapse>
    </Navbar>
  )
}