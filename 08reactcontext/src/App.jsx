import { useState } from 'react'
import Login from './components/Login'
import UserProfile from './components/UserProfile'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'


function App() {
  return (
    <UserContextProvider>
      <Login/>
      <UserProfile/>
    </UserContextProvider>
  )
}

export default App
