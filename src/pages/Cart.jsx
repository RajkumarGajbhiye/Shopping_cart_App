import React from "react";
import NavBar from "../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";

import { remove_items } from "../slices/cartSlice";
import { Container, Card, Row, Col } from "react-bootstrap";

const Cart = () => {
  const products = useSelector((state) => state.cart.cart_array);
  const dispatch = useDispatch();

  const removeToCart = (id) => {
    // dispatch remove action
    dispatch(remove_items({ payload: id }));
  };

  return (
    <>
      <NavBar />
      <Container fluid>
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          <h1 className="text-center">Product Dashboard</h1>
          {products.map((items) => (
            <Col
              className="col-md-3 "
              key={items.id}
              style={{ margin: "3rem" }}
            >
              <Card
                className="h-100 text-center "
                style={{
                  width: "25rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="d-flex justify-content-center align-items-center">
                  <Card.Img
                    variant="top"
                    src={items.image}
                    style={{ width: "10rem", height: "7rem" }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{items.title}</Card.Title>
                  <Card.Text>INR: {items.price}</Card.Text>
                </Card.Body>
                <Card.Footer style={{ width: "25rem" }}>
                  <Button
                    variant="danger"
                    onClick={() => removeToCart(items.id)}
                  >
                    Remove Item
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Cart;
