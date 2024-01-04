// Libraries
import { Link } from 'react-router-dom';

// Assets
import HeroMenXL from '../assets/hero-men-xl.jpg';
import HeroMenL from '../assets/hero-men-l.jpg';
import HeroWomenXL from '../assets/hero-women-xl.jpg';
import HeroWomenL from '../assets/hero-women-l.jpg';

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
                        srcSet={HeroMenXL} />
                  <img
                    src={HeroMenL}
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
                            srcSet={HeroWomenXL} />
                    <img
                      src={HeroWomenL}
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