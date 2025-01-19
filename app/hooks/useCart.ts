import { useState } from "react";

const useCart = () => {
    const [totalValue, setTotalValue] = useState<number>(0);

    const addToCart = (value: number) => {
        setTotalValue((prevValue) => prevValue + value);
    };

    const removeFromCart = (value: number) => {
        setTotalValue((prevValue) => {
            const newValue = prevValue - value;
            return newValue < 0 ? 0 : newValue;
        });
    };

    return {
        totalValue,
        addToCart,
        removeFromCart
    };
};
export default useCart;
