import {createSlice} from '@reduxjs/toolkit'
import {encryptName} from "../../helpers/encryptions";

const groupBy = (arr, key) => arr.reduce((acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc), {});

export const FirebaseSlice = createSlice({
    name: 'firebase',
    initialState: {
        Vehicles: [],
        expand: [],
        check: [],
        lists: [],
        all: 0,
        online: 0,
        offline: 0,
        overSpeeding: 0,
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
            if (action.payload?.SerialNumber) {
                state.Vehicles[state.Vehicles.findIndex(x => x.SerialNumber == action.payload?.SerialNumber)] = action.payload;
            }
        },
        UpdateStatusOnce: (state, action) => {
            if (action.payload?.SerialNumber) {
                // console.log(state.lists[action.payload.GroupName])
                state.Vehicles[state.Vehicles.findIndex(x => x.SerialNumber == action.payload?.SerialNumber)] = action.payload;
                localStorage.setItem(encryptName('uservehs'), JSON.stringify(state.Vehicles));
            }
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
    UpdateStatusOnce,
    SyncOnCheck,
    Loading
} = FirebaseSlice.actions

export default FirebaseSlice.reducer
