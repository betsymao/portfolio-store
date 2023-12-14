import { useContext } from 'react';

// Product Context
import ProductContext from '../contexts/ProductContext.jsx';

// Components
import Product from '../components/features/Product.jsx'

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
        {filteredProducts.map(product => {
          return (
            <Product key={product.id} product={product} />
          );
        })}
      </>
    );
}

export default ProductWomen;