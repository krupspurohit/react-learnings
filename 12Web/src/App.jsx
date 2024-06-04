import { useState } from 'react'

import './App.css'
import { Header } from './Componet/Header/Header'
import { Card } from './Componet/Card/Card'
import { Footer } from './Componet/Footer/Footer'
import { Login } from './Componet/Login/Login'
import { Signup } from './Componet/Signup/Signup'

function App() {
  

  return (
    <>
        <Header/>
        <Card />
        <Login />
        <Signup />
        <Footer />
    </>
  )
}

export default App
