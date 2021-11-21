import React, {useEffect, useRef, useState} from "react";
import {Marker, useMapEvents} from "react-leaflet";
import L from "leaflet";
import {useSelector} from "react-redux";

const AddMarkerCar = ({position}) => {
    // const [position, setPosition] = useState(null);
    useSelector((state) => {
        console.log(state)
       /* if (!state.toggleAddMarkerRoutingMachine.value) {
            map.flyTo(positionOne, 7, {
                duration: 1
            });
        }*/
    });
    const applyRotation = (marker, _options) => {
        const oldIE = L.DomUtil.TRANSFORM === "msTransform";
        const options = Object.assign(_options, {rotationOrigin: "center"});
        const {rotationAngle, rotationOrigin} = options;
        if (rotationAngle && marker) {
            marker._icon.style[L.DomUtil.TRANSFORM + "Origin"] = rotationOrigin;
            if (oldIE) {
                // for IE 9, use the 2D rotation
                marker._icon.style[L.DomUtil.TRANSFORM] = `rotate(${rotationAngle} deg)`;
            } else {
                // for modern browsers, prefer the 3D accelerated version
                marker._icon.style[L.DomUtil.TRANSFORM] += ` rotateZ(${rotationAngle}deg)`;
            }
        }
    };
    const markerRef = useRef();

    useEffect(() => {
        applyRotation(markerRef.current, {rotationAngle: 100});
    }, []);

    /*useMapEvents({
        click: (e) => {
            setPosition(e.latlng);
        },
    });*/

    return position === null ? null : (
        <Marker ref={markerRef} position={position}/>
    );
};

export default AddMarkerCar;
