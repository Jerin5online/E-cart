import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {  removeFromwishlist } from "../redux/slices/wishlistSlice";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/slices/cartSlice";

function Wishlist() {
  const wishlistArray = useSelector((state) => state.wishlistReducer);
  console.log(wishlistArray);

  const dispatch = useDispatch();
  const handlewislist = (item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromwishlist(item.id))
  }

  return (
    <div style={{ marginTop: "150px" }}>
      <Row className="m-5 ">
        {wishlistArray?.length > 0 ? (
          wishlistArray?.map((item) => (
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
                      onClick={() => dispatch(removeFromwishlist(item.id))}
                      variant="outline-danger btn rounded"
                    >
                      <i class="fa-solid fa-trash fs-5"></i>
                    </Button>
                    <Button onClick={()=>handlewislist(item)} variant="outline-light btn rounded">
                      <i class="fa-solid fa-cart-shopping fs-5"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div
            style={{ height: "100vh" }}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <img
              style={{ marginBottom: "30px", width:"400px" }}
              src="https://o.remove.bg/downloads/31fcd960-9cf9-4f5f-a384-fc13544c6360/82-828844_empty-cart-icon-png-transparent-png-removebg-preview.png"
              alt="no image"
            />
            <h4 style={{ color: "p" }}>Your Wishlist is Empty</h4>
            <Link style={{ marginBottom: "170px" }} to={"/"}>
              Back to Home
            </Link>
          </div>
        )}
      </Row>
    </div>
  );
}

export default Wishlist;
