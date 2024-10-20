import React, { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const useCart = () => (
    useContext(CartContext)
)

export const CartProvider = ({ children }) => {
    const [cartValue, setCartValue] = useState(0)

    const addToCart = () => {
        setCartValue(prev => prev + 1)
    }
    return (
        <CartContext.Provider value={{ cartValue, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}