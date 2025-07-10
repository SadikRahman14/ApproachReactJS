import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
   const [counter, setCounter] = useState(0)

  
   const increaseValue = () => {
      if(counter < 20)
         setCounter(counter + 1)
      else console.log("Not Anymore");    
  }

   const decreaseValue = () => {
      if(counter >= 1)
         setCounter(counter-1)
      else console.log("Not Anymore");
  }
  
  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={increaseValue}> Increase Value </button>
      <br /> <br />
      <button onClick={decreaseValue}> Decrease Value </button>
      <p>Whats Up {counter}</p>

    </>
  )
}

export default App
