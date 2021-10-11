import {MapContainer, TileLayer, Marker, Popup, LayersControl, Tooltip} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import useWindowDimensions from "../../helpers/getWindowDimensions";
import {useState} from "react";
const Map = () => {
    const {heightWithoutNav} = useWindowDimensions();
    const [map, setMap] = useState(null);

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

            <LayersControl position="bottomright">
                <LayersControl.BaseLayer checked name="Saferoad">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Saferoad</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>

                <LayersControl.BaseLayer name="Hot">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Saferoad</a>'
                        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>

                <LayersControl.BaseLayer name="Dark">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Saferoad</a>'
                        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                    />
                </LayersControl.BaseLayer>

                <LayersControl.BaseLayer name="Black & White">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Saferoad</a>'
                        url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>

                <LayersControl.BaseLayer name="France">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Saferoad</a>'
                        url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>
            </LayersControl>

            <Marker position={[24.726875, 46.710461]} draggable={true} animate={true}>
                <Popup>Hey ! I live here
                    {/*<button onClick={() => changePos([43.653225, -79.383186])}>change</button>*/}
                </Popup>
                {/*<Tooltip>
                    test Tooltip
                </Tooltip>*/}
            </Marker>

        </MapContainer>
    );
};
export default Map;