import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import burger from "../../assets/hero/hero-2.png";
import { Link } from "react-router-dom";
import "../../Styles/HomeStyle.css";
function HomeSection1() {
  return (
    <>
      <section className="section1">
        <Container>
          <Row>
            <Col lg={7} className="mb-5 mb-lg-0">
              <div className="position-relative">
                <img src={burger} alt="section1-image" className="img-fluid" />
                <div className="price-badge">
                  <div className="badge-text">
                    <h3 className="price-text">Only</h3>
                    <h4 className="price-amount">$ 6.99</h4>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="text-center section1-text">
                <h1 className="text-white">new burger</h1>
                <h3 className="text-white">with onion</h3>
                <p className="text-white pt-2 pb-4 text-center">
                  Feugiat primis ligula risus auctor laoreet augue egestas
                  mauris viverra tortor in iaculis pretium at magna mauris ipsum
                  primis rhoncus feugiat
                </p>
                <Link to="/">
                  <button className="common-btn">order now</button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HomeSection1;
