import { Link } from 'react-router-dom';

// React Bootstrap Components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <>
      <Row className="g-0">
        <Col md="6" lg="6" className="p-0">
          <div>
            <Link to="/men">
              <picture>
                <source media="(min-width: 1200px)" 
                      srcSet="/src/assets/hero-men-xl.jpg" />
                <img
                  src="/src/assets/hero-men-l.jpg"
                  alt="Image link to men's clothing" />
              </picture>
            </Link>
          </div>
        </Col>
        <Col md="6" lg="6" className="p-0">
          <div>
            <Link to="/women">
              <picture>
                <source media="(min-width: 1200px)"
                        srcSet="/src/assets/hero-women-xl.jpg" />
                <img
                  src="/src/assets/hero-women-l.jpg"
                  alt="Image link to women's clothing" />
              </picture>
              </Link>
          </div>
        </Col>
      </Row>
    </>
  );
}
  
export default Home;
  