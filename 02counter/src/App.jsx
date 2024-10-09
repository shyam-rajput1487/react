import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)
  const add=()=>{
    if(counter<20){
      setCount(counter+1)
    }
  }

  const remove=()=>{
    if (counter>0) {
      setCount(counter-1)
    }
   
  }

  return (
    <>
    
      <h1>Youtube Fun with react</h1>
     <h2>Counter value: {counter}</h2>
 
     <button onClick={add}>Add value</button>
     <button onClick={remove}>Remove value</button>
      
    
    </>
  )
}

export default App
