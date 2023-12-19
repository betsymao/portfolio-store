import { Link } from 'react-router-dom';
import { useContext } from 'react';

// Cart Context
import CartContext from '../../contexts/CartContext';

// React Bootstrap Components
import Col from 'react-bootstrap/Col';

function Product({ product}) {
  const { addToCart } = useContext(CartContext);
  const { id, image, title, price } = product;

    return (
      <>
        <Col lg="6">
          <div className="productCard d-flex flex-column">
            <Link to={`/product/${id}`}>
              <img src={image} alt={title} />
            </Link>

            <div className="mt-auto">
              <div className="d-flex justify-content-between">
                <div>
                  <Link to={`/product/${id}`}>
                    {title}
                  </Link>
                </div>

                <div>
                  <button onClick={() => addToCart(product, id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div>${price}</div>
            </div>
          </div>
        </Col>
      </>
    );
  }
  
  export default Product;
  