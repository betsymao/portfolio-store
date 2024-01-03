// Libraries
import { useContext } from 'react';

// Contexts
import ProductContext from '../contexts/ProductContext.jsx';

// Components
import Product from '../components/features/Product.jsx';

// React Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProductWomen() {
  // Use product context
  const { products } = useContext(ProductContext);

  // Filter and get products by category
  const filteredProducts = products.filter(item => {
    return item.category === `women's clothing`;
  });

  return (
    <>
      <Container>
        <main className="body-content">
          <Row>
            {filteredProducts.map(product => {
              return (
                <Col key={product.id} lg="6" className="my-5">
                  <Product key={product.id} product={product} />
                </Col>
              );
            })}
          </Row>
        </main>
      </Container>
    </>
  );
}

export default ProductWomen;