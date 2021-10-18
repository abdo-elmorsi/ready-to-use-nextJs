import {createSlice} from '@reduxjs/toolkit'

export const ToggleDarkModeSlice = createSlice({
    name: 'toggleMode',
    initialState: {
        value: true,
    },
    reducers: {
        darkMode: state => {
            state.value = !state.value
        }
    },
})

// Action creators are generated for each case reducer function
export const {darkMode} = ToggleDarkModeSlice.actions

export default ToggleDarkModeSlice.reducer