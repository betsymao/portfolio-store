import { useContext } from 'react';

// useParams
import { useParams } from 'react-router-dom';

// Product Context
import ProductContext from '../contexts/ProductContext';

// Cart Context
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
      <p>Loading ...</p>
    );
  }

  const { image, title, category, price, description } = product;

    return (
      <>
      <Container>
        <Row>
            <Col md="6" lg="6">
              <div>
                <img src={image} alt={title} />
              </div>
            </Col>
            <Col md="6" lg="6">
              <div>
                <h2>{title}</h2>
                <h4>{category}</h4>
                <h3>${price}</h3>
                <p>{description}</p>
                <button className="btn btn-primary" onClick={() => addToCart(product, product.id)}>Add to Cart</button>
              </div>
            </Col>
          </Row>
      </Container>
      </>
    );
  }
  
  export default ProductDetails;