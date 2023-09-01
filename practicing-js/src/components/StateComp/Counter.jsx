import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <>
        <h1>Counter</h1>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Aumentar</button>
        <button onClick={() => setCount(count - 1)}>Diminuir</button>
        <button onClick={() => setCount(count * count)}>Multiplicar</button>
        <button onClick={() => setCount(count / 2)}>Dividir por 2</button>
    </>
  )
}

export default Counter