import React, { useEffect, useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { useCart } from "../CartContext";
import OffCanvasCart from "./OffCanvasCart";

function App() {
  const [data, setData] = useState([]);
  const [addedProducts, setAddedProducts] = useState(new Set()); // Track added products
  const { addToCart, showCart, handleCloseCart, cart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProducts((prev) => new Set(prev).add(product.id)); // Add product ID to the set
  };

  return (
    <div className="App">
      <div className="row">
        {data.map((info) => (
          <ProductCard
            key={info.id}
            info={info}
            addToCart={handleAddToCart}
            isAdded={addedProducts.has(info.id)} // Check if product is added
          />
        ))}
      </div>
      <OffCanvasCart
        showCart={showCart}
        handleCloseCart={handleCloseCart}
        cartItems={cart}
      />
    </div>
  );
}

function ProductCard({ info, addToCart, isAdded }) {
  return (
    <Col xs={12} sm={12} md lg={4}>
      <Card className="mb-3">
        <Card.Body>
          <Card.Img
            variant="top"
            src={info.image}
            className="card-image mb-2"
          />
          <Card.Title>{info.title.slice(0, 20) + "..."}</Card.Title>
          <Card.Text>{info.description.slice(0, 60) + "..."}</Card.Text>
          <Card.Text className="price-text">Rs. {info.price}</Card.Text>
          <Button
            variant="primary"
            onClick={() => addToCart(info)}
            disabled={isAdded} // Disable button if product is added
          >
            {isAdded ? "Added" : "Add to cart"}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default App;
