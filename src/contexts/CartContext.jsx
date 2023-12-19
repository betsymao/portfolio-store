import { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider ({ children }) {
    const cartLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
    const [cart, setCart] = useState(cartLocalStorage);

    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        if (cart) {
            const quantity = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.quantity;
            }, 0);
            setQuantity(quantity);
        }

        const total = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.quantity;
        }, 0);
        setTotal(total);
    }, [cart]);

    // Function addToCart adds a product to the cart
    // Parameters product and id store product data
    const addToCart = (product, id) => {
        const newCartItem = {...product, quantity: 1};

        // Find and return cart item by id
        const cartItem = cart.find((item) => {
            return item.id === id;
        });

        // If cartItem exists
        if (cartItem) {
            const newCart = [...cart].map(item => {
                if (item.id === id) {
                    return { ...item, quantity: cartItem.quantity + 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, newCartItem]);
        }
    };

    const removeFromCart = (id) => {
        const newCart = cart.filter(item => {
            return item.id !== id;
        });
        setCart(newCart);
    };

    const incrementQuantity = (id) => {
        const cartItem = cart.find((item) => item.id === id);
        addToCart(cartItem, id);
    };

    const decrementQuantity = (id) => {
        const cartItem = cart.find((item) => {
            return item.id === id
        });
        if (cartItem) {
            const newCart = cart.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: cartItem.quantity - 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        }
            
        if (cartItem. quantity < 2) {
            removeFromCart(id);
        }
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            incrementQuantity,
            decrementQuantity,
            quantity,
            total,
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;