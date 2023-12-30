import { Link } from 'react-router-dom';
import { useContext } from 'react';

// React Bootstrap Components
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// Cart Context
import CartContext from '../../contexts/CartContext';

// Assets
import Logo from '../../assets/logo.svg';

function Header() {
  const { quantity } = useContext(CartContext);

    return (
      <>
        <header>
          <Container>
            <Navbar collapseOnSelect expand="sm" className="justify-content-between">
              <div className="header-menu">
                <Navbar.Toggle />
                <Navbar.Collapse>
                  <Nav>
                    <li className="header-nav-list-item">
                      <Link to='/men'>
                        Men
                      </Link>
                    </li>
                    <li className="header-nav-list-item">
                      <Link to='/women'>
                        Women
                      </Link>
                    </li>
                  </Nav>
                </Navbar.Collapse>  
              </div>            

              <Navbar.Brand className="m-0">
                <div className="logo">
                  <Link to='/'>
                    <img src={Logo} />
                  </Link>
                </div>
              </Navbar.Brand>

              <div className="cart justify-self-end d-flex">
                <Nav>
                    <li className="cart-list-item">
                      <Link to='/cart'>
                        Cart
                      </Link>
                    </li>
                    <li className="cart-list-item">
                    &nbsp;({quantity})
                    </li>
                  </Nav>
              </div>
            </Navbar>
          </Container>
        </header>
      </>
    );
  }
  
  export default Header;
  