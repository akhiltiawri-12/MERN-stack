import React from 'react'
import Child from './Child'

const App = () => {
    const [name, setName] = useState("");

  return (
    <div>
      <Child  name= {name} setName={setName} />
      <h1>{name}</h1>
    </div>
  )
}

export default App

    </div>
  )
}

export default App
