import {encryptName} from "./encryptions";

export const syncLocalData = (data) => {
    localStorage.removeItem(encryptName('uservehs'))
    localStorage.setItem(encryptName('uservehs'), JSON.stringify(data));
}

const loadLocalData = () => {
    if (typeof Mapjs.map?.lists?.uservehs != 'undefined') {
        if (typeof Mapjs.map.lists.uservehs.length == 'undefined') {
            let _uservehs = JSON.parse(localStorage.getItem(encryptName('uservehs'))) ?? [];
            Mapjs.map.lists.uservehs = _uservehs;
            setInterval(syncLocalData, 36e5 / 2);
        }
    }
}
