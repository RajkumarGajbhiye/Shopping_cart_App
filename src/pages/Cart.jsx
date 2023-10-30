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
      <Container>
      <h1 className="text-center">Products</h1>
        <Row>
          
          {products.map((items) => (
            <Col   className="colStyle"
              key={items.id}
              style={{ marginBottom: "20px" }}
            >
               <Card className="text-center" style={{ width: "18rem"}}>
               
                  <Card.Img
                    variant="top"
                    src={items.image}
                    style={{ height: "15rem",width:"15em"}}
                  />
            
                <Card.Body>
                  <Card.Title>{items.title}</Card.Title>
                  <Card.Text>INR: {items.price}</Card.Text>
                </Card.Body>
                <Card.Footer>
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


