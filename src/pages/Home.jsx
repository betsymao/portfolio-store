// Libraries
import { Link } from 'react-router-dom';

// React Bootstrap Components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <>
      <Row className="g-0">
        <Col md="6" lg="6" className="p-0">
          <Link to="/men">
            <div className="hero-img-container">
                <picture>
                  <source media="(min-width: 1200px)" 
                        srcSet="/src/assets/hero-men-xl.jpg" />
                  <img
                    src="/src/assets/hero-men-l.jpg"
                    alt="Image link to men's clothing" />
                </picture>
              <div className="overlay">
                <div className="overlay-content">
                  <p className="hero-text">Men</p>
                </div>
              </div>
            </div>
          </Link>
        </Col>
        <Col md="6" lg="6" className="p-0">
          <Link to="/women">
            <div className="hero-img-container">
                <picture>
                    <source media="(min-width: 1200px)"
                            srcSet="/src/assets/hero-women-xl.jpg" />
                    <img
                      src="/src/assets/hero-women-l.jpg"
                      alt="Image link to women's clothing" />
                  </picture>
              <div className="overlay">
                <div className="overlay-content">
                  <p className="hero-text">Women</p>
                </div>
              </div>
            </div>
          </Link>
        </Col>
      </Row>
    </>
  );
}
  
export default Home;