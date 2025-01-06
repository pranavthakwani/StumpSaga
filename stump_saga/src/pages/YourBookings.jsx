import React from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Table, Button } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";

const YourBookings = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const deleteItem = (id) => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <Helmet title="Your Bookings">
      <CommonSection title="Your Bookings" />
      <section className="cart-page">
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">You have not booked any slots yet.</h5>
              ) : (
                <Table bordered>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Ground Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <CartItem key={item.id} item={item} deleteItem={deleteItem} />
                    ))}
                  </tbody>
                </Table>
              )}

              {cartItems.length > 0 && (
                <div className="mt-4">
                  <h6>
                    Subtotal: ₹<span className="cart-subtotal">{totalAmount}</span>
                  </h6>
                  <div className="cart-page-btn">
                    <Button className="continue-booking-btn">
                      <Link to="/grounds">Continue Booking</Link>
                    </Button>
                    <Button className="checkout-btn">
                      <Link to="/checkout">Proceed to Checkout</Link>
                    </Button>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const CartItem = ({ item, deleteItem }) => {
  const { id, image01, title, price, quantity } = item;

  return (
    <tr>
      <td className="text-center cart-img-box">
        <img src={image01} alt={title} />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">₹{price}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center cart-item-del">
        <Button color="danger" onClick={() => deleteItem(id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default YourBookings;
