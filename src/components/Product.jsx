import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_items_cart } from "../slices/cartSlice";
import { fetchApi } from "../thunk/productsThunk";
import { Container, Card, Button, Spinner, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Product = () => {
  const dispatch = useDispatch();
  const {
    data: products,
    loading,
    error,
  } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchApi());
  }, []);

  const addToCart = (item) => {
    dispatch(add_items_cart(item));
  };

  if (loading) {
    return (
      <div>
        {" "}
        <Spinner
          animation="border"
          variant="primary"
          style={{
            position: "relative",
            left: "50rem",
            top: "10rem",
            width: "4rem",
            height: "4rem",
          }}
        />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Container>
      <h1 className="text-center">Product Dashboard</h1>
      <Row >
        <Row>
      <Col >
        <Form.Control 
          onChange={(e) => setSearchTerm(e.target.value)}
        size="lg"
          type="text"
          placeholder="Enter products....."
          style={{ marginBottom: "20px" }}
        />
       
         </Col>
         </Row>
        

        {products
          .filter((item) =>
            item.title.toLowerCase().startsWith(searchTerm.toLowerCase())
          )
          .map((item) => (
            <Col
             className="colStyle"
              key={item.id}
              style={{ marginBottom: "20px" }}
            >
              <Card className="text-center" style={{ width: "18rem"}}>
               
                  <Card.Img
                    variant="top"
                    src={item.image}
                    style={{ maxWidth: "400px", height: "7rem"}}
                  />
              
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>INR: {item.price}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary" onClick={() => addToCart(item)}>
                    Add to Cart
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
         
      </Row>
    </Container>
  );
};

export default Product;
