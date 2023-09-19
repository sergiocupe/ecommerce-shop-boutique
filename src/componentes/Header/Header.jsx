import {Navbar, Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom"
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
              <Link className="link-item-custom" to="/" relative="path">
                  Inicio
              </Link>
              <Link className="link-item-custom" to="/Catalogo" relative="path">
                  Catálogo
              </Link>
              <Link className="link-item-custom" to="/Catalogo/Femeninas">
                  Prendas Femenina
              </Link>
              <Link className="link-item-custom" to="/Catalogo/Masculinas">
                  Prendas Masculina
              </Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    </header>
  );
}


