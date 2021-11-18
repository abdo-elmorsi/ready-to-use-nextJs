import {createSlice} from '@reduxjs/toolkit'
import {encryptName} from "../../helpers/encryptions";

export const FirebaseSlice = createSlice({
    name: 'firebase',
    initialState: {
        Vehicles: [],
        expand: [],
        check: [],
        loading: false
    },
    reducers: {
        Loading: (state, action) => {
            state.loading = action.payload;
        },
        VehiclesSettings: (state, action) => {
            state.Vehicles = action.payload;
            // localStorage.removeItem(encryptName('uservehs'))
            localStorage.setItem(encryptName('uservehs'), JSON.stringify(state.Vehicles));
            // if (state.Vehicles.length > 0){
            // state.Vehicles.map(i => {
            //     SyncVehicleFB(i?.SerialNumber)
            // })
            // }
        },
        UpdateStatus: (state, action) => {
            // state.Vehicles[state.Vehicles.findIndex(x => x.SerialNumber == action.payload.SerialNumber)] = action.payload;
        },
        SyncOnExpand: (state, action) => {
            state.expand = action.payload;
        },
        SyncOnCheck: (state, action) => {
            state.check = action.payload.map(i => i.data);
        },
    },
})
// Action creators are generated for each case reducer function
export const {
    VehiclesSettings,
    SyncOnExpand,
    UpdateStatus,
    SyncOnCheck,
    Loading
} = FirebaseSlice.actions

export default FirebaseSlice.reducer
