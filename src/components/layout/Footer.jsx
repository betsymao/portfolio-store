// React Bootstrap Components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <>
      <Row>
        <Col md="6">
          <div>
            About OKAPI
          </div>
        </Col>
        <Col md="6">
          <div>
            Customer Service
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            Copyright
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Footer;
