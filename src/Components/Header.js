import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from "../play-icon.png";
import { useCart } from "../CartContext";
import OffCanvasCart from "./OffCanvasCart";

function Header() {
  const { showCart, handleOpenCart, handleCloseCart, cart } = useCart();

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/Home">
            <img src={logo} className="App-logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto justify-content-end">
              <Nav.Link href="/Home">Home</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="/ServicesOne">Services One</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Product">Product</Nav.Link>
              <Nav.Link href="/Blog">Blog</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
              <Nav.Link onClick={handleOpenCart}>
                <FontAwesomeIcon icon={faShoppingCart} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <OffCanvasCart showCart={showCart} handleCloseCart={handleCloseCart} cartItems={cart} />
    </div>
  );
}

export default Header;
