import React from 'react'
import Child1 from './Child1'
import {createContext} from 'react'

export const postmanContext = createContext()

const App = () => {
    let data={
        name:"Akhil",
        age:22,
        salary:1123456
    }

const App = () => {
  return (
    <div>
      <postmanContext.Provider value={data}>
        <Child1 />
      </postmanContext.Provider>
    </div>
  )
}

export default App
