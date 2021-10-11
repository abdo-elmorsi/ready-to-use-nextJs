import { configureStore } from '@reduxjs/toolkit'
import ToggleSlice from './reducer/toggleSidebar/toggle'

export default configureStore({
    reducer: {
        toggleMenu: ToggleSlice,
    },
})