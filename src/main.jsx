import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// React Router Dom
import { BrowserRouter } from 'react-router-dom';

// Product Provider
import { ProductProvider } from './contexts/ProductContext.jsx';

// React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ProductProvider>
);
