import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function ForMenu(props) {
  let { price, rating, image, title, key, paragraph, ForShowStarsicons } =
    props;
  return (
    <>
      <Col md={6} lg={4} xl={3} className="mb-4" key={key}>
        <Card className="overflow-hidden">
          <div className="overflow-hidden">
            <Card.Img variant="top" src={image} className="img-fluid" />
          </div>

          <Card.Body>
            <div className="d-flex align-items-center justify-content-between">
              <div className="card-rating">{ForShowStarsicons(rating)}</div>
              <div className="whishlist">
                <i class="bi bi-heart"></i>
              </div>
            </div>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{paragraph}</Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <div className="card-price">
                <h5>${price}</h5>
              </div>
              <div className="add-to-card">
                <Link to="/">
                  <i class="bi bi-bag me-2"></i>
                  Add To Card
                </Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default ForMenu;
