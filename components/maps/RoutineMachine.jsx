import L from "leaflet";
import {createControlComponent} from "@react-leaflet/core";
import "leaflet-routing-machine";
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

const CreateRoutineMachineLayer = ({waypoints}) => {
    const A2 = new L.Icon({
        iconUrl: '/assets/images/icons/A2.svg',
        shadowUrl: '/assets/images/icons/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    })
    const B2 = new L.Icon({
        iconUrl: '/assets/images/icons/B2.svg',
        shadowUrl: '/assets/images/icons/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    })
    const instance = L.Routing.control({
        waypoints,
        lineOptions: {
            styles: [{color: "#246c66", weight: 3}]
        },
        createMarker: function (i, waypoint, n) {
            let marker_icon;
            if (i === 0) {
                marker_icon = A2
            } else if (i > 0 && i < n - 1) {
                marker_icon = B2
            } else if (i === n - 1) {
                marker_icon = B2
            }
            return L.marker(waypoint.latLng, {
                draggable: true,
                bounceOnAdd: false,
                bounceOnAddOptions: {
                    duration: 1000,
                    height: 800,
                },
                icon: marker_icon,
            });
        },
        show: false,
        addWaypoints: false,
        router: new L.Routing.osrmv1({
            language: 'en',
            profile: 'car'
        }),
        routeWhileDragging: true,
        draggableWaypoints: true,
        fitSelectedRoutes: true,
        showAlternatives: false,
        position: 'bottomright'
    });

    return instance;
};

const RoutingMachine = createControlComponent(CreateRoutineMachineLayer);

export default RoutingMachine;
