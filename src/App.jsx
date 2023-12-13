// React Router Dom
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
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
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
