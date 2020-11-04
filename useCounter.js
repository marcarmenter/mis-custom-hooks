import { useState } from "react"

export const useCounter = (initialState = 10) => {
    
    const [state, setstate] = useState(initialState);

    const increment = (factor = 1) => {
        setstate(c => c + factor);
    };

    const decrement = (factor = 1) => {
        setstate(c => c - factor);
    };

    const reset = () => {
        setstate(initialState);
    };

    return {
        state,
        increment,
        decrement,
        reset
    };
}
