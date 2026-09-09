import React from 'react'
import Card from './Card'
import Skelton from './skelton'
import {useState , useEffect} from 'react'

const App = () => {
  return (
    const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }
    <div>
     {loading ? <Skelton /> : <Card />}
    </div>
  )
}

export default App
