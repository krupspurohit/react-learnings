import React from 'react'
import { removetodo } from '../Feactures/Todo/TodoSlice'
import { updatetodo } from '../Feactures/Todo/TodoSlice'
import { useSelector , useDispatch } from 'react-redux'

export const Todo = () => {
    const Todos = useSelector(state => state.Todos)
    const Dispatch = useDispatch()
  return (
    <>
            <div className='text-2xl text-black font-bold p-3'>My Todos</div>
            <ul  className='list-none'>
                    {Todos.map((todo)=>(
                    <li className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded text-white' key={todo.id}>
                            <div className='text-white'>{todo.Text}</div>
                            {/* <button
                            onClick={()=>Dispatch(updatetodo(todo.id))}
                            className='text-white bg-red-50 border-0 py-1 px-4 focus:outline-none hover:bg-red-300 rounded text-md'
                            >Edit</button> */}
                             <button 
                             className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-300 rounded text-md'
                            onClick={()=> Dispatch(removetodo(todo.id))}>X</button>
                    </li>
                ))
            }   
     </ ul>

            
    </>
  )
}
