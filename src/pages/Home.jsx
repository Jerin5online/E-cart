import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";

function Home() {
  const data = useFetch("https://dummyjson.com/products");
  console.log(data);

  const dispatch = useDispatch();

  return (
    <Row className="m-5">
      {data?.length > 0 ? (
        data.map((item) => (
          <Col className="mb-5" sm={12} md={6} lg={4} xl={3}>
            <Card
              style={{
                width: "18rem",
                boxShadow:
                  "0 8px 20px 0 rgba(0, 0, 0, 0.2), 0 8px 20px 0 rgba(0, 0, 0, 0.19)",
                marginTop: "50px",
              }}
            >
              <Card.Img
                variant="top"
                src={item.thumbnail}
                style={{ height: "200px" }}
              />
              <Card.Body>
                <Card.Title className="fw-bolder">
                  {item.title.slice(0, 20)}...
                </Card.Title>
                <Card.Text>
                  <p>{item.description.slice(0, 40)}...</p>
                  <p className="fw-bolder">Prize:₹ {item.price}</p>
                </Card.Text>
                <div className="d-flex align-items-center justify-content-between">
                  <Button
                    onClick={() => dispatch(addToWishlist(item))}
                    variant="outline-danger btn rounded">
                    <i class="fa-solid fa-heart fs-5"></i>
                  </Button>
                  <Button  onClick={() => dispatch(addToCart(item))} variant="outline-light btn rounded">
                    <i class="fa-solid fa-cart-shopping fs-5"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <p>Nothing to display</p>
      )}
    </Row>
  );
}

export default Home;
