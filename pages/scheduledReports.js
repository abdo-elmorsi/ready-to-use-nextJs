import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import DataTable from "react-data-table-component";

import Card from "../components/Card";
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

export default function ScheduledReports() {
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
    // const countPerPage = 10;
    const [page, setPage] = useState(1);

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
        {
            reportType: "Offline Vehicles Report",
            frequencyType: "Daily",
            numberOfVehicles: "87",
            numberOfUsers: "3",
            additionalEmails: "ashraf@saferoad.com.sa",
            additionalPhoneN: "01010808088",
            description: "test test",
        },
        {
            reportType: "samy sair",
            frequencyType: "Daily",
            numberOfVehicles: "75",
            numberOfUsers: "6",
            additionalEmails: "ashraf@saferoad.com.sa",
            additionalPhoneN: "01010548088",
            description: "test test",
        },
        {
            reportType: "Offline Vehicles Report",
            frequencyType: "Daily",
            numberOfVehicles: "87",
            numberOfUsers: "3",
            additionalEmails: "ashraf@saferoad.com.sa",
            additionalPhoneN: "01010808088",
            description: "test test",
        },
        {
            reportType: "fady abdo",
            frequencyType: "Daily",
            numberOfVehicles: "75",
            numberOfUsers: "6",
            additionalEmails: "ashraf@saferoad.com.sa",
            additionalPhoneN: "01010548088",
            description: "test test",
        },
        {
            reportType: "Offline Vehicles Report",
            frequencyType: "Daily",
            numberOfVehicles: "87",
            numberOfUsers: "3",
            additionalEmails: "ashraf@saferoad.com.sa",
            additionalPhoneN: "01010808088",
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
        {
            reportType: "abdo test",
            frequencyType: "Daily",
            numberOfVehicles: "87",
            numberOfUsers: "3",
            additionalEmails: "ashraf@saferoad.com.sa",
            additionalPhoneN: "01010808088",
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
        {
            reportType: "Offline Vehicles Report",
            frequencyType: "Daily",
            numberOfVehicles: "87",
            numberOfUsers: "3",
            additionalEmails: "ashraf@saferoad.com.sa",
            additionalPhoneN: "01010808088",
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
        {
            reportType: "Offline Vehicles Report",
            frequencyType: "Daily",
            numberOfVehicles: "87",
            numberOfUsers: "3",
            additionalEmails: "ashraf@saferoad.com.sa",
            additionalPhoneN: "01010808088",
            description: "test test",
        },
        {
            reportType: "samy sair",
            frequencyType: "Daily",
            numberOfVehicles: "75",
            numberOfUsers: "6",
            additionalEmails: "ashraf@saferoad.com.sa",
            additionalPhoneN: "01010548088",
            description: "test test",
        },
        {
            reportType: "Offline Vehicles Report",
            frequencyType: "Daily",
            numberOfVehicles: "87",
            numberOfUsers: "3",
            additionalEmails: "ashraf@saferoad.com.sa",
            additionalPhoneN: "01010808088",
            description: "test test",
        },
        {
            reportType: "fady abdo",
            frequencyType: "Daily",
            numberOfVehicles: "75",
            numberOfUsers: "6",
            additionalEmails: "ashraf@saferoad.com.sa",
            additionalPhoneN: "01010548088",
            description: "test test",
        },
        {
            reportType: "Offline Vehicles Report",
            frequencyType: "Daily",
            numberOfVehicles: "87",
            numberOfUsers: "3",
            additionalEmails: "ashraf@saferoad.com.sa",
            additionalPhoneN: "01010808088",
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
        {
            reportType: "abdo test",
            frequencyType: "Daily",
            numberOfVehicles: "87",
            numberOfUsers: "3",
            additionalEmails: "ashraf@saferoad.com.sa",
            additionalPhoneN: "01010808088",
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
        {
            reportType: "Offline Vehicles Report",
            frequencyType: "Daily",
            numberOfVehicles: "87",
            numberOfUsers: "3",
            additionalEmails: "ashraf@saferoad.com.sa",
            additionalPhoneN: "01010808088",
            description: "test test",
        },
    ];
    useEffect(() => {
        setResult(Data_table);
    }, [page]);

    return (
        <>
            <Row>
                <Col sm="12">
                    <Card>
                        <Card.Header className="d-flex justify-content-between bg-primary">
                            <div className="header-title mx-auto pb-3">
                                <h4 className="card-title bg-primary text-white">
                                    Schedule Reports
                                </h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex justify-content-center justify-content-md-between flex-wrap">
                                <div className="d-flex justify-content-end mb-4">
                                    <a href="#">
                                        <Button variant="primary rounded-pill p-2">
                                            Add Scheduled Report
                                        </Button>
                                    </a>
                                    <Button variant="primary rounded-pill p-2 ms-2">
                                        Delete Selected
                                    </Button>
                                </div>
                                <Form.Floating className=" custom-form-floating custom-form-floating-sm form-group mb-3">
                                    <Form.Control
                                        ref={inputEl}
                                        type="text"
                                        className=""
                                        id="floatingInput5"
                                        placeholder="Place Holder"
                                        onChange={handleSearch}
                                    />
                                    <label htmlFor="floatingInput">
                                        serach
                                    </label>
                                </Form.Floating>
                            </div>
                            <DataTable
                                // title="Schedule Reports"
                                columns={columns}
                                highlightOnHover
                                selectableRows
                                pagination="true"
                                subHeader
                                data={result < 1 ? Data_table : result}
                                paginationServer
                                paginationTotalRows={Data_table.length}
                                paginationPerPage={10}
                                paginationComponentOptions={{
                                    noRowsPerPage: false,
                                }}
                                onChangePage={(page) => setPage(page)}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}
