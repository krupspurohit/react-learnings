import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddTodo } from './Componet/AddTodo'
import { Todo } from './Componet/Todo'

function App() {


  return (
    <>
    <h1 className='bg-slate-300 rounded-md border p-4 text-2xl font-bold'>React Aur Redux</h1>
    <AddTodo />
    <Todo />
    </>
  )
}

export default App
