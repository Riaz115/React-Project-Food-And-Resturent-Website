import React from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Playstore from "../../assets/shop/appstore.png";
import googlestore from "../../assets/shop/googleplay.png";
import Dowloadimg from "../../assets/shop/e-shop.png";
import image1 from "../../assets/brands/brand-11.png";
import image2 from "../../assets/brands/brand-12.png";
import image3 from "../../assets/brands/brand-13.png";
import image4 from "../../assets/brands/brand-14.png";
import image5 from "../../assets/brands/brand-15.png";
import image6 from "../../assets/brands/brand-16.png";
import image7 from "../../assets/brands/brand-17.png";
import image8 from "../../assets/brands/brand-18.png";

import "../../Styles/Shopsectionstyle.css";
function ShopSection() {
  return (
    <>
      <section className="shop-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
              <h4>Download mobile App and</h4>
              <h2>save up to 20%</h2>
              <p>
                Aliquam a augue suscipit, luctus neque purus ipsum and neque
                dolor primis libero tempus, blandit varius
              </p>
              <Link to="/">
                <img
                  src={Playstore}
                  alt="appstore"
                  className="img-fluid store-img me-3"
                />
              </Link>
              <Link to="/">
                <img
                  src={googlestore}
                  alt="googlestore"
                  className="img-fluid store-img me-3"
                />
              </Link>
            </Col>
            <Col lg={6}>
              <img src={Dowloadimg} alt="download" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="brand-section">
        <Carousel>
          <Carousel.Item>
            <Carousel.Caption>
              <div className="d-flex justify-content-center align-items-center">
                <div className="brand-img">
                  <img src={image1} alt="brand-img-1" className="img-fluid" />
                </div>
                <div className="brand-img">
                  <img src={image2} alt="brand-img-2" className="img-fluid" />
                </div>
                <div className="brand-img">
                  <img src={image3} alt="brand-img-3" className="img-fluid" />
                </div>
                <div className="brand-img">
                  <img src={image4} alt="brand-img-4" className="img-fluid" />
                </div>
                <div className="brand-img">
                  <img src={image5} alt="brand-img-5" className="img-fluid" />
                </div>
                <div className="brand-img">
                  <img src={image6} alt="brand-img-6" className="img-fluid" />
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <div className="d-flex justify-content-center align-items-center">
                <div className="brand-img">
                  <img src={image3} alt="brand-img-3" className="img-fluid" />
                </div>
                <div className="brand-img">
                  <img src={image4} alt="brand-img-4" className="img-fluid" />
                </div>
                <div className="brand-img">
                  <img src={image5} alt="brand-img-5" className="img-fluid" />
                </div>
                <div className="brand-img">
                  <img src={image6} alt="brand-img-6" className="img-fluid" />
                </div>
                <div className="brand-img">
                  <img src={image7} alt="brand-img-7" className="img-fluid" />
                </div>
                <div className="brand-img">
                  <img src={image8} alt="brand-img-8" className="img-fluid" />
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
}
export default ShopSection;
