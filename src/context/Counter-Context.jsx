import { createContext, useState } from "react";

export const counterContext = createContext(null)

export function CounterProvider(props) {
    const [count, setCount] = useState(4)

    return (
        <counterContext.Provider value={{ count, setCount }}>{props.children}</counterContext.Provider>
    )
}