import dynamic from "next/dynamic";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {initializeApp} from "firebase/app";
import {getDatabase, onDisconnect, onValue, ref} from "firebase/database";
import axios from "axios";
import config from "../config/config";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Loading, UpdateStatus, UpdateStatusOnce, VehiclesSettings} from "../lib/slices/vehicleProcessStatus";
import {Date2KSA, getAddress, isDateExpired, isValidAddress, locDataModel, WeightVoltToKG} from "../helpers/helpers";
import {encryptName} from "../helpers/encryptions";

const MapWithNoSSR = dynamic(() => import("../components/maps/vector"), {
    ssr: false,
});

const firebaseConfig = {
    databaseURL: config.firebase_config.databaseURL,
};
const firebaseConfigDues = {
    databaseURL: config.firebase_config.databaseURLDues,
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
    const onDisconnectRef = onDisconnect(connectedRef);
    onDisconnectRef.cancel().then(value => value)
}

const Track = () => {
    const dispatch = useDispatch();

    const stateReducer = useSelector((state) => state);

    const fbtolocInfo = (_message, _initial = false) => {
        const {latLng} = require('leaflet');
        let _USER_VEHICLES = JSON.parse(localStorage.getItem(encryptName('uservehs'))) ?? [];

        const holdStatus = [600, 5, 0, 2];
        const CalcMileage = (Mileage) => ((Mileage ?? 0) / 1000).toFixed(1);
        const CalcDuration = (newInfo, oldInfo) => Math.abs(new Date(newInfo.RecordDateTime) - new Date(oldInfo.RecordDateTime ?? newInfo.RecordDateTime)); //in ms
        const CalcDistance = (newInfo, oldInfo) => parseFloat(CalcMileage(latLng(newInfo.Latitude ?? 0, newInfo.Longitude ?? 0).distanceTo(latLng(oldInfo.Latitude ?? 0, oldInfo.Longitude ?? 0))));
        const CalcVehicleStatus = newInfo => {
            if (isDateExpired(newInfo)) {
                newInfo.VehicleStatus = 5
            } else if (newInfo.IsFuelCutOff == true || newInfo.IsFuelCutOff == 1) {
                return 203;
            } else if (newInfo.IsPowerCutOff) {
                return 201;
            } else if (newInfo.EngineStatus == 1 && newInfo.Speed <= 5) {
                return 2;
            } else if (newInfo.EngineStatus == 1 && newInfo.Speed > 120) {
                return 101; //Vehicle is Over Speeding.
            } else if (newInfo.EngineStatus == 1 && newInfo.Speed < 120 && newInfo.Speed > 5) {
                return 1;
            } else if (newInfo.EngineStatus == 0 && newInfo.Speed > 0) {
                return 300;
            } else if (newInfo.EngineStatus == 0) {
                return 0;
            }
            return 5;
        };
        const aggregate = (newInfo, oldInfo, _initial) => {
            if (newInfo.DeviceTypeID === 1) {
                newInfo.Mileage = parseFloat(oldInfo.Mileage ?? 0);
                newInfo.Mileage += (!holdStatus.includes(newInfo.VehicleStatus)) ? CalcDistance(newInfo, oldInfo) : 0;
                newInfo.Mileage = newInfo.Mileage.toFixed(1);
            }
            newInfo.VehicleStatus = CalcVehicleStatus(newInfo);
            newInfo.Duration = CalcDuration(newInfo, oldInfo);
            newInfo.Duration += ((newInfo.VehicleStatus == oldInfo.VehicleStatus) && Number.isInteger(oldInfo.Duration)) ? oldInfo.Duration : 0;
            newInfo.WeightReading = WeightVoltToKG(newInfo, oldInfo);

            if (oldInfo != null) {
                if (oldInfo.SyncAdd == undefined) oldInfo.SyncAdd = Object.assign({}, {
                    Address: oldInfo.Address,
                    RecordDateTime: oldInfo.RecordDateTime,
                    Longitude: oldInfo.Longitude,
                    Latitude: oldInfo.Latitude
                });
                let SyncAdd = oldInfo.SyncAdd;

                if (!isValidAddress(newInfo.Address) && isValidAddress(SyncAdd.Address)) newInfo.Address = SyncAdd.Address;

            } else {
                getAddress(newInfo.SerialNumber, null);
            }
            return newInfo
        }
        let _newInfo = _message.val();
        if (_newInfo == null) return {locInfo: null, updated: false};

        _newInfo.SerialNumber = _newInfo.SerialNumber ?? _newInfo.Serial;
        _newInfo.RecordDateTime = Date2KSA(_newInfo.RecordDateTime);
        _newInfo.Mileage = CalcMileage(_newInfo.Mileage);

        if (isDateExpired(_newInfo)) _newInfo.VehicleStatus = 5;
        delete _newInfo.Serial;
        let _oldInfo = Object.assign({}, _USER_VEHICLES?.find(x => x.SerialNumber == _newInfo.SerialNumber));
        if (Object.keys(_oldInfo).length === 0) {
            return {locInfo: _newInfo, updated: false};
        }

        if (_oldInfo.Latitude > 0 && _newInfo.RecordDateTime != null && new Date(_newInfo.RecordDateTime) < new Date(_oldInfo.RecordDateTime)) return {
            locInfo: _oldInfo,
            updated: false
        };

        if (_initial) setTimeout(() => getAddress(_newInfo.SerialNumber, null), Math.floor(Math.random() * 5 * 6e4) + 1);

        _newInfo = aggregate(_newInfo, _oldInfo, _initial);

        _oldInfo = Object.assign(_oldInfo, _newInfo); //_oldInfo = { ..._oldInfo, ...locInfo }; //join fix and updated data
        return {locInfo: _oldInfo, updated: true};
    }



    useEffect(_ => {
        let _USER_VEHICLES = JSON.parse(localStorage.getItem(encryptName('uservehs'))) ?? [];

        const SyncVehicleFBOnce = async (id) => {
            const App = initializeApp(firebaseConfig, 'oncefb')
            const db = getDatabase(App);
            await onValue(ref(db, id), (snapshot) => {
                const locInfo = fbtolocInfo(snapshot, true).locInfo;
                dispatch(UpdateStatusOnce(locInfo))
            }, (error) => {
                console.error('error : ', error)
            }, {onlyOnce: true});
        }

        const SyncVehicleFB = async (serialNumber) => {
            const App = initializeApp(firebaseConfig, 'updatefb')
            const db = getDatabase(App);
            await onValue(ref(db, serialNumber), (snapshot) => {
                if (!snapshot.hasChildren()) return;
                const locInfo = fbtolocInfo(snapshot, _USER_VEHICLES);
                dispatch(UpdateStatus(locInfo.locInfo))
            }, (error) => console.error('error : ', error));
        }

        const fetchData = async () => {
            const response = await axios.get(`${config.apiGateway.URL}vehicles/settings`)
            if (response.status === 200 && response.data?.length > 0) {
                const result = handleResponse(response.data);
                dispatch(VehiclesSettings(result));
                dispatch(Loading(false));
                result.map(i => {
                    SyncVehicleFBOnce(i?.SerialNumber);
                    setInterval(SyncVehicleFB(i?.SerialNumber), 36e5 / 2);
                    // SyncVehicleFB(i?.SerialNumber)
                })
                console.log(result)
            } else {
                dispatch(Loading(false));
            }
        };

        const handleResponse = (data = []) => {
            data?.map(x => {
                let sn = x.SerialNumber;
                if (sn == null || sn == '' || sn.includes('.') || sn.includes('#') || sn.includes('$') || sn.includes('[') || sn.includes(']')) {
                    console.error(`VehicleID: ${x.VehicleID} - (${x.DisplayName}), has invalid SerialNumber: ${x.SerialNumber}`);
                    x.SerialNumber = '0';
                }
            });

            let NEW_SERIAL_NUMBER = data?.map(x => x.SerialNumber);
            let OLD_DATA = [..._USER_VEHICLES?.filter(x => NEW_SERIAL_NUMBER.includes(x.SerialNumber))];
            let OLD_SERIAL_NUMBER = OLD_DATA.map(x => x.SerialNumber);

            data?.filter(x => OLD_SERIAL_NUMBER.includes(x.SerialNumber)).forEach(x => Object.assign(x, Object.assign({...OLD_DATA.find(d => d.SerialNumber == x.SerialNumber)}, x)));

            data?.filter(x => !OLD_SERIAL_NUMBER.includes(x.SerialNumber)).forEach((x) => Object.assign(x, locDataModel));

            const START_DATE = Date2KSA(new Date((new Date()).getFullYear(), 0, 1));

            data?.filter(x => x.RecordDateTime != null).forEach(x => {
                x.RecordDateTime = Date2KSA(x.RecordDateTime);
            });

            data?.filter(x => x.RecordDateTime == null).forEach(x => {
                x.RecordDateTime = x.RecordDateTime ?? START_DATE;
            });
            return data
        }

        fetchData();


    }, [dispatch])

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
