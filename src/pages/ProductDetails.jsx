// Libraries
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

// Contexts
import ProductContext from '../contexts/ProductContext';
import CartContext from '../contexts/CartContext';

// React Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProductDetails() {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const product = products.find(item => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <Container>
        <div className="body-content">
          <p className="m-0">Loading ...</p>
        </div>
      </Container>
    );
  }

  const { image, title, price, description } = product;

    return (
      <>
      <Container>
        <div className="body-content">
          <Row>
              <Col md="6" lg="6">
                <div className="mb-5">
                  <img src={image} alt={title} />
                </div>
              </Col>
              <Col md="6" lg="6">
                <div>
                  <h2>{title}</h2>
                  <h4>${price}</h4>
                  <p>{description}</p>
                  <button className="okapi-btn" onClick={() => addToCart(product, product.id)}>Add to Cart</button>
                </div>
              </Col>
            </Row>
        </div>
      </Container>
      </>
    );
  }
  
  export default ProductDetails;