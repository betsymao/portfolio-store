import { Outlet } from 'react-router-dom';

// Components
import Header from './Header';
import Footer from './Footer';

// React Bootstrap Components
import Container from 'react-bootstrap/Container';

function Layout() {
    return (
      <>
        <Container>
          <Header />
        </Container>
        
        <Outlet />

        <Container>
          <Footer date={new Date().getFullYear()} />
        </Container>
      </>
    );
  }
  
  export default Layout;
  