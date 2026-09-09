import React from 'react'
import Card from './Card'
import Skelton from './skelton'
import {useState , useEffect} from 'react'

const App = () => {

    const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }
  return (
    <div>
     {loading ? <Skelton /> : <Card />}
    </div>
  )
}

export default App
