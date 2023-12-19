// React Router Dom
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductMen from './pages/ProductMen';
import ProductWomen from './pages/ProductWomen';
import ProductDetails from './pages/ProductDetails';
import Error from './pages/Error';

// Components
import Layout from './components/layout/Layout';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/men' element={<ProductMen />} />
          <Route path='/women' element={<ProductWomen />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
