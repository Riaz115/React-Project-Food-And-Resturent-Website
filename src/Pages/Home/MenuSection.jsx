import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ForMenu from "../../Components/Layouts/ForMenu";
import "../../Styles/MenuStyle.css";
import Image1 from "../../assets/menu/burger-11.jpg";
import Image2 from "../../assets/menu/burger-12.jpg";
import Image3 from "../../assets/menu/burger-13.jpg";
import Image4 from "../../assets/menu/burger-14.jpg";
import Image5 from "../../assets/menu/burger-15.jpg";
import Image6 from "../../assets/menu/burger-16.jpg";
import Image7 from "../../assets/menu/burger-17.jpg";
import Image8 from "../../assets/menu/burger-18.jpg";
import { Link } from "react-router-dom";

function MenuSection() {
  const ForShowStarsicons = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating > 0.5) {
        stars.push(<i key={i} className="bi bi-star-fill"></i>);
        rating--;
      } else if (rating > 0 && rating < 1) {
        stars.push(<i key={"half"} className="bi bi-star-half"></i>);
        rating--;
      } else {
        stars.push(<i key={`empty ${i}`} className="bi bi-star"></i>);
        rating--;
      }
    }
    return stars;
  };
  //  Data for menu
  const menuData = [
    {
      id: "0001",
      image: Image1,
      title: "Crispy Chicken",
      paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
      rating: 5,
      price: 99.15,
    },
    {
      id: "0002",
      image: Image2,
      title: "Ultimate Bacon",
      paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
      rating: 4.5,
      price: 99.32,
    },
    {
      id: "0003",
      image: Image3,
      title: "Black Sheep",
      paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
      rating: 4,
      price: 69.15,
    },
    {
      id: "0004",
      image: Image4,
      title: "Vegan Burger",
      paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
      rating: 3.5,
      price: 99.25,
    },
    {
      id: "0005",
      image: Image5,
      title: "Double Burger",
      paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
      rating: 3.0,
      price: 59.25,
    },
    {
      id: "0006",
      image: Image6,
      title: "Turkey Burger",
      paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
      rating: 3,
      price: 79.18,
    },
    {
      id: "0007",
      image: Image7,
      title: "Smokey House",
      paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
      rating: 2.5,
      price: 99.19,
    },
    {
      id: "0008",
      image: Image8,
      title: "Classic Burger",
      paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
      rating: 2.0,
      price: 89.12,
    },
    // Add more mock data objects as needed
  ];
  return (
    <>
      <section className="menu-section">
        <Container>
          <Row>
            <Col lg={{ sapn: 8 }} className="text-center mb-5 forpadding">
              <h1>our crazy burger</h1>
              <p className="para">
                liquam a augue suscipit, luctus neque purus ipsum and neque
                dolor primis libero tempus, blandit variusipit, luctus neque
                purus ipsum and nequeipsum and neque
              </p>
            </Col>
          </Row>
          <Row>
            {menuData.map((data, index) => (
              <ForMenu
                key={index}
                title={data.title}
                paragraph={data.paragraph}
                rating={data.rating}
                price={data.price}
                image={data.image}
                ForShowStarsicons={ForShowStarsicons}
              />
            ))}
          </Row>
          <Row className="pt-5">
            <Col sm={6} lg={5}>
              <div className="ads-box ads-img1 mb-5 mb-md-0">
                <h4>get your free</h4>
                <h5> cheese fries</h5>
                <Link to="/">
                  <button className="add-btn red-btn py-1 px-4">
                    Learn more
                  </button>
                </Link>
              </div>
            </Col>
            <Col sm={6} lg={7} className="ads-box ads-img2 ">
              <div className="ads-bos ads-img2">
                <h4>get your free</h4>
                <h5> cheese fries</h5>
                <Link to="/">
                  <button className="add-btn red-btn px-4 py-1">
                    Learn more
                  </button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default MenuSection;
