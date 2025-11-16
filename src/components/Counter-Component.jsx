import { useCounter } from "../context/Counter-Context"

function Counter() {
    const counterState = useCounter()

    return (
        <div>
            <button onClick={() => counterState.setCount(counterState.count + 1)}>Increment</button>
            <button onClick={() => counterState.setCount(counterState.count - 1)}>Decrement</button>
        </div>
    )
}

export default Counter