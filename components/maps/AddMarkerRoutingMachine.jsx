import React, {useState} from "react";
import {Marker, useMap, useMapEvents} from "react-leaflet";
import RoutineMachine from "./RoutineMachine";
import L from "leaflet";
import {useSelector} from "react-redux";

const minimize = `<svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 21.41 21.41"><path d="M0,19.83l6.1-6.12H2.69V11.46H10v7.27H7.7V15.31l-6.11,6.1ZM11.46,10V2.68h2.25V6.1L19.83,0l1.58,1.59L15.31,7.7h3.42V10Z"/></svg>`
const maximize = `<svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 21 21"><path d="M0,21V13.73H2.25v3.42l6.12-6.1L10,12.63l-6.1,6.12H7.27V21ZM11.05,8.37l6.1-6.12H13.73V0H21V7.27H18.75V3.85L12.64,10Z"/></svg>`
const AddMarkerRoutingMachine = () => {
    const [positionOne, setPositionOne] = useState(null);
    const [showMarker, setShowMarker] = useState(true);
    const [positionTwo, setPositionTwo] = useState(null);

    const map = useMap();
    useSelector((state) => {
        if (!state.toggleAddMarkerRoutingMachine.value) {
            map.flyTo(positionOne, 7, {
                duration: 1
            });
            setPositionOne(null)
            setPositionTwo(null)
            setShowMarker(true)
        }
    });

    useMapEvents({
        click: (e) => {
            if (!positionOne) {
                setPositionOne([e.latlng.lat, e.latlng.lng]);
            } else {
                setPositionTwo([e.latlng.lat, e.latlng.lng]);
                setShowMarker(false)
            }
        },
        layeradd() {
            const btnMin = document.createElement('button')
            const container = document.querySelector('.leaflet-routing-alternatives-container');
            if (container && !container.querySelector('.btn_min')) {
                const box = document.querySelector('.leaflet-routing-alternatives-container');
                btnMin.className = 'btn_min';
                box.classList.contains('minimize')
                    ? btnMin.innerHTML = maximize
                    : btnMin.innerHTML = minimize;

                btnMin.onclick = _ => {
                    if (!box.classList.contains('minimize')) {
                        btnMin.innerHTML = maximize;
                        box.classList.add('minimize');
                    } else {
                        btnMin.innerHTML = minimize;
                        box.classList.remove('minimize')
                    }
                }
                container.append(btnMin);
            }
        },
    });


    const A2 = new L.Icon({
        iconUrl: '/assets/images/icons/A2.svg',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    })
    const B2 = new L.Icon({
        iconUrl: '/assets/images/icons/B2.svg',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    })
    return (
        <>
            {(positionOne !== null && showMarker) && <Marker icon={A2} animate={true} position={positionOne}/>}
            {(positionTwo !== null && showMarker) && <Marker icon={B2} position={positionTwo}/>}
            {(positionTwo !== null && positionOne !== null) && <RoutineMachine icon={A2} waypoints={[positionOne, positionTwo]}/>}
        </>
    );
};

export default AddMarkerRoutingMachine;
