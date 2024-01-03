// Libraries
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// Components
import CartItem from '../components/features/CartItem';

// Contexts
import CartContext from '../contexts/CartContext';

// React Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cart() {
    const { cart, total } = useContext(CartContext);

    return (
      <>
        <Container>
          <div className="body-content">
          <h1>Cart</h1>
            <Row>
              <Col lg="8">
                    {cart.length === 0 && 
                    <>
                      <p>Your cart is currently empty.</p>
                      <Link to="/">Back to home</Link>
                    </>}
                    {cart.map(item => {
                        return (
                            <CartItem key={item.id} item={item} />
                        );
                    })}
                </Col>

                <Col lg="4">
                {cart.length > 0 &&
                  <div className="cart-box">
                    <h4 className="subtitle">Order Summary</h4>
                    <span className="cart-total">Total:</span> ${parseFloat(total).toFixed(2)}
                    <button className="okapi-btn">Checkout</button>
                  </div>}
              </Col>
            </Row>  
          </div>     
        </Container>
      </>
    );
}

export default Cart;