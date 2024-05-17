import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../Styles/FooterStyle.css";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const HandleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const ChecktoScroll = () => {
    const forCheckShowHide = 250;
    const windowscroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    windowscroll > forCheckShowHide ? setIsVisible(true) : setIsVisible(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", ChecktoScroll);
  });
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className="mb-4  mb-lg-0">
              <div className="text-center">
                <h5>Location</h5>
                <p className="text-capitalize"> my chak no is 115/9.l</p>
                <p className="text-capitalize"> tehsil-o-district sahiwal</p>
                <p className="text-capitalize">pakistan zindabad</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4  mb-lg-0">
              <div className="text-center">
                <h5>Working Hours</h5>
                <p className="text-capitalize">Mon-Fri: 9:00AM - 10:00PM</p>
                <p className="text-capitalize"> Saturday: 10:00AM - 8:30PM</p>
                <p className="text-capitalize">Sunday: 12:00PM - 5:00PM</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4  mb-lg-0">
              <div className="text-center">
                <h5>order now</h5>
                <p className="text-capitalize">my name is m .riaz ahmad</p>
                <p>
                  <Link to="/" className="calling">
                    0328-0182715
                  </Link>
                </p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4  mb-lg-0">
              <div className="text-center">
                <h5>follow us</h5>
                <p className="text-capitalize">my name is m .riaz ahmad</p>

                <ul className="list-unstyled text-center mt-2">
                  <li>
                    <Link to="https://www.linkedin.com/in/riaz-ahmad-690870308">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.github.com/riaz115">
                      <i className="bi bi-github"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://wa.me/+923280182715">
                      <i className="bi bi-whatsapp"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.instagram.com/riaz90603?utm_source=qr&igsh=OGU0MmVlOWVjOQ%3D%3D">
                      <i className="bi bi-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="copy-right ">
            <Col>
              <ul className="list-unstyled text-center mb-0">
                <li>
                  <Link to="/">
                    © 2023 <span>SERANI-TECH-CENTER</span>. M.Riaz Ahmad
                    Developer
                  </Link>
                </li>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Terms Of Use</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* this is for the arrow to go top on click */}
      {isVisible && (
        <div className="forscroll" onClick={HandleScroll}>
          <i className="bi bi-arrow-up"></i>
        </div>
      )}
    </>
  );
}

export default Footer;
