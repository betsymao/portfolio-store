import { useContext } from 'react';

// Product Context
import ProductContext from '../contexts/ProductContext.jsx';

// Components
import Product from '../components/features/Product.jsx';

// React Bootstrap Components
import Row from 'react-bootstrap/Row';

function ProductWomen() {
    const { products } = useContext(ProductContext);
    // console.log(products);
  
    // get category women's clothing
    const filteredProducts = products.filter(item => {
      return item.category === `women's clothing`;
    });
    // console.log(filteredProducts);
  
    return (
      <>
        <Row>
          {filteredProducts.map(product => {
              return (
                <Product key={product.id} product={product} />
              );
            })}
        </Row>
      </>
    );
}

export default ProductWomen;