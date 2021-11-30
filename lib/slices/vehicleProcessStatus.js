import {createSlice} from '@reduxjs/toolkit'
import {encryptName} from "../../helpers/encryptions";

const groupBy = (arr, key) => arr.reduce((acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc), {});

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
            let groups = groupBy(action.payload, 'GroupName');
            if (groups['null'] && groups['Default']) {
                groups['Default'] = [...groups['null'], ...groups['Default']];
            } else if (groups['null']) {
                groups['Default'] = [...groups['null']];
            }
            delete groups['null']
            for (let key in groups) if (groups.hasOwnProperty(key)) state.Vehicles.push({
                title: key,
                children: groups[key]
            })
            localStorage.setItem(encryptName('uservehs'), JSON.stringify(action.payload));
        },
        UpdateStatus: (state, action) => {
            if (action.payload?.SerialNumber) {
                state.Vehicles[state.Vehicles.findIndex(x => x.SerialNumber == action.payload?.SerialNumber)] = action.payload;
            }
            // localStorage.setItem(encryptName('uservehs'), JSON.stringify(state.Vehicles));
        },
        UpdateStatusOnce: (state, action) => {
            if (action.payload?.SerialNumber) {
                state.status[action.payload?.SerialNumber] = action.payload?.VehicleStatus;
                // state.Vehicles[state.Vehicles.findIndex(x => x.SerialNumber == action.payload?.SerialNumber)] = action.payload;
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
