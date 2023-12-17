import { useContext } from 'react';

// Product Context
import ProductContext from '../contexts/ProductContext.jsx';

// Components
import Product from '../components/features/Product.jsx';

// React Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
        <Container className="py-5">
          <main className="px-3 pt-5">
            <Row>
              {filteredProducts.map(product => {
                return (
                  <Product key={product.id} product={product} />
                );
              })}
            </Row>
          </main>
        </Container>
      </>
    );
}

export default ProductMen;