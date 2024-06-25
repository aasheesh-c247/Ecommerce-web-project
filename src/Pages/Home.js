import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImageSlider from "../Components/ImageSlider";
import { SliderData } from "../Components/SliderData";
import ProductDataapi from "../Components/ProductDataapi";
import aboutImg from "../about-img.jpg";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  return (
    <div className="App">
      <section className="section slider-section">
        <Container>
          <ImageSlider slides={SliderData} />
        </Container>
      </section>

      <section className="section about-youtubevideo">
        <Container>
          <Row>
            <Col xs={12} sm={12} md lg={6}>
              <div className="about-text-block">
                <h1>About Youtube</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
              </div>
            </Col>
            <Col xs={12} sm={12} md lg={6}>
              <div className="about-image-block">
                <img
                  src={aboutImg}
                  className="About-image w-100"
                  alt="about-image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section home-card py-2">
        <Container>
          <Row>
            <ProductCard cardData={ProductCard} />
          </Row>
        </Container>
      </section>

      <section className="section product-section">
        <Container>
          <ProductDataapi data={ProductDataapi} />
        </Container>
      </section>

    </div>
  );
};

export default Home;
