import { useEffect, useState } from 'react'

import './App.css'
import { Card } from './Componet/Card'
import { Theame } from './Componet/Theame'
import { ThemeProvider } from './Context/theme'

function App() {
  const [ThemeMode , setTheme] =useState("light")

  const lighttheme = ()=>{
    setTheme("light")
  }

  const darkTheme = ()=>{
    setTheme("dark")
  }
 
 useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")

    document.querySelector('html').classList.add(ThemeMode)
 },[ThemeMode])
  return (
    <>
    <ThemeProvider value={{ThemeMode, lighttheme, darkTheme}}>
    <div className='p-4 bg-pink-300 text-black text-center m-5 text-3xl'>Chai aur React</div>
    <Theame />
      <Card />
      </ThemeProvider>
    </>
  )
}

export default App
