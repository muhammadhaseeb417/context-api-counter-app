import { useContext, useState } from 'react'
import Counter from './components/Counter-Component'
import { counterContext, CounterProvider } from './context/Counter-Context'

function App() {
  const counterState = useContext(counterContext)

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
