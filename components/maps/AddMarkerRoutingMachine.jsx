import React, {useState} from "react";
import {Marker, useMap, useMapEvents} from "react-leaflet";
import RoutineMachine from "./RoutineMachine";
import {useSelector} from "react-redux";

const minimize = `<svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 20 20"><path d="M2.48,11.25H8.75v6.27H7.49V13.4L.88,20,0,19.12l6.6-6.61H2.48ZM13.4,7.49h4.12V8.75H11.25V2.48h1.26V6.6L19.12,0,20,.88Z"/></svg>`
const maximize = `<svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 20 20"><path class="cls-1" d="M6.27,20H0V13.73H1.25v4.13l6.61-6.61.89.89L2.14,18.75H6.27ZM17.86,1.25H13.73V0H20V6.27H18.75V2.14L12.14,8.75l-.89-.89Z"/></svg>`
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
                btnMin.innerHTML = minimize;
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

    return (
        <>
            {(positionOne !== null && showMarker) && <Marker position={positionOne}/>}
            {(positionTwo !== null && showMarker) && <Marker position={positionTwo}/>}
            {(positionTwo !== null && positionOne !== null) && <RoutineMachine waypoints={[positionOne, positionTwo]}/>}
        </>
    );
};

export default AddMarkerRoutingMachine;
