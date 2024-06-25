import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Col } from "react-bootstrap";
import aboutImg from "../about-img.jpg";
import cardImg from "../card-img.jpg";

const cardData = [
  {
    id: 1,
    image: cardImg,
    title: "Card 1",
    text: "Some quick example text for Card 1.",
  },
  {
    id: 2,
    image: aboutImg,
    title: "Card 2",
    text: "Some quick example text for Card 2.",
  },
  {
    id: 3,
    image: cardImg,
    title: "Card 3",
    text: "Some quick example text for Card 3.",
  },
];

const CardComponent = () => {
  return (
    <>
      {cardData.map((card) => (
        <Col xs={12} sm={12} md lg={4}>
          <Card key={card.id}>
          <Card.Img variant="top" src={card.image} className="card-image" />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default CardComponent;
