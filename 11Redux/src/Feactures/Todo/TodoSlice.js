import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState ={
    Todos:[
        {
            id: 1,
            Text: "Hello Todo",
            completed: false,
        }
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addtodo: (state, action)=>{
            const adtodo = {
                id: nanoid(),
                Text: action.payload
            }
            state.Todos.push(adtodo)
        },

        removetodo: (state, action)=>{
            state.Todos = state.Todos.filter(((adtodo) => adtodo.id !== action.payload))
        },

        updatetodo: (state, action)=>{
            state.Todos = ((prev) => prev.map((prevtodo)=> action.id === id ? action.payload : prevtodo))
        }
    }
})

export const {addtodo, updatetodo , removetodo} = todoSlice.actions

export default todoSlice.reducer