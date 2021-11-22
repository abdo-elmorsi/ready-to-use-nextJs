import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {initializeApp} from "firebase/app";
import {getDatabase, onValue, ref} from "firebase/database";

export const FirebaseSlice = createSlice({
    name: 'firebase',
    initialState: {
        Vehicles: [],
        expand: [],
        check: [],
        loading: 'idle'
    },
    reducers: {
        SyncVehicleFBOnce: (state, action) => {

        },
        VehiclesSettings: (state, action) => {
            state.Vehicles = action.payload;
        },
        SyncOnExpand: (state, action) => {
            state.expand = action.payload;

        },
        SyncOnCheck: (state, action) => {
            state.check = action.payload;
           /* if (state.check.length > 0){
                state.check.map(i=> {
                    SyncVehicleFB(i?.key)
                })
            }*/
        },
    },
})

const firebaseConfig = {
    databaseURL: "https://saferoad-srialfb.firebaseio.com",
};
const firebaseConfigDues = {
    databaseURL: "https://saferoad-dues.firebaseio.com",
};
const SyncVehicleFB = (id) => {
    console.log(id)
    const App = initializeApp(firebaseConfig, 'oncefb')
    const db = getDatabase(App);
    onValue(ref(db, id), (snapshot) => {
        // if (!snapshot.hasChildren()) return;
        // console.warn(GetStatusString(snapshot.val()?.VehicleStatus))
        console.warn(snapshot.val())
    });
}


// Action creators are generated for each case reducer function
export const {
    SyncVehicleFBOnce,
    VehiclesSettings,
    SyncOnExpand,
    SyncOnCheck} = FirebaseSlice.actions

export default FirebaseSlice.reducer
