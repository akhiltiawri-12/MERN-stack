import React from 'react'
import { useContext } from 'react'
import { postmanContext } from './App'

const 
 = () => {
  const data = useContext(postmanContext)
  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <p>Salary: {data.salary}</p>
    </div>
  )
}

export default 

