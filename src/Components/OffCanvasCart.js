import React from "react";
import { Offcanvas, ListGroup, Button } from "react-bootstrap";
import { useCart } from "../CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function OffCanvasCart({ showCart, handleCloseCart, cartItems = [] }) {
  const { increaseQuantity, decreaseQuantity } = useCart();

  // Calculate the grand total
  const grandTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Offcanvas show={showCart} onHide={handleCloseCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length === 0 ? (
          <div>Your cart is empty</div>
        ) : (
          <>
            <ListGroup>
              {cartItems.map((item, index) => (
                <ListGroup.Item key={index}>
                  <div className="d-flex align-items-center">
                    <div className="image-block">
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: "50px" }}
                      />
                    </div>
                    <div className="content-block ms-3">
                      <span className="title-name">{item.title.slice(0, 20) + "..."}</span>
                      <span>
                        {item.description.slice(0, 50) + "..."}
                      </span>
                      <div className="d-flex align-items-center mt-2">
                        <Button variant="light" size="sm" onClick={() => decreaseQuantity(item.id)}>
                          <FontAwesomeIcon icon={faMinus} />
                        </Button>
                        <span className="mx-2">{item.quantity}</span>
                        <Button variant="light" size="sm" onClick={() => increaseQuantity(item.id)}>
                          <FontAwesomeIcon icon={faPlus} />
                        </Button>
                      </div>
                      <span className="price-block">Rs. {(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <div className="mt-3">
              <h5 className="text-align-right">Grand Total: Rs. {grandTotal.toFixed(2)}</h5>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default OffCanvasCart;
