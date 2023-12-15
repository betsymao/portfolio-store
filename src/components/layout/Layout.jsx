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
          <main>
            <Outlet />
          </main>
          <Footer />
        </Container>
      </>
    );
  }
  
  export default Layout;
  