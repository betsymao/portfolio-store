import { useContext } from 'react';

import { Link } from 'react-router-dom';

// React Bootstrap Components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Product({ product}) {
  // console.log(product);
  const { id, image, title, price } = product;

    return (
      <>
          <Col md="6">
            <Link to={`/product/${id}`}>
              <div>
                {/* <img src={image} alt='' /> */}
                PRODUCT IMG
              </div>
          </Link>

          <Row>
            <Col>
              <Link to={`/product/${id}`}>
                <div>{title}</div>
              </Link>
            </Col>
            <Col>
              <div>ICON</div>
            </Col>
          </Row>

          <div>${price}</div>
          </Col>
      </>
    );
  }
  
  export default Product;
  