import { Row, Col, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUsers,
    faPlug,
    faUsersCog,
    faPen,
    faCar,
    faSquare,
    faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// CardCountStart Component
import CardCountStart from "../../components/CardCountStart";

const cards_Data = [
    {
        icon: "faUsers",
        Num: 23,
        title: "Active Vehicles",
        desc: "Vehicles that is currently live and send data.",
    },
    {
        icon: "faUsers",
        Num: 2,
        title: "",
        desc: "",
    },
    {
        icon: "faUsers",
        Num: 1,
        title: "",
        desc: "",
    },
    {
        icon: "faUsers",
        Num: 1,
        title: "",
        desc: "",
    },
];

const VehicleManagment = () => {
    return (
        <>
            <Row>
                <Card>
                    <Card.Body>
                        <Row>
                            <CardCountStart
                                icon={faUsers}
                                iconColor="primary"
                                title="Active_Vehicles"
                                countEnd="23"
                                desc="Vehicles that is currently live and send data."
                            />
                            <CardCountStart
                                icon={faPlug}
                                iconColor="success"
                                title="Inactive_Vehicles"
                                countEnd="2"
                                desc="Vehicles that didn't send any data for more than one minute."
                            />
                            <CardCountStart
                                icon={faUsersCog}
                                iconColor="warning"
                                title="Unassigned_Devices"
                                countEnd="1"
                                desc="Devices that are Added to the system but not yet assigned to a vehicle."
                            />
                            <CardCountStart
                                icon={faUserEdit}
                                iconColor="info"
                                title="Active_Accounts"
                                countEnd="2"
                                desc="Accounts that are active on the system."
                            />
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
        </>
    );
};

export default VehicleManagment;

// translation ##################################
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["Management", "main"])),
        },
    };
}
// translation ##################################
