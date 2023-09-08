import {Navbar, Container, Nav} from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import "./Header.css";

export default function Header () {
  return (
    <header>
      <Navbar className="navbar navbar-expand-sm navbar-custom" expand="lg">
        <Container className="container-fluid">
          <Navbar.Brand>
              <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo" className="logo"/> 
         </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="links-custom">
              <Nav.Link className="link-item-custom">
                  Inicio
              </Nav.Link>
              <Nav.Link>
                  Quienes Somos
              </Nav.Link>
              <Nav.Link>
                  Productos
              </Nav.Link>
              <Nav.Link>
                  Contáctenos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    </header>
  );
}


