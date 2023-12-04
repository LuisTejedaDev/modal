import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import {todoSlice} from './slices';
import thunk from 'redux-thunk'

export const store = configureStore({
    reducer: {
        navTodo: todoSlice,
    }
}, applyMiddleware(thunk))