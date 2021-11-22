import {createSlice} from '@reduxjs/toolkit'
import {encryptName} from "../../helpers/encryptions";

export const FirebaseSlice = createSlice({
    name: 'firebase',
    initialState: {
        Vehicles: [],
        expand: [],
        check: [],
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
            state.all = state.Vehicles.length;
            state.online = 0;
            state.offline = 0;
            localStorage.setItem(encryptName('uservehs'), JSON.stringify(state.Vehicles));
            state.Vehicles.map(i => {
                switch (i.VehicleStatus) {
                    case 0 :
                    case 1:
                    case 2:
                    case 100:
                    case 101:
                    case 201:
                        state.online = state.online + 1;
                        break;
                    case 5:
                        state.offline = state.offline + 1;
                        break;
                }
            })
        },
        UpdateStatus: (state, action) => {
            if (action.payload?.SerialNumber) {
                state.Vehicles[state.Vehicles.findIndex(x => x.SerialNumber == action.payload?.SerialNumber)] = action.payload;

            }
        },
        UpdateStatusOnce: (state, action) => {
            if (action.payload?.SerialNumber) {
                state.Vehicles[state.Vehicles.findIndex(x => x.SerialNumber == action.payload?.SerialNumber)] = action.payload;

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
