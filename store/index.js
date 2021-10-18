import { configureStore } from '@reduxjs/toolkit'
import ToggleMenuSlice from './reducer/toggleSidebar/toggle'
import ToggleDarkModeSlice from './reducer/toggleDarkMode/toggle'

export default configureStore({
    reducer: {
        toggleMenu: ToggleMenuSlice,
        toggleMode: ToggleDarkModeSlice,
    },
})