import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import { Login } from './Componet/Login'
import { Profile } from './Componet/Profile'

function App() {
 

  return (
    <UserContextProvider>
     <h1>Chai Aur React</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
