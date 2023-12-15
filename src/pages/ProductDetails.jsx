// React Bootstrap Components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProductDetails() {
    return (
      <>
        <Row>
          <Col md="6" lg="6">
            <div>
              IMG
            </div>
          </Col>
          <Col md="6" lg="6">
            <div>
              PRODUCT DESCRIPTION
            </div>
          </Col>
        </Row>
      </>
    );
  }
  
  export default ProductDetails;