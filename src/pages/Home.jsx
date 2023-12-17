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
            <img
              srcSet="/src/assets/hero-men-s.jpg 320w,
                      /src/assets/hero-men-w.jpg 600w,
                      /src/assets/hero-men-l.jpg 1200w,
                      /src/assets/hero-men-xl.jpg 1920w"
              sizes="(min-width: 1200px) 1200px, 100vw"
              src="/src/assets/hero-men.jpg"
              alt="img alt" />
              <Link to="/men">Men</Link>
          </div>
        </Col>
        <Col md="6" lg="6" className="p-0">
          <div>
            <img
              srcSet="/src/assets/hero-women-s.jpg 320w,
                      /src/assets/hero-women-w.jpg 600w,
                      /src/assets/hero-women-l.jpg 1200w,
                      /src/assets/hero-women-xl.jpg 1920w"
                sizes="(min-width: 1200px) 1200px, 100vw"
                src="/src/assets/hero-women.jpg"
                alt="img alt" />
              <Link to="/women">Women</Link>
          </div>
        </Col>
      </Row>
    </>
  );
}
  
export default Home;
  