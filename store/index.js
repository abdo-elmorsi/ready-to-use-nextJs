import { configureStore } from '@reduxjs/toolkit'
import ToggleMenuSlice from './reducer/toggleSidebar/toggle'
import ConfigSlice from "./reducer/config/config";
import ToggleAddMarkerRoutingMachineSlice from "./reducer/Maps/toggleAddMarkerRoutingMachine";

export default configureStore({
    reducer: {
        toggleMenu: ToggleMenuSlice,
        config: ConfigSlice,
        toggleAddMarkerRoutingMachine: ToggleAddMarkerRoutingMachineSlice
    },
})