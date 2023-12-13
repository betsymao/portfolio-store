// React Router Dom
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Error from './pages/Error';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
