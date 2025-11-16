import Counter from './components/Counter-Component'
import { useCounter } from './context/Counter-Context'

function App() {
  const counterState = useCounter()

  return (
    <>
      <h1>Context API - Counter App React </h1>
      <h2>Count is: {counterState.count}</h2>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  )
}

export default App
