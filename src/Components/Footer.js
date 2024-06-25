import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-2">
      <Container>
        <Row>
          <Col md="4">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
          </Col>
          <Col md="4">
            <h5>Contact</h5>
            <p>
              Email: example@example.com <br />
              Phone: +123 456 7890
            </p>
          </Col>
          <Col md="4">
            <h5>Follow Us</h5>
            <a href="#" className="text-white me-2">
              Facebook
            </a>
            <a href="#" className="text-white me-2">
              Twitter
            </a>
            <a href="#" className="text-white">
              Instagram
            </a>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Col className="mt-3 text-center">
          <p>
            &copy; {new Date().getFullYear()} My Website. All rights reserved.
          </p>
        </Col>
      </div>
    </footer>
  );
}

export default Footer;
