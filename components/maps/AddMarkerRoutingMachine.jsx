import React, {useState} from "react";
import {Marker, Popup, useMap, useMapEvents} from "react-leaflet";
import RoutineMachine from "./RoutineMachine";

const AddMarkerRoutingMachine = () => {
    const [positionOne, setPositionOne] = useState(null);
    const [showMarker, setShowMarker] = useState(true);
    const [positionTwo, setPositionTwo] = useState(null);

    const map = useMap();

    useMapEvents({
        click: (e) => {
            if (!positionOne) {
                setPositionOne([e.latlng.lat, e.latlng.lng]);
            } else {
                setPositionTwo([e.latlng.lat, e.latlng.lng]);
                setShowMarker(false)
            }
        },
    });
    const clearMarker = () => {
        map.flyTo(positionOne, 7, {
            duration: 1
        });
        setPositionOne(null)
        setPositionTwo(null)
        setShowMarker(true)
    }
    return (
        <>
            {(positionOne !== null && showMarker) && <Marker position={positionOne}><Popup>
                <button onClick={clearMarker}>clear</button>
            </Popup></Marker>}
            {(positionTwo !== null && showMarker) && <Marker position={positionTwo}><Popup>
                <button onClick={clearMarker}>clear</button>
            </Popup></Marker>}
            {(positionTwo !== null && positionOne !== null) && <RoutineMachine waypoints={[positionOne, positionTwo]}/>}
        </>
    );
};

export default AddMarkerRoutingMachine;
