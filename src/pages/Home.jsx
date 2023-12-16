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
              srcSet="../../public/assets/hero-men-s.jpg 320w,
                      ../../public/assets/hero-men-w.jpg 600w,
                      ../../public/assets/hero-men-l.jpg 1200w,
                      ../../public/assets/hero-men-xl.jpg 1920w"
              sizes="(min-width: 1200px) 1200px, 100vw"
              src="../../public/assets/hero-men.jpg"
              alt="img alt" />
          </div>
        </Col>
        <Col md="6" lg="6" className="p-0">
          <div>
            <img
              srcSet="../../public/assets/hero-women-s.jpg 320w,
                      ../../public/assets/hero-women-w.jpg 600w,
                      ../../public/assets/hero-women-l.jpg 1200w,
                      ../../public/assets/hero-women-xl.jpg 1920w"
                sizes="(min-width: 1200px) 1200px, 100vw"
                src="../../public/assets/hero-women.jpg"
                alt="img alt" />
          </div>
        </Col>
      </Row>
    </>
  );
}
  
export default Home;
  