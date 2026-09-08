import React from 'react'
import {useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default App
