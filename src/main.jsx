import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// React Bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';

// React Router Dom
import { BrowserRouter } from 'react-router-dom';

// Product Provider
import { ProductProvider } from './contexts/ProductContext.jsx';

// Cart Provider
import { CartProvider } from './contexts/CartContext.jsx';

// Stylesheet
import './css/main.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <ProductProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </ProductProvider>
  </CartProvider>
);
