import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import DataTable from "react-data-table-component";

// translation
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const Actions = ({ id }) => {
    return (
        <div className="d-flex  flex-column text-primary">
            <u className="mb-1">edit</u>
            <u className="mb-1">delete</u>
            <u className="mb-1">Deactivate</u>
            <u className="mb-1">Show Vehicles</u>
            <u className="mb-1">Show Users</u>
        </div>
    );
};
const Data_table = [
    {
        reportType: "Fuel Summary Report",
        frequencyType: "Daily",
        numberOfVehicles: "33",
        numberOfUsers: "1",
        additionalEmails: "ashraf@saferoad.com.sa",
        additionalPhoneN: "01010754088",
        description: "test test",
    },
    {
        reportType: "Offline Vehicles Report",
        frequencyType: "Daily",
        numberOfVehicles: "64",
        numberOfUsers: "2",
        additionalEmails: "ashraf@saferoad.com.sa",
        additionalPhoneN: "0101045658088",
        description: "test test",
    },
    {
        reportType: "Fuel Summary Report",
        frequencyType: "Daily",
        numberOfVehicles: "75",
        numberOfUsers: "6",
        additionalEmails: "ashraf@saferoad.com.sa",
        additionalPhoneN: "01010548088",
        description: "test test",
    },
];

export default function ScheduledReports() {
    const { t } = useTranslation("scheduledReports");

    const [result, setResult] = useState([]);
    const inputEl = useRef("");
    const handleSearch = () => {
        if (inputEl.current.value !== "") {
            const newData = Data_table.filter((item) => {
                return Object.values(item)
                    .join(" ")
                    .toLocaleLowerCase()
                    .includes(inputEl.current.value.toLocaleLowerCase());
            });
            setResult(newData);
        } else {
            setResult(Data_table);
        }
    };
    const columns = [
        {
            name: "Reports Type",
            selector: (row) => row.reportType,
            sortable: true,
            // center: true
        },
        {
            name: "Frequency Type",
            selector: (row) => row.frequencyType,
            sortable: true,
            // center: true
        },
        {
            name: "N. of Vehicles",
            selector: (row) => row.numberOfVehicles,
            sortable: true,
            // center: true,
        },
        {
            name: "Additional Emails",
            selector: (row) => row.numberOfUsers,
            sortable: true,
            // center: true,
        },
        {
            name: "Additional Phone N",
            selector: (row) => row.additionalEmails,
            sortable: true,
            // center: true,
        },
        {
            name: "additional Phone N",
            selector: (row) => row.additionalPhoneN,
            sortable: true,
            // center: true,
        },
        {
            name: "Description",
            selector: (row) => row.description,
            sortable: true,
            // center: true,
        },
        {
            name: "Actions",
            // sortable: true,
            // center: true,
            reorder: true,
            cell: (row) => <Actions id={row.id} />,
        },
    ];
    // const [users, setUsers] = useState([]);
    // const [page, setPage] = useState(1);
    // const countPerPage = 5;
    // const getUserList = async () => {
    //     await fetch(
    //         `https://reqres.in/api/users?page=${page}&per_page=${countPerPage}&delay=1`
    //     )
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((myJson) => {
    //             setUsers(myJson);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };
    useEffect(() => {
        setResult(Data_table);
        // getUserList();
    }, []);

    return (
        <>
            <Row>
                <Col sm="12">
                    <Card>
                        <Card.Body>
                            <div className="d-flex justify-content-center justify-content-md-between flex-wrap">
                                <div className="d-flex justify-content-end mb-4">
                                    <Button
                                        variant="primary p-2"
                                        style={{ fontSize: "13px" }}
                                    >
                                        {t("Add_Scheduled_Report")}
                                    </Button>
                                    <Button
                                        variant="primary p-2 ms-2"
                                        style={{ fontSize: "13px" }}
                                    >
                                        {t("preventiveMaintenance:Delete_Selected")}
                                    </Button>
                                </div>
                                <Form.Floating className="custom-form-floating custom-form-floating-sm form-group">
                                    <Form.Control
                                        ref={inputEl}
                                        type="search"
                                        className=""
                                        id="floatingInput5"
                                        placeholder="Place Holder"
                                        onChange={handleSearch}
                                    />
                                    <label htmlFor="floatingInput">
                                        {t("main:search")}
                                    </label>
                                </Form.Floating>
                            </div>
                            <DataTable
                                // title="Schedule Reports"
                                columns={columns}
                                highlightOnHover
                                selectableRows
                                // subHeader
                                data={inputEl < 1 ? Data_table : result}
                                pagination
                                // paginationServer
                                // paginationTotalRows={users.total}
                                // paginationPerPage={countPerPage}
                                // paginationComponentOptions={{
                                //     noRowsPerPage: false,
                                // }}
                                // onChangePage={(page) => setPage(page)}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}
// translation ##################################
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['scheduledReports','main','preventiveMaintenance'])),
        },
    };
}
// translation ##################################