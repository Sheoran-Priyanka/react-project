import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let counter = 15 ase nhi useState ka use krke krna h taki hr jgah jha bhi counter react automatically update kr de counter ki value
  let [counter, setCounter] = useState(15);
  const addValue = ()=>{
    // counter = counter+1;
    if(counter+1 <= 20)
    setCounter(counter+1);
  }
  const RemoveValue = ()=>{
    // counter = counter+1;
    if(counter-1 >= 0)
    setCounter(counter-1);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick = {addValue}>Add value {counter}</button>
      <br/>
      <button onClick = {RemoveValue}>Remove value {counter}</button>
    </>
  )
}

export default App
