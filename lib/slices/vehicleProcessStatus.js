import {createSlice} from '@reduxjs/toolkit'

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
            state.all = state.Vehicles.length;
            state.online = 0;
            state.offline = 0;
            /* state.Vehicles.map(i => {
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
             })*/

            let groups = groupBy(state.Vehicles, 'GroupName');
            if (groups['null'] && groups['Default']) {
                groups['Default'] = [...groups['null'], ...groups['Default']];
            } else if (groups['null']) {
                groups['Default'] = [...groups['null']];
            }
            delete groups['null']

            for (let key in groups) if (groups.hasOwnProperty(key)) state.lists.push({
                title: key,
                children: groups[key]
            })
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
