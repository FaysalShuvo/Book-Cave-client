import "./Header.css";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/home">
          Book Cave
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/order/:_id">
            Orders
          </Nav.Link>
          <Nav.Link as={Link} to="/checkout">
            Check Out
          </Nav.Link>
          <Nav.Link as={Link} to="/admin">
            Admin
          </Nav.Link>
          <Nav.Link as={Link} to="/deals">
            Deals
          </Nav.Link>
          <div>
            {loggedInUser.name === undefined ? (
              <Button as={Link} to="/login" variant="warning">
                Log In
              </Button>
            ) : (
              <Button variant="info">{loggedInUser.name}</Button>
            )}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
