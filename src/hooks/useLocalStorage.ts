import { useEffect, useState } from "react";

/*T is a generic type, initialValue would either be a type of T or a function that returns a type of T
type of T is whatever we pass to the useLocalStorage hook when using it (<CartItem[]>)*/
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
    //we are using a function in usestate so that we check localstorage just once (its a slow operation)
    const [value, setValue] = useState<T>(() => {
        const jsonValue = localStorage.getItem(key);
        if (jsonValue != null) return JSON.parse(jsonValue);
        if (typeof initialValue === 'function') {
            return (initialValue as ()=> T)()
        } else {
            return initialValue
        }
    })

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    
    return [value, setValue] as [typeof value, typeof setValue]
}