import L from "leaflet";
import {createControlComponent} from "@react-leaflet/core";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
const CreateRoutineMachineLayer = ({waypoints}) => {

    const instance = L.Routing.control({
        waypoints,
        lineOptions: {
            styles: [{ color: "#6FA1EC", weight: 4 }]
        },
        show: false,
        addWaypoints: false,
        routeWhileDragging: true,
        draggableWaypoints: true,
        fitSelectedRoutes: true,
        showAlternatives: false
    });

    return instance;
};

const RoutingMachine = createControlComponent(CreateRoutineMachineLayer);

export default RoutingMachine;
