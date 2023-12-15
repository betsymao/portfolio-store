import { Link } from 'react-router-dom';

// React Bootstrap Components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
    return (
      <>
        <Row>
          <Col>
            <Navbar collapseOnSelect expand="sm" sticky="top">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <div>
                  <Link to='/men'>
                    <div>Men</div>
                  </Link>

                  <Link to='/women'>
                  <div>Women</div>
                  </Link>
                </div>
              </Navbar.Collapse>
            </Navbar>
          </Col>

          <Col>
            <Navbar.Brand>
              <div>LOGO</div>
            </Navbar.Brand>
          </Col>
          
          <Col>
            <div>ICON</div>
          </Col>
        </Row>
      </>
    );
  }
  
  export default Header;
  