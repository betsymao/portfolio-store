// React Bootstrap Components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <>
      <footer>
        <Row>
          <Col md="6">
            <div>
              <h4>About OKAPI</h4>
              <p>
                OKAPI is a contemporary clothing brand based in Australia. Our products are made from high-quality fabrics and crafted with unique detailing. We carefully source our materials and operate sustainable practices to reduce our environmental impact on the planet.
              </p>
            </div>
          </Col>
          <Col md="6">
            <div>
            <h4>Customer Service</h4>
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
      </footer>
    </>
  );
}

export default Footer;
