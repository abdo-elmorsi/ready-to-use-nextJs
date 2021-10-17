import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    LayersControl,
    Tooltip,
    useMap,
    useMapEvents,
    GeoJSON, ZoomControl
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import useWindowDimensions from "../../helpers/getWindowDimensions";
import {useRef, useState} from "react";
import RoutineMachine from "./RoutineMachine";
import * as ELG from "esri-leaflet-geocoder";
const points1 = [
    [33.52001088075479, 36.26829385757446],
    [33.50546582848033, 36.29547681726967]
];
const json = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        -0.10445594787597656,
                        51.503667218218546
                    ],
                    [
                        -0.10454177856445312,
                        51.5050562876173
                    ],
                    [
                        -0.10445594787597656,
                        51.50665900738443
                    ],
                    [
                        -0.10445594787597656,
                        51.5077274559105
                    ],
                    [
                        -0.10445594787597656,
                        51.50949034120275
                    ],
                    [
                        -0.1043701171875,
                        51.51093265116127
                    ],
                    [
                        -0.10428428649902344,
                        51.51205441622754
                    ],
                    [
                        -0.1043701171875,
                        51.51384384141771
                    ],
                    [
                        -0.10441303253173828,
                        51.51413762092547
                    ],
                    [
                        -0.10634422302246094,
                        51.514217742280586
                    ],
                    [
                        -0.10999202728271484,
                        51.514030792232774
                    ],
                    [
                        -0.11299610137939453,
                        51.513336399623476
                    ],
                    [
                        -0.11565685272216795,
                        51.51253516422883
                    ],
                    [
                        -0.1187896728515625,
                        51.51152024583139
                    ],
                    [
                        -0.1192617416381836,
                        51.51135999349115
                    ],
                    [
                        -0.11827468872070311,
                        51.5100245354003
                    ],
                    [
                        -0.11724472045898438,
                        51.50876916910042
                    ],
                    [
                        -0.11621475219726562,
                        51.50762061218536
                    ],
                    [
                        -0.11484146118164062,
                        51.506285044481096
                    ],
                    [
                        -0.11398315429687499,
                        51.50537683608064
                    ],
                    [
                        -0.11312484741210938,
                        51.50502957514356
                    ],
                    [
                        -0.11312484741210938,
                        51.5043884710761
                    ],
                    [
                        -0.11183738708496094,
                        51.50409462869737
                    ],
                    [
                        -0.11119365692138672,
                        51.50331994425266
                    ],
                    [
                        -0.11020660400390625,
                        51.50230482056266
                    ],
                    [
                        -0.10934829711914062,
                        51.501610249219446
                    ],
                    [
                        -0.10728836059570312,
                        51.499953920988176
                    ],
                    [
                        -0.10582923889160156,
                        51.4987249934006
                    ],
                    [
                        -0.10540008544921875,
                        51.49861812856609
                    ],
                    [
                        -0.10505676269531249,
                        51.49875170957007
                    ],
                    [
                        -0.1048421859741211,
                        51.49901887040353
                    ],
                    [
                        -0.10471343994140624,
                        51.49957990305636
                    ],
                    [
                        -0.1045846939086913,
                        51.503400084633526
                    ]
                ]
            }
        }
    ]
}
function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        click() {
            map.locate();
            console.error('on Click')
        },
        locationfound(e) {
            setPosition(e.latlng)
            console.error('my locate' ,e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })

    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    )
}
const Map = () => {
    const {heightWithoutNav} = useWindowDimensions();
    const [map, setMap] = useState(null);
    const [show, setShow] = useState(false);
    const rMachine = useRef();
    function Geocoder({ address }) {
        const map = useMap();

        ELG.geocode()
            .text(address)
            .run((err, results, response) => {
                console.log(results);
                // const { lat, lng } = results.results[0].latlng;
                // map.setView([lat, lng], 12);
            });

        return null;
    }
    const changePos = (pos) => {
        if (map) {
            setTimeout(_ => {
                map.flyTo(pos, 14, {
                    duration: 3
                });
            }, 1000)
        }
    }
    return (
        <MapContainer
            whenCreated={map => setMap(map)}
            center={[24.726875, 46.710461]}
            zoom={7}
            scrollWheelZoom={true}
            zoomControl={false}
            style={{height: heightWithoutNav, width: "100%"}}>



            {/*<Marker position={[24.726875, 46.710461]} draggable={true} animate={true}>*/}
            {/*    <Popup>Hey ! I live here*/}
            {/*        /!*<button onClick={() => changePos([43.653225, -79.383186])}>change</button>*!/*/}
            {/*        <button onClick={() => setShow(!show)}>show</button>*/}
            {/*    </Popup>*/}
            {/*    /!*<Tooltip>*/}
            {/*        test Tooltip*/}
            {/*    </Tooltip>*!/*/}
            {/*</Marker>*/}
            {/*{show && <RoutineMachine ref={rMachine} waypoints={[[24.726875, 46.710461], [33.50546582848033, 36.29547681726967]]}/>}*/}
            <Geocoder address="giza" />
{/*<LocationMarker />*/}
            <ZoomControl position="topleft" />

            {/*<GeoJSON attribution="&copy; credits due..." data={json} />*/}

        </MapContainer>
    );
};
const x = () => {
  // return
}
export default Map;