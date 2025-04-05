import {useEffect, useState} from "react";

/**
 * Get or retrieve key value pair data
 *
 * @param {string} key - Key value pair
 * @param initialValue
 */
export function useLocalStorage<T>(key: string, initialValue: T){
    const [storage, setStorage] = useState(() => {
        try {
            const item = localStorage.getItem(key);

            return item ? JSON.parse(item) : initialValue;
        } catch (error: unknown) {
            console.error(`useLocalStorage - useState Error: ${key} - ${error} `);

            return initialValue;
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(initialValue));
        } catch (error: unknown) {
            console.error(`useLocalStorage - useEffect Error: ${key} - ${error} `);
        }
    }, [key, storage]);

    return [storage, setStorage] as const;
}