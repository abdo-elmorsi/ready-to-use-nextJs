import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducer/counter/counterSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
})