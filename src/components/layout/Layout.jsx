// Libraries
import { Outlet } from 'react-router-dom';

// Components
import Header from './Header';
import Footer from './Footer';

function Layout() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer date={new Date().getFullYear()} />
      </>
    );
  }
  
  export default Layout;