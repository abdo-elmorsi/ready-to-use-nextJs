import dynamic from "next/dynamic";
const MapWithNoSSR = dynamic(() => import("../components/maps/vector"), {
    ssr: false
});
const Track = () => {
    return (
        <div id="map" className="mt-5">
            <MapWithNoSSR />
        </div>
    )
}

export default Track