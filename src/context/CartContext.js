import { createContext, useState } from "react";

export const CartContext = createContext([]);
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [totalCount, setTotalCount] = useState(0)

    const addToCart = (item) => {
        setCart([...cart, item]);
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    }

    const countCart = () => {
        return cart.reduce((acc, prod) => acc + prod.count, 0);
    }

    const totalPriceCart  = () => {
        return cart.reduce((acc, prod) => acc + prod.count * prod.price, 0);
    }

    const cleanCart = () => {
        return setCart([]);
    }

    const cleanItem = (id) => {
        return setCart(cart.filter((prod) => prod.id !== id));
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            countCart, 
            totalPriceCart,
            cleanCart,
            cleanItem
        }}>

        {children}
        </CartContext.Provider>
    )
}