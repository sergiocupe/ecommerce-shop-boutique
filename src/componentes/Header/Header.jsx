import {Navbar, Container, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom"
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
              <NavLink className="link-item-custom" to="/" relative="path">
                  Inicio
              </NavLink>
              <NavLink className="link-item-custom" to="/Catalogo">
                  Catálogo
              </NavLink>
              <NavLink className="link-item-custom" to="/Catalogo/women's clothing">
                  Prendas Femenina
              </NavLink>
              <NavLink className="link-item-custom" to="/Catalogo/men's clothing">
                  Prendas Masculina
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    </header>
  );
}


