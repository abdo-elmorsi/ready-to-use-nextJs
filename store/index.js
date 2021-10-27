import {configureStore} from '@reduxjs/toolkit';
import ToggleMenuSlice from './reducer/toggleSidebar/toggle';
import ConfigSlice from "./reducer/config/config";
import ToggleHeaderSlice from "./reducer/toggleHeader/toggle";

export default configureStore({
    reducer: {
        toggleMenu: ToggleMenuSlice,
        config: ConfigSlice,
        ToggleHeader: ToggleHeaderSlice
    },
})