import React, {useState, useEffect} from "react";
import {Row, Col, Card, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faUsers,
    faPlug,
    faUsersCog,
    faPen,
    faCar,
    faSquare,
    faUserEdit,
} from "@fortawesome/free-solid-svg-icons";

// CardCountStart Component
import CardCountStart from "../../../../components/CardCountStart";

// translation
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {getSession} from "next-auth/client";

// function returns buttons for table actions
const TableLinks = ({id}) => {
    const {t} = useTranslation("Management");
    return (
        <div>
            <button className="btn btn-outline-primary m-1">
                <FontAwesomeIcon className="pe-2" icon={faCar} size="lg"/>
                {t("Manage_Vehicles")}
            </button>
            <button className="btn btn-outline-primary m-1">
                <FontAwesomeIcon className="pe-2" icon={faUsers} size="lg"/>
                {t("Manage_users")}
            </button>
            <button className="btn btn-outline-primary m-1">
                <FontAwesomeIcon className="pe-2" icon={faPen} size="lg"/>
                {t("Edit_supscirption")}
            </button>
            <button className="btn btn-outline-primary m-1">
                <FontAwesomeIcon className="pe-2" icon={faSquare} size="lg"/>
                {t("suspend")}
            </button>
        </div>
    );
};

//  second table action btn
export const CompleteBtn = () => {
    const {t} = useTranslation("Management");
    return (
        <button className="btn btn-outline-primary m-1">
            <FontAwesomeIcon className="pe-2" icon={faUserEdit} size="lg"/>{" "}
            {t("Complete_Account")}
        </button>)
};

// first date Table
const Data_table = [
    {
        accName: "Demo Moaz",
        billing: "09/26/2021",
        parent: "SafeRoad All",
        status: "active",
        reseller: "Undistributed",
        action: <TableLinks/>,
    },
    {
        accName: "Demo Moaz",
        billing: "09/26/2021",
        parent: "SafeRoad All",
        status: "active",
        reseller: "Undistributed",
        action: <TableLinks/>,
    },
    {
        accName: "Demo Moaz",
        billing: "09/26/2021",
        parent: "SafeRoad All",
        status: "active",
        reseller: "Undistributed",
        action: <TableLinks/>,
    },
    {
        accName: "Demo Moaz",
        billing: "09/26/2021",
        parent: "SafeRoad All",
        status: "active",
        reseller: "Undistributed",
        action: <TableLinks/>,
    },
];
// second date Table
const Data_table2 = [
    {
        accName: "Demo Moaz",
        billing: "09/26/2021",
        parent: "SafeRoad All",
        status: "active",
        reseller: "Undistributed",
        action: <CompleteBtn/>,
    },
    {
        accName: "Demo Moaz",
        billing: "09/26/2021",
        parent: "SafeRoad All",
        status: "active",
        reseller: "Undistributed",
        action: <CompleteBtn/>,
    },
    {
        accName: "Demo Moaz",
        billing: "09/26/2021",
        parent: "SafeRoad All",
        status: "active",
        reseller: "Undistributed",
        action: <CompleteBtn/>,
    },
    {
        accName: "Demo Moaz",
        billing: "09/26/2021",
        parent: "SafeRoad All",
        status: "active",
        reseller: "Undistributed",
        action: <CompleteBtn/>,
    },
];

const AccountManagement = () => {
    const {t} = useTranslation("Management");

    return (
        <>
            <Row>
                <CardCountStart
                    icon={faUsers}
                    iconColor="primary"
                    title="Total_Accounts"
                    countEnd="115"
                />
                <CardCountStart
                    icon={faUsers}
                    iconColor="success"
                    title="Active_Accounts"
                    countEnd="2"
                />
                <CardCountStart
                    icon={faPlug}
                    iconColor="warning"
                    title="Suspended_Accounts"
                    countEnd="5"
                />
                <CardCountStart
                    icon={faUsersCog}
                    iconColor="info"
                    title="Distributor_Accounts"
                    countEnd="2"
                />
            </Row>
            <Row>
                <Row className="g-3">
                    <Col sm="12">
                        <Card className="h-100">
                            <nav className="navbar navbar-dark navbar-lg shadow rounded p-3">
                                <h3>{t("Manage_Accounts")}</h3>
                            </nav>
                            <Card.Header className="d-flex justify-content-between">
                                <div
                                    className="w-100 header-title d-flex justify-content-between align-items-center p-3">
                                    <div>
                                        <button
                                            type="button"
                                            className="btn btn-primary  px-3 py-2 me-3 "
                                        >
                                            {t("Add_Account")}
                                        </button>
                                    </div>
                                    <Form.Floating className=" custom-form-floating-sm form-group m-0">
                                        <Form.Control
                                            type="email"
                                            className=""
                                            id="floatingInput6"
                                            placeholder="Place Holder"
                                        />
                                        <label htmlFor="floatingInput">
                                            {t("main:search")}
                                        </label>
                                    </Form.Floating>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="table-responsive">
                                    <table
                                        id="datatable"
                                        className="table table-striped text-center"
                                        data-toggle="data-table"
                                    >
                                        <thead>
                                        <tr>
                                            <th>Account Name</th>
                                            <th>Next Billing Date</th>
                                            <th>Parent Account</th>
                                            <th>Status</th>
                                            <th>Reseller</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {Data_table.map((item, i) => (
                                            <tr key={i}>
                                                <td>{item.accName}</td>
                                                <td>{item.billing}</td>
                                                <td>{item.parent}</td>
                                                <td>{item.status}</td>
                                                <td>{item.reseller}</td>
                                                <td>{item.action}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                    <p className="lead text-warning text-end">
                                        pagination here
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* ================== second table  ===================== */}
                    <Col sm="12">
                        <Card className="h-100">
                            <Card.Header className="d-flex justify-content-between">
                                <div
                                    className="w-100 header-title d-flex justify-content-between align-items-center p-3">
                                    <div>
                                        <h3>{t("Incompleted_Accounts")}</h3>
                                    </div>
                                    <Form.Floating className=" custom-form-floating-sm form-group m-0">
                                        <Form.Control
                                            type="email"
                                            className=""
                                            id="floatingInput6"
                                            placeholder="Place Holder"
                                        />
                                        <label htmlFor="floatingInput">
                                            {t("main:search")}
                                        </label>
                                    </Form.Floating>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="table-responsive">
                                    <table
                                        id="datatable"
                                        className="table table-striped text-center"
                                        data-toggle="data-table"
                                    >
                                        <thead>
                                        <tr>
                                            <th>Account Name</th>
                                            <th>Next Billing Date</th>
                                            <th>Parent Account</th>
                                            <th>Status</th>
                                            <th>Reseller</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {Data_table2.map((item, i) => (
                                            <tr key={i}>
                                                <td>{item.accName}</td>
                                                <td>{item.billing}</td>
                                                <td>{item.parent}</td>
                                                <td>{item.status}</td>
                                                <td>{item.reseller}</td>
                                                <td>{item.action}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                    <p className="lead text-warning text-end">
                                        pagination here
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Row>
        </>
    );
};

export async function getServerSideProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["Management", "main"])),
        },
    }
}

export default AccountManagement;
