import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addtodo } from '../Feactures/Todo/TodoSlice'


export const AddTodo = () => {
  const [input , setInput] = useState([])
     const Dispatch = useDispatch()

      const addTodoHandler=((e)=>{
        e.preventDefault()
        Dispatch(addtodo(input))
        setInput('')
       })
  return (
    <>
    <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
        <input 
        type="text"
        className='rounded-md bg-gray-800 border border-gray-700 focus:border-indigo-800 text-base focus:ring-2 focus:ring-indigo-900 outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        placeholder='Enter a Todo....' 
        value={input}
        onChange={(e)=> setInput(e.target.value)} 
        required
        />
        <button
        type='submit'
        className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none rounded-md text-lg hover:bg-indigo-600'
        >Add Todo
       </button>
    </form>
    </>
  )
}
