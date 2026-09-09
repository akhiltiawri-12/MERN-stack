import React from 'react'
import { useMemo } from 'react'
import  { useState } from 'react'

const App = () => {
  const [ count, setCount] =useState(0);

   function sum () {
    console.log("sum function called");
    let sum = 0;
    for (let i = 0; i < 100000; i++) {
      sum += i;
    }
    return sum;
   }
   let res = useMemo(sum,[]);
   const handleClick =() => {
    setCount(count + 1);
   }
  return (
    <div>
      <h1> value of heavy computation is : {res}</h1>
      <p> count is : {count}</p>
      <button onClick={()=>setCount(count + 1)}>Increment</button>
      
    </div>
  )
}

export default App
