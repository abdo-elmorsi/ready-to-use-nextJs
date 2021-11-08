/*
import {initializeApp,} from 'firebase/app';
import {getDatabase, onValue, ref} from "firebase/database";
const getVehicleById = () => {
    const firebaseConfig = {
        databaseURL: "https://saferoad-srialfb.firebaseio.com/",
        apiKey: "AIzaSyBhQGeZaLQL1rNnhXfR25dzj15I6qLcIP4",
        authDomain: "saferoad-1542612714486.firebaseapp.com",
        projectId: "saferoad-1542612714486",
        storageBucket: "saferoad-1542612714486.appspot.com",
        // messagingSenderId: "617438938243",
        // appId: "1:617438938243:web:bbf88fd29abb9e1a54c7b6",

    };
    const App = initializeApp(firebaseConfig, 'updatefb')
    const db = getDatabase(App);

    onValue(ref(db, '/352625695568137'), (snapshot) => {
        if (!snapshot.hasChildren()) return;
        console.log(snapshot.val())
        // snapshot.val()
    }, {
        onlyOnce: true
    });
}
*/
