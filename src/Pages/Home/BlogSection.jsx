import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import image1 from "../../assets/blog/review1.png";
import image2 from "../../assets/blog/review2.png";
import image3 from "../../assets/blog/review3.png";
import image4 from "../../assets/blog/review4.png";

import "../../Styles/BlogSection.css";

function BlogSection() {
  return (
    <>
      <section className="blog-section">
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="blog-img">
                    <img src={image1} alt="blog-img-1" className="img-fluid" />
                  </div>
                  <p className="para text-capitalize">
                    my name is riaz ahmed . i live in sahiwal . i love my
                    pakistan . i am a web developer . i am a python developer .
                    i am very very expert in c language . i am very interested
                    in python language. i am expert in react js front end
                    framework of javascripts .
                  </p>
                  <div className="item-rating mb-2">
                    <i className="bi bi-star-fill forstar"></i>
                    <i className="bi bi-star-fill forstar"></i>
                    <i className="bi bi-star-fill forstar"></i>
                    <i className="bi bi-star-fill forstar"></i>
                    <i className="bi bi-star-fill forstar"></i>
                  </div>
                  <h4 className="myname">by m . riaz ahmad</h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="blog-img">
                    <img src={image2} alt="blog-img-2" className="img-fluid" />
                  </div>
                  <p className="para text-capitalize">
                    my name is riaz ahmed . i live in sahiwal . i love my
                    pakistan . i am a web developer . i am a python developer .
                    i am very very expert in c language . i am very interested
                    in python language. i am expert in react js front end
                    framework of javascripts .
                  </p>
                  <div className="item-rating mb-2">
                    <i className="bi bi-star-fill forstar"></i>
                    <i className="bi bi-star-fill forstar"></i>
                    <i className="bi bi-star-fill forstar"></i>
                    <i className="bi bi-star-fill forstar"></i>
                    <i className="bi bi-star-fill forstar"></i>
                  </div>
                  <h4 className="myname">by m . riaz ahmad</h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="blog-img">
                    <img src={image3} alt="blog-img-3" className="img-fluid" />
                  </div>
                  <p className="para text-capitalize">
                    my name is riaz ahmed . i live in sahiwal . i love my
                    pakistan . i am a web developer . i am a python developer .
                    i am very very expert in c language . i am very interested
                    in python language. i am expert in react js front end
                    framework of javascripts .
                  </p>
                  <div className="item-rating mb-2">
                    <i className="bi bi-star-fill forstar"></i>
                    <i className="bi bi-star-fill forstar"></i>
                    <i className="bi bi-star-fill forstar"></i>
                    <i className="bi bi-star-fill forstar"></i>
                    <i className="bi bi-star-fill forstar"></i>
                  </div>
                  <h4 className="myname">by m . riaz ahmad</h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="blog-img">
                    <img src={image4} alt="blog-img-4" className="img-fluid" />
                  </div>
                  <p className="para text-capitalize">
                    my name is riaz ahmed . i live in sahiwal . i love my
                    pakistan . i am a web developer . i am a python developer .
                    i am very very expert in c language . i am very interested
                    in python language. i am expert in react js front end
                    framework of javascripts .
                  </p>
                  <div className="item-rating mb-2">
                    <i className="bi bi-star-fill forstar"></i>
                    <i className="bi bi-star-fill forstar"></i>
                    <i className="bi bi-star-fill forstar"></i>
                    <i className="bi bi-star-fill forstar"></i>
                    <i className="bi bi-star-fill forstar"></i>
                  </div>
                  <h4 className="myname">by m . riaz ahmad</h4>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default BlogSection;
