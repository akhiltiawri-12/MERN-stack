import React from 'react'
import {useMemo} from "react"
import {useState } from "react"
const App = () => {
  const [count,setcount ]= useState(0);
  function sum () {
    console.log ("function called");
    let sum = 0;
    for (let i =0; i< 1000000000; i++{
      sum = sum +i;
    })
  }
  return (
    <div>
     <h1></h1> 
    </div>
  )
}

export default App