import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NavBar = () => {
  const cartProducts = useSelector((state) => state.cart.cart_array);
  return (
    <Navbar bg="primary" sticky="top" expand="lg" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">Shopping Cart</Navbar.Brand>

        <Nav>
          <Nav.Link to="/" as={Link}>
            Products
          </Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Nav.Link to="/cart" as={Link}>
              <img
                max-width="100px"
                height="35px"
                src="https://www.seekpng.com/png/detail/901-9012555_tienda-tallas-grandes-blue-shopping-cart-icon-amazon.png"
                alt="load image"
              />
              <span
                style={{
                  border: "2px solid red",
                  borderRadius: "50%",
                  backgroundColor: "red",
                  position: "relative",
                  bottom: "1rem",
                  right: "1.4rem",
                  color: "black",
                }}
              >
                {cartProducts.length}
              </span>
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
