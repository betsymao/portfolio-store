import { useContext } from 'react';

// Product Context
import ProductContext from '../contexts/ProductContext.jsx';

// Components
import Product from '../components/features/Product.jsx'

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
        {filteredProducts.map(product => {
          return (
            <Product key={product.id} product={product} />
          );
        })}
      </>
    );
}

export default ProductMen;