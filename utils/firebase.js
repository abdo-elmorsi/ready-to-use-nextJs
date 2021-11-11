import {initializeApp} from "firebase/app";
import {getDatabase, onDisconnect, onValue, ref} from "firebase/database";

const firebaseConfig = {
    databaseURL: "https://saferoad-srialfb.firebaseio.com",
};
const firebaseConfigDues = {
    databaseURL: "https://saferoad-dues.firebaseio.com",
};

export const getVehicleById = (id) => {
    const App = initializeApp(firebaseConfig, 'oncefb')
    const db = getDatabase(App);
    onValue(ref(db, id), (snapshot) => snapshot.val(),
        {onlyOnce: true});
}
export const getVehiclesByAccount = (accountId) => {
    const App = initializeApp(firebaseConfigDues, 'dueoncefb')
    const db = getDatabase(App);
    onValue(ref(db, 'dues/' + accountId), (snapshot) => snapshot.val(), {onlyOnce: true});
}
export const onDisconnectState = (id) => {
    const App = initializeApp(firebaseConfig, 'oncefb')
    const db = getDatabase(App);
    const connectedRef = ref(db, id);
    /*
            onValue(connectedRef, (snap) => {
                // if (!snap.hasChildren()) return;
                console.log('DetectingConnectionState: ', snap.val())
                // setVehicle(snapshot.val())
            });

    */
    const onDisconnectRef = onDisconnect(connectedRef);
    onDisconnectRef.cancel().then(value => {
        console.log(value)
    })
}
