import {createSlice} from '@reduxjs/toolkit'

export const ConfigSlice = createSlice({
    name: 'treeFilter',
    initialState: {

    },
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    darkMode,
    setConfig,
    changeLanguage} = ConfigSlice.actions

export default ConfigSlice.reducer
