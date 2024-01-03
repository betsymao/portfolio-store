// Libraries
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// Cart Context
import CartContext from '../../contexts/CartContext';

// React component to render cart item
function CartItem({ item }) {
    // Destructure item
    const { id, image, title, price, quantity } = item;

    // Use functions from context
    const { removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);

    return (
      <>
        <div className="cart-items-container">
            <div className="close-btn" onClick={() => removeFromCart(id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="icon bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </div>


            <div className="d-flex">
                <div className="cart-content">
                    <Link to={`/product/${id}`}>
                        <img src={image} alt={title} />
                    </Link>
                </div>

                <div className="cart-content">
                    <Link to={`/product/${id}`}>
                        <p>{title}</p>
                    </Link>
                
                    <p className="m-0">${price}</p>

                    <h6 className="qty-subtitle">Quantity</h6>
                    <div className="d-flex">
                        <div onClick={() => decrementQuantity(id) }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                            </svg>
                        </div>

                        <div className="qty">
                            {quantity}
                        </div>

                        <div onClick={() => incrementQuantity(id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }

export default CartItem;