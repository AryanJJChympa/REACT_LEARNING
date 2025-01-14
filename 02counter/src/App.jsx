import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
  // let counter = 5

  const addValue= ()=>{
    if(counter<20){
    counter+=1
    console.log("Clicked",counter);
    setCounter(counter)

    //3:52:00 Chai aur code React First part
    // setCounter(prevCounter => prevCounter+1)
    // setCounter(prevCounter => prevCounter+1)
    // setCounter(prevCounter => prevCounter+1)
    // setCounter(prevCounter => prevCounter+1)
  }
}
  
  const removeValue= ()=>{
    if(counter>0){
    counter-=1
    console.log("Clicked",counter);
    setCounter(counter)
  }
}

  return (
    <>
    <h1>Aryan Marian</h1>
    <h2>Counter Value: {counter}</h2>
    <button
    onClick={addValue}>Add Value {counter}</button>
    <br />
    <br />
    <button
    onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
