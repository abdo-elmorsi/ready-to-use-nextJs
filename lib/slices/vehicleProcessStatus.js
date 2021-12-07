import {createSlice} from '@reduxjs/toolkit'
import {encryptName} from "../../helpers/encryptions";

export const FirebaseSlice = createSlice({
    name: 'firebase',
    initialState: {
        Vehicles: [],
        expand: [],
        check: [],
        status: {},
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
            const _USER_VEHICLES = JSON.parse(localStorage.getItem(encryptName('user_vehicles'))) ?? [];
            if (!_USER_VEHICLES) {
                localStorage.setItem(encryptName('user_vehicles'), JSON.stringify(state.Vehicles));
            }
        },
        UpdateStatus: (state, action) => {
            if (action.payload?.SerialNumber) {
                state.status[action.payload?.SerialNumber] = action.payload?.VehicleStatus;
                state.Vehicles[state.Vehicles.findIndex(x => x.SerialNumber == action.payload?.SerialNumber)] = action.payload;
            }
            localStorage.setItem(encryptName('vehicles_status'), JSON.stringify(state.status));
        },
        UpdateStatusOnce: (state, action) => {
            /*const setLocalstorage = () => {
                setInterval(_ => {
                    localStorage.setItem(encryptName('uservehs'), JSON.stringify(state.Vehicles));
                    console.log('setLocalstorage')
                }, 30e3)
            }*/
            if (action.payload?.SerialNumber) {
                state.status[action.payload?.SerialNumber] = action.payload?.VehicleStatus;
                state.Vehicles[state.Vehicles.findIndex(x => x.SerialNumber == action.payload?.SerialNumber)] = action.payload;
                localStorage.setItem(encryptName('vehicles_status'), JSON.stringify(state.status));
            }
        },
        SetStatusOnce: (state, action) => {
            state.status[action.payload?.SerialNumber] = action.payload?.VehicleStatus;
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
    SetStatusOnce,
    SyncOnCheck,
    Loading
} = FirebaseSlice.actions

export default FirebaseSlice.reducer
