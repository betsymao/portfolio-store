import { useContext } from 'react';

// Components
import CartItem from '../components/features/CartItem';

// Cart Context
import CartContext from '../contexts/CartContext';

// React Bootstrap Components
import Container from 'react-bootstrap/Container';

function Cart() {
    const { cart } = useContext(CartContext);

    return (
      <>
        <Container className="pt-5">
            <h1>Cart</h1>
            {cart.length === 0 && <h2>No items</h2>}
            {cart.map(item => {
                return (
                    <CartItem key={item.id} item={item} />
                );
            })}
            
        </Container>
      </>
    );
}

export default Cart;