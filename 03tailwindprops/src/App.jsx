import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Sadik",
    id: "20220104104"
  }

  return (
    <>
      <Card someObject={myObj}/>
      <Card header="Whatever" content="CSECSECSECSE" btnText="Visit"/>
      <Card/>
      
    </>
  )
}

export default App
