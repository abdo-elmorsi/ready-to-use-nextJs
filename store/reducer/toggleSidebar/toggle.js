import {createSlice} from '@reduxjs/toolkit'

export const toggleSlice = createSlice({
    name: 'toggleMenu',
    initialState: {
        value: 'sidebar-mini',
    },
    reducers: {
        addClass: (state) => {
            state.value = 'sidebar-mini'
        },
        removeClass: (state) => {
            state.value = ''
        },
    },
})

// Action creators are generated for each case reducer function
export const {addClass, removeClass} = toggleSlice.actions

export default toggleSlice.reducer