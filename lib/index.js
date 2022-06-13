import { configureStore } from "@reduxjs/toolkit";
import ToggleMenuSlice from "./slices/toggleSidebar";
import ConfigSlice from "./slices/config";
import fetchUserSlice from "./slices/auth";

export default configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
    reducer: {
        toggleMenu: ToggleMenuSlice,
        config: ConfigSlice,
        auth: fetchUserSlice,
    },
});
