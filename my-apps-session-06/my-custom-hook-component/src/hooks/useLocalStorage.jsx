import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {

    const [value, SetValue] = useState(() => {
        const localState = localStorage.getItem(key);
        return localState ? JSON.parse(localState) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));        
    }, [value, key])
    
    return [value, SetValue];
}

export { useLocalStorage };