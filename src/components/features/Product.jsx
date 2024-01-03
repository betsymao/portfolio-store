// Libraries
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// Contexts
import CartContext from '../../contexts/CartContext';

function Product({ product }) {
  // Use function from context
  const { addToCart } = useContext(CartContext);
  
  // Destructure product
  const { id, image, title, price } = product;

    return (
      <>
        <div className="product-card p-1">
          <div className="product-details">
            <div className="product-price">
              ${price}
            </div>

            <div className="d-flex justify-content-between">
              <div>
                <Link to={`/product/${id}`}>
                  {title}
                </Link>
              </div>
              <div>
                <button className="add-btn" onClick={() => addToCart(product, id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="productImage">
            <Link to={`/product/${id}`}>
              <img className="productImage" src={image} alt={title} />
            </Link>
          </div>
        </div>
      </>
    );
  }

export default Product;