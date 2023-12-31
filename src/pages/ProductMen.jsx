import { useContext } from 'react';

// Product Context
import ProductContext from '../contexts/ProductContext.jsx';

// Components
import Product from '../components/features/Product.jsx';

// React Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProductMen() {
    const { products } = useContext(ProductContext);
    // console.log(products);
  
    // get category men's clothing
    const filteredProducts = products.filter(item => {
      return item.category === `men's clothing`;
    });
    // console.log(filteredProducts);
  
    return (
      <>
        <Container>
          <main className="body-content">
            <Row>
              {filteredProducts.map(product => {
                return (
                  <Col key={product.id} lg="6" className="my-5">
                    <Product product={product} />
                  </Col>
                );
              })}
            </Row>
          </main>
        </Container>
      </>
    );
}

export default ProductMen;