import { configureStore } from '@reduxjs/toolkit'
import ToggleMenuSlice from './slices/toggleSidebar'
import ConfigSlice from "./slices/config";
import ToggleAddMarkerRoutingMachineSlice from "./slices/toggleAddMarkerRoutingMachine";
import authSlice from "./slices/auth";

export default configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    reducer: {
        toggleMenu: ToggleMenuSlice,
        config: ConfigSlice,
        auth: authSlice,
        toggleAddMarkerRoutingMachine: ToggleAddMarkerRoutingMachineSlice
    },
})