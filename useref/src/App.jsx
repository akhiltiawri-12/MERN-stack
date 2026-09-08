import React from 'react'
import { useState ,useRef} from 'react'
import "./App.css"

const App = () => {
  const [count, setCount] = useState(0)
  const ref= useRef();
  console.log(ref);

  let a =1;
  const handleClick = () => {
    setCount(count + 1);
    a= a + 1;
    console.log(a);
  };
  return (
    <div>
      <p className=' value of count'>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default App

