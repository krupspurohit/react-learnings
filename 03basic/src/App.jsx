import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {

  return (
    <>
      <h1 className='bg-pink-400 text-black rounded-xl p-5 mb-5'>Hey Twilwind !</h1>
      <Card username="chaiaurreact" />
      <Card username="KRUPA" />

    </>
  )
}

export default App
