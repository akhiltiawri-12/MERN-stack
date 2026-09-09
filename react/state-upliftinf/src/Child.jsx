import React from 'react'

const Child = (props) => {
    const handleChange = (e) => {
        props.setName(e.target.value)
    }
  return (
    <div>
        <input>
        onChange= {handleChange}
        type= "text"
        placeholder= "Enter your name"
        
        </input>
        <P>data in child is {props.name}</P>
      
    </div>
  )
}

export default Child
