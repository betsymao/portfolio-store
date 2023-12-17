import { Link } from 'react-router-dom';

// React Bootstrap Components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// Assets
import Logo from '../../assets/logo.svg';

function Header() {
    return (
      <>
        <header className="px-3">
          <Navbar collapseOnSelect expand="sm" className="justify-content-between">
            <div>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Nav>
                  <Link to='/men'>
                    <div>Men</div>
                  </Link>

                  <Link to='/women'>
                    <div>Women</div>
                  </Link>
                </Nav>
              </Navbar.Collapse>  
            </div>            

            <Navbar.Brand className="m-0">
              <div>
                <Link to='/'>
                  <img src={Logo} />
                </Link>
              </div>
            </Navbar.Brand>

            <div className="justify-self-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
              </svg>
            </div>
          </Navbar>
        </header>
      </>
    );
  }
  
  export default Header;
  