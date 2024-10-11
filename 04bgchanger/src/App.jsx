import { useState } from 'react'


function App() {
  const [color, setColor] = useState()

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}></div>
      
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl"><button className="outline-none px-4 rounded-full" style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}} >red</button></div>
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl"><button className="outline-none px-4 rounded-full" style={{backgroundColor:"blue"}} onClick={()=>{setColor("blue")}}>blue</button></div>
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl"><button className="outline-none px-4 rounded-full" style={{backgroundColor:"green"}} onClick={()=>{setColor("green")}}>green</button></div>
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl"><button className="outline-none px-4 rounded-full" style={{backgroundColor:"Yellow"}} onClick={()=>{setColor("Yellow")}}>Yellow</button></div>
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl"><button className="outline-none px-4 rounded-full" style={{backgroundColor:"brown"}} onClick={()=>{setColor("brown")}}>brown</button></div>
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl"><button className="outline-none px-4 rounded-full" style={{backgroundColor:"olive"}} onClick={()=>{setColor("olive")}}>olive</button></div>
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl"><button className="outline-none px-4 rounded-full" style={{backgroundColor:"pink"}} onClick={()=>{setColor("pink")}}>pink</button></div>
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl"><button className="outline-none px-4 rounded-full" style={{backgroundColor:"grey"}} onClick={()=>{setColor("grey")}}>grey</button></div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
