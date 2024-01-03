// Libraries
import { createContext, useState, useEffect } from 'react';

// Create context
const CartContext = createContext();

export function CartProvider ({ children }) {
    // Access empty cart or cart data stored in local storage
    const cartLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');

    // Declare states
    const [cart, setCart] = useState(cartLocalStorage);
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // On each rerender, set value of cart
        localStorage.setItem('cart', JSON.stringify(cart));

        // If there is cart data
        if (cart) {
            // Add the quantity of cart items
            const quantity = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.quantity;
            }, 0);
            // Update quantity state
            setQuantity(quantity);
        }

        // Add up the total sum of cart items
        const total = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.quantity;
        }, 0);
        // Update total sum state
        setTotal(total);
    }, [cart]);

    // Function addToCart adds a product to the cart
    // Parameters product and id store product data
    const addToCart = (product, id) => {
        const newCartItem = {...product, quantity: 1};

        // Check if item is in cart
        const cartItem = cart.find((item) => {
            return item.id === id;
        });

        // If it is
        if (cartItem) {
            // Map through the cart
            const newCart = [...cart].map(item => {
                // If id matches, increment quantity
                if (item.id === id) {
                    return { ...item, quantity: cartItem.quantity + 1 };
                } else {
                    return item;
                }
            });
            // Update cart state
            setCart(newCart);
        // Otherwise add item to cart and update cart state
        } else {
            setCart([...cart, newCartItem]);
        }
    };

    // Filter through cart return items that do are not equal to id provided as a parameter
    const removeFromCart = (id) => {
        const newCart = cart.filter(item => {
            return item.id !== id;
        });
        setCart(newCart);
    };

    const incrementQuantity = (id) => {
        // Find and return cart item where ids are matching
        const cartItem = cart.find((item) => item.id === id);
        // Call function to add item to cart
        addToCart(cartItem, id);
    };

    const decrementQuantity = (id) => {
        // Find and return cart item where ids are matching
        const cartItem = cart.find((item) => {
            return item.id === id
        });
        // If item exists
        if (cartItem) {
            // Map through the cart
            const newCart = cart.map(item => {
                // If id matches, decrement quantity
                if (item.id === id) {
                    return { ...item, quantity: cartItem.quantity - 1 };
                } else {
                    return item;
                }
            });
            // Update cart state
            setCart(newCart);
        }
        
        // If cart item quantity is 1
        if (cartItem.quantity < 2) {
            // Call function to remove from cart
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