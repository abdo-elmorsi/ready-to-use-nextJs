import {createSlice} from '@reduxjs/toolkit'

export const ToggleHeaderSlice = createSlice({
    name: 'toggleHeader',
    initialState: {
        value: false,
    },
    reducers: {
        toggleHead: state => {
            state.value = !state.value
        },
    },
})

// Action creators are generated for each case reducer function
export const {toggleHead} = ToggleHeaderSlice.actions

export default ToggleHeaderSlice.reducer