import { useContext } from "react"
import { counterContext } from "../context/Counter-Context"

function Counter() {
    const counterState = useContext(counterContext)

    return (
        <div>
            <button onClick={() => counterState.setCount(counterState.count + 1)}>Increment</button>
            <button onClick={() => counterState.setCount(counterState.count - 1)}>Decrement</button>
        </div>
    )
}

export default Counter