import dynamic from "next/dynamic";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {initializeApp} from "firebase/app";
import {getDatabase, onDisconnect, onValue, ref} from "firebase/database";
import axios from "axios";
import config from "../config/config";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {VehiclesSettings} from "../lib/slices/vehicleProcessStatus";

const MapWithNoSSR = dynamic(() => import("../components/maps/vector"), {
    ssr: false,
});

const firebaseConfig = {
    databaseURL: "https://saferoad-srialfb.firebaseio.com",
};
const firebaseConfigDues = {
    databaseURL: "https://saferoad-dues.firebaseio.com",
};


const getVehiclesByAccount = (accountId) => {
    const App = initializeApp(firebaseConfigDues, 'dueoncefb')
    const db = getDatabase(App);
    onValue(ref(db, 'dues/' + accountId), (snapshot) => {
        // snapshot.val()
    }, {onlyOnce: true});
}
const onDisconnectState = (id) => {
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
    onDisconnectRef.cancel().then(value => value)
}


const Track = () => {
    const dispatch = useDispatch();
    const stateReducer = useSelector((state) => state);

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

    useEffect(_ => {
        axios.get(`${config.apiGateway.URL}vehicles/settings`).then(value => {
            const groupBy = (arr, key) => arr.reduce((acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc), {});
            let groups = groupBy(value.data, 'GroupName');
            if (groups['null'] && groups['Default']) {
                groups['Default'] = [...groups['null'], ...groups['Default']];
            } else if (groups['null']) {
                groups['Default'] = [...groups['null']];
            }
            delete groups['null']
            let result = []
            for (let key in groups) if (groups.hasOwnProperty(key)) result.push({title: key, children: groups[key]})
            dispatch(VehiclesSettings(result))
        })
    })
    return (
        <div id="map" className="mt-5">
            <MapWithNoSSR/>
        </div>
    );
};

export default Track;
// translation ##################################
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["main"])),
        },
    };
}
// translation ##################################
