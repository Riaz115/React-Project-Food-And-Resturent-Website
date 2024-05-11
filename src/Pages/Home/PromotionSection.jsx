import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PromotionImg from "../../assets/promotion/pro.png";
import "../../Styles/PromotionSectionStyle.css";
function PromotionSection() {
  return (
    <>
      <section className="promotion-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img
                src={PromotionImg}
                alt="promotions image"
                className="img-fluid"
              />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
                Semper lacus cursus porta primis ligula risus tempus and
                sagittis ipsum mauris lectus laoreet purus ipsum tempor enim
                ipsum porta justo integer ultrice aligula lectus aenean magna
                and pulvinar purus at pretium gravida
              </p>
              <ul>
                <li>
                  <p>
                    Fringilla risus, luctus mauris orci auctor purus euismod
                    pretium purus pretium ligula rutrum tempor sapien
                  </p>
                </li>
                <li>
                  <p>Quaerat sodales sapien euismod purus blandit</p>
                </li>
                <li>
                  <p>
                    Nemo ipsam egestas volute turpis dolores ut aliquam quaerat
                    sodales sapien undo pretium a purus mauris
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="scroll-paralex"></section>
    </>
  );
}

export default PromotionSection;
