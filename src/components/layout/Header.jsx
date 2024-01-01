import { Link } from 'react-router-dom';
import { useContext } from 'react';

// React Bootstrap Components
import Container from 'react-bootstrap/Container';

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
            <div className="nav-bar">
              <div>                
                <Link className="p-0" to="/">
                  <img className="nav-brand" src={Logo} alt="Okapi Logo" />
                </Link>
              </div>

              <nav>
                <ul className="nav-menu">
                    <li className="nav-item">
                      <Link to="/men">
                        Men
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/women">
                        Women
                      </Link>
                    </li>
                </ul>
              </nav>

              <div className="nav-cart">
                <Link to="/cart">
                  Cart
                </Link>
                <span>
                  &nbsp;({quantity})
                </span>
              </div>
            </div>
          </Container>
        </header>
      </>
    );
  }
  
  export default Header;
  