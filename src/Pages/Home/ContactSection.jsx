import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../Styles/ContactStyle.css";

function ContactSection() {
  return (
    <>
      <section className="contact-section">
        <Container>
          <Row className="justify-content-center">
            <Col sm={8} className="text-center ">
              <h4>We Guarantee</h4>
              <h2>30 Minutes Delivery!</h2>
              <p>
                Aliquam a augue suscipit, luctus neque purus ipsum neque undo
                dolor primis libero tempus, blandit a cursus varius luctus neque
                magna
              </p>
              <Link to="/">
                <button className="red-btn px-4 py-2 ">
                  Call 0328-0182715
                </button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ContactSection;
