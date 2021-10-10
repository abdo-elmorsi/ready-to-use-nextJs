import React, { useState, useEffect, useRef } from "react";
import DataTable from "react-data-table-component";
import {
    Row,
    Col,
    Navbar,
    Form,
    Container,
    Nav,
    Dropdown,
    Button,
} from "react-bootstrap";
import Card from "../components/Card";
export const Actions = ({ id }) => {
    return (
        <div className="d-flex  flex-column text-primary">
            <u className="mb-1">reset</u>
            <u className="mb-1">edit</u>
            <u className="mb-1">delete</u>
        </div>
    );
};
const Data_table = [
    {
        check: "check",
        name: "Demo Moaz",
        plateNumber: "358480085000471",
        mainType: "Vechile Wash",
        periodTyoe: "By Fixed Date",
        startValue: "09/26/2021",
        nextValue: "09/19/2021",
        recurring: "Exist",
        notifyPeriod: "Value",
        notifyWhenValue: "0",
        overdue: "yes",
    },
    {
        check: "check",
        name: "Demo Moaz",
        plateNumber: "358480085000471",
        mainType: "Vechile Wash",
        periodTyoe: "By Fixed Date",
        startValue: "09/26/2021",
        nextValue: "09/19/2021",
        recurring: "Exist",
        notifyPeriod: "Value",
        notifyWhenValue: "0",
        overdue: "yes",
    },
    {
        check: "check",
        name: "Demo Moaz",
        plateNumber: "358480085000471",
        mainType: "Vechile Wash",
        periodTyoe: "By Fixed Date",
        startValue: "09/26/2021",
        nextValue: "09/19/2021",
        recurring: "Exist",
        notifyPeriod: "Value",
        notifyWhenValue: "0",
        overdue: "yes",
    },
    {
        check: "check",
        name: "Demo Moaz",
        plateNumber: "358480085000471",
        mainType: "Vechile Wash",
        periodTyoe: "By Fixed Date",
        startValue: "09/26/2021",
        nextValue: "09/19/2021",
        recurring: "Exist",
        notifyPeriod: "Value",
        notifyWhenValue: "0",
        overdue: "yes",
    },
    {
        check: "check",
        name: "Demo Moaz",
        plateNumber: "358480085000471",
        mainType: "Vechile Wash",
        periodTyoe: "By Fixed Date",
        startValue: "09/26/2021",
        nextValue: "09/19/2021",
        recurring: "Exist",
        notifyPeriod: "Value",
        notifyWhenValue: "0",
        overdue: "yes",
    },
];

export default function DriversManagement() {
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
    // <th className="text-center">check</th>
    // <th className="text-center">Display Name</th>
    // <th className="text-center">Plate Number</th>
    // <th className="text-center">Maintenance Type</th>
    // <th className="text-center">Period Type</th>
    // <th className="text-center">Start Value</th>
    // <th className="text-center">Next Value</th>
    // <th className="text-center">Recurring</th>
    // <th className="text-center">Notify Period</th>
    // <th className="text-center">Notify When Value</th>
    // <th className="text-center">Overdue</th>
    // <th className="text-center">action</th>
    const columns = [
        {
            name: "check",
            selector: (row) => row.check,
            sortable: true,
            // center: true
        },
        {
            name: "Display Name",
            selector: (row) => row.name,
            sortable: true,
            // center: true
        },
        {
            name: "Plate Number",
            selector: (row) => row.plateNumber,
            sortable: true,
            // center: true,
        },
        {
            name: "Maintenance Type",
            selector: (row) => row.mainType,
            sortable: true,
            // center: true,
        },
        {
            name: "Period Type",
            selector: (row) => row.periodTyoe,
            sortable: true,
            // center: true,
        },
        {
            name: "Start Value",
            selector: (row) => row.startValue,
            sortable: true,
            // center: true,
        },
        {
            name: "Next Value",
            selector: (row) => row.nextValue,
            sortable: true,
            // center: true,
        },
        {
            name: "Recurring",
            selector: (row) => row.recurring,
            sortable: true,
            // center: true,
        },
        {
            name: "Notify Period",
            selector: (row) => row.notifyPeriod,
            sortable: true,
            // center: true,
        },
        {
            name: "Notify When Value",
            selector: (row) => row.notifyWhenValue,
            sortable: true,
            // center: true,
        },
        {
            name: "Overdue",
            selector: (row) => row.overdue,
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
        <div>
            {/* table */}
            <Row>
                <Col sm="12">
                    <Card>
                        <Card.Header className="d-flex justify-content-between bg-primary">
                            <div className="header-title mx-auto pb-3">
                                <h4 className="card-title bg-primary text-white">
                                    Driver Management
                                </h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {/* table buttons start */}
                            <div className="d-flex justify-content-center justify-content-lg-between flex-wrap align-content-center">
                                <Navbar expand="sm" className="navbar-light">
                                    <Container fluid>
                                        <Nav className="me-auto  d-flex justify-content-end align-items-start col-12">
                                            <Nav variant="pills">
                                                <Button variant="primary m-2 py-2">
                                                    Add New Driver
                                                </Button>
                                                <Button variant="primary m-2 py-2">
                                                    Add Divers Bulk
                                                </Button>
                                            </Nav>
                                        </Nav>
                                    </Container>
                                </Navbar>
                                <Form.Floating className="custom-form-floating custom-form-floating-sm">
                                    <Form.Control
                                        ref={inputEl}
                                        type="search"
                                        className="mt-2"
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
        </div>
    );
}