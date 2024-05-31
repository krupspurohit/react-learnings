import {configureStore} from "@reduxjs/toolkit"
import todoreducer from "../Feactures/Todo/TodoSlice";

export const store = configureStore({
    reducer: todoreducer
})