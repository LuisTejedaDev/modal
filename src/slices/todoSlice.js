import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    todos: [],
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setTodos: (state, action) => {state.todos = action.payload},
        addTodo: (state, action) => {state.todos = [action.payload, ...state.todos]},
        checkTodo: (state, action) => {state.todos = state.todos.map(x => x.id === action.payload ? ({...x, checked: !x.checked}) : x)},
    }
})

export const {setTodos, addTodo, checkTodo} = navSlice.actions

export const selectTodos = (state) => state.navTodo.todos;

export default navSlice.reducer