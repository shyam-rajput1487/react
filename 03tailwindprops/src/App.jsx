import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="bg-green-400 p-4 rounded-xl">
        Click on the Vite and React logos to learn more
      </p>
      <Card username="chaiaurcode" />
      <Card username="Hitesh"/>
      <Card username="chaiaur"/>
      <Card />
      <Card />
      <Card />
    </>
  )
}

export default App
