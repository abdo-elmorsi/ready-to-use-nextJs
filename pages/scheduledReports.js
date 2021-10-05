import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Form, Nav, Tab, FormCheck, Button } from "react-bootstrap";

import Card from "../components/Card";

export default function ScheduledReports() {
    const [check, setCheck] = useState([]);
    let newArr = [];
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
    ];
    const handelAllCheckbox = (ele) => {
        const neww = check.map((e) => (e = ele.target.checked));
        setCheck(neww);
    };
    useEffect(() => {
        Data_table.map((item, index) => {
            newArr[index] = false;
            setCheck(newArr);
        });
    }, []);
    const handleCheckBox = (index) => {
        console.log(index);
        // const newArr = [...check, !check[index]];
        // setCheck(newArr);
        console.log(newArr);
    };
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
                            <div className="d-flex justify-content-center justify-content-md-between flex-wrap">
                                <div className="d-flex  align-items-center mb-3 mb-md-0">
                                    <span className="text-primary">Show</span>
                                    <Form.Select className="mx-1" id="count">
                                        {["10", "25", "50", "100"].map(
                                            (ele, i) => (
                                                <option
                                                    key={ele}
                                                    defaultValue={
                                                        i === 0 ? true : false
                                                    }
                                                >
                                                    {ele}
                                                </option>
                                            )
                                        )}
                                    </Form.Select>
                                    <span className="text-primary">
                                        entries
                                    </span>
                                </div>
                                <Form.Floating className=" custom-form-floating custom-form-floating-sm form-group mb-3">
                                    <Form.Control
                                        type="email"
                                        className=""
                                        id="floatingInput5"
                                        autoComplete="username email"
                                        placeholder="Place Holder"
                                    />
                                    <label htmlFor="floatingInput">
                                        serach
                                    </label>
                                </Form.Floating>
                            </div>
                            <div className="table-responsive">
                                <table
                                    id="datatable"
                                    className="table table-striped table-hover"
                                    data-toggle="data-table"
                                >
                                    <thead>
                                        <tr>
                                            <th className="text-center">
                                                <Form.Check className="">
                                                    <FormCheck.Input
                                                        onChange={(ele) =>
                                                            handelAllCheckbox(
                                                                ele
                                                            )
                                                        }
                                                        className=""
                                                        type="checkbox"
                                                        id="disabledFieldsetCheck"
                                                        disabled=""
                                                    />
                                                </Form.Check>
                                            </th>
                                            {[
                                                "Reports Type",
                                                "Frequency Type",
                                                "N. of Vehicles",
                                                "N. of Users",
                                                "Additional Emails",
                                                "Additional Phone N",
                                                "Description",
                                                "Actions",
                                            ].map((ele, i) => (
                                                <th
                                                    key={ele}
                                                    className="text-center"
                                                >
                                                    {ele}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Data_table.map((item, index) => (
                                            <tr key={item.additionalPhoneN}>
                                                <td className="text-center">
                                                    <Form.Check className="">
                                                        <FormCheck.Input
                                                            onChange={() =>
                                                                handleCheckBox(
                                                                    index + 1
                                                                )
                                                            }
                                                            className=""
                                                            type="checkbox"
                                                            id="disabledFieldsetCheck"
                                                            disabled=""
                                                            checked={
                                                                check[index]
                                                            }
                                                        />
                                                    </Form.Check>
                                                </td>
                                                <td className="text-center">
                                                    {item.reportType}
                                                </td>
                                                <td className="text-center">
                                                    {item.frequencyType}
                                                </td>
                                                <td className="text-center">
                                                    {item.numberOfVehicles}
                                                </td>
                                                <td className="text-center">
                                                    {item.numberOfUsers}
                                                </td>
                                                <td className="text-center">
                                                    {item.additionalEmails}
                                                </td>
                                                <td className="text-center">
                                                    {item.additionalPhoneN}
                                                </td>
                                                <td className="text-center">
                                                    {item.description}
                                                </td>
                                                <td className="text-center">
                                                    {[
                                                        "Delete",
                                                        "Edit",
                                                        "Deactivate",
                                                        "Show Vehicles",
                                                        "Show Users",
                                                    ].map((ele) => (
                                                        <u
                                                            key={ele}
                                                            className="d-flex text-primary"
                                                        >
                                                            {ele}
                                                        </u>
                                                    ))}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}
