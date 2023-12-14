import { useContext } from 'react';

import { Link } from 'react-router-dom';

function Product({ product}) {
  // console.log(product);
  const { id, image, title, price } = product;

    return (
      <>
        <Link to={`/product/${id}`}>
          <img src={image} alt='' />
        </Link>
        <Link to={`/product/${id}`}>
          <div>{title}</div>
        </Link>
        <div>${price}</div>
      </>
    );
  }
  
  export default Product;
  