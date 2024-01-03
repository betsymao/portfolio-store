// Libraries
import { createContext, useState, useEffect } from 'react';

// Create context
const ProductContext = createContext();

export function ProductProvider ({ children }) {
    // Declare products state
    const [products, setProducts] = useState([]);
    
    // Connect to API and get data
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;