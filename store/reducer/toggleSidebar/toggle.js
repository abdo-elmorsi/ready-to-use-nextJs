import {createSlice} from '@reduxjs/toolkit'

export const toggleSlice = createSlice({
    name: 'toggleMenu',
    initialState: {
        value: true,
    },
    reducers: {
        toggle: state => {
            state.value = !state.value
        },
        sidebarMini: state => {
            state.value = true
        }
    },
})

// Action creators are generated for each case reducer function
export const {toggle, sidebarMini} = toggleSlice.actions

export default toggleSlice.reducer