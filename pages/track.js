import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const MapWithNoSSR = dynamic(() => import("../components/maps/vector"), {
    ssr: false,
});

const Track = () => {
    return (
        <div id="map" className="mt-5">
            <MapWithNoSSR />
        </div>
    );
};

export default Track;
// translation ##################################
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["main"])),
        },
    };
}
// translation ##################################
