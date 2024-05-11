import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";
import "../../Styles/AboutSectionStyle.css";

function AboutSection() {
  //  Data of Cards
  const Cards = [
    {
      image: Pizza,
      title: "Original",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
      image: Salad,
      title: "Qualty Foods",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
      image: Delivery,
      title: "Fastest Delivery",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    // Add more mock data objects as needed
  ];

  return (
    <>
      <section className="about-section" id="/about">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>The burger tastes better when you eat it with your family</h2>
              <p>
                Porta semper lacus cursus, feugiat primis ultrice a ligula risus
                auctor an tempus feugiat dolor lacinia cubilia curae integer
                orci congue and metus integer primis in integer metus
              </p>
              <Link>
                <button className="common-btn red-btn">
                  Explore full menu
                </button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about-wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {Cards.map((card, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="card-box text-center">
                  <div className="card-icon">
                    <img
                      src={card.image}
                      alt="card-image"
                      className="img-fluid"
                    />
                  </div>
                  <h4>{card.title}</h4>
                  <p>{card.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AboutSection;
