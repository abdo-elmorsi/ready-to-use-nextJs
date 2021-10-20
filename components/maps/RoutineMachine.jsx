import L from "leaflet";
import {createControlComponent} from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";
import {useState} from "react";
import {useMapEvents} from "react-leaflet";

const CreateRoutineMachineLayer = ({waypoints}) => {

    const [positionOne, setPositionOne] = useState(null);
    const [positionTwo, setPositionTwo] = useState(null);

    useMapEvents({
        click: (e) => {
            if (!positionOne) {
                setPositionOne(e.latlng);
            }

            setPositionTwo(e.latlng);
        },
    });

    const instance = L.Routing.control({
        waypoints,
        lineOptions: {
            // styles: [{ color: "#6FA1EC", weight: 4 }]
        },
        show: false,
        addWaypoints: true,
        routeWhileDragging: true,
        draggableWaypoints: true,
        fitSelectedRoutes: true,
        showAlternatives: false
    });

    return instance;
};

const RoutingMachine = createControlComponent(CreateRoutineMachineLayer);

export default RoutingMachine;
