import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"
          style={{backgroundColor: "#000000"}}>
            <Button color="red" colorName="Red" setColor={setColor}/>
            <Button color="green" colorName="Green" setColor={setColor}/>
            <Button color="gray" colorName="Gray" setColor={setColor}/>
          </div>
        </div>
      </div>
    </>
  )
}

/* 
   setColor={setColor}
   You are passing setColor function as props not object
*/
export default App
