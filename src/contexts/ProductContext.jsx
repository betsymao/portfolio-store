import { createContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            console.log(data);
            setProducts(data);
        };
        fetchProducts();
    });

    return (
        <ProductContext.Provider>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;
