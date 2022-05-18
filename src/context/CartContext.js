import { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Add product to cart

    const addToCart = (item) => {
        setCart([...cart, item]);
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    }

    // Products in cart

    const countCart = () => {
        return cart.reduce((acc, prod) => acc + prod.count, 0);
    }

    // Calculate total price

    const totalPriceCart  = () => {
        return cart.reduce((acc, prod) => acc + prod.count * prod.price, 0);
    }

    // Clean all products

    const cleanCart = () => {
        return setCart([]);
    }

    // Clean product

    const cleanItem = (id) => {
        return setCart(cart.filter((prod) => prod.id !== id));
    }

    // Local storage

    useEffect(() => {
        let cart = localStorage.getItem("cart")
        if (cart) {
            setCart(JSON.parse(cart))
          }
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

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