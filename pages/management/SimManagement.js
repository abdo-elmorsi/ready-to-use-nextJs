import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faPen,
  faTrash,
  faSimCard,
  faFileCsv,
  faFileExport,
} from "@fortawesome/free-solid-svg-icons";

const TableLinks = function () {
  return (
    <div>
      <button className="btn btn-outline-primary m-1">
        <FontAwesomeIcon className="pe-2" icon={faEdit} size="lg" />
        Assin to Device
      </button>
      <button className="btn btn-outline-primary m-1">
        <FontAwesomeIcon className="pe-2" icon={faPen} size="lg" />
        Edit{" "}
      </button>
      <button className="btn btn-outline-primary m-1">
        <FontAwesomeIcon className="pe-2" icon={faTrash} size="lg" />
        Delete{" "}
      </button>
    </div>
  );
};

const Data_table = [
  {
    SIMCardSerialNumber: "123456",
    phoneNumber: "0512346789",
    providerName: "STC",
    deviceSerialNumber: "963852",
    action: <TableLinks />,
  },
  {
    SIMCardSerialNumber: "258741",
    phoneNumber: "0512346789",
    providerName: "Zain",
    deviceSerialNumber: "456789",
    action: <TableLinks />,
  },
  {
    SIMCardSerialNumber: "369874",
    phoneNumber: "0512346789",
    providerName: "Mobily",
    deviceSerialNumber: "123456",
    action: <TableLinks />,
  },
];

const SimManagement = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Row>
            <h4>Manage SIMCards</h4>
            <Card.Header className="d-flex justify-content-between">
              <div className="w-100 header-title d-flex justify-content-between align-items-center p-3">
                <div>
                  {[
                    { title: "Add SIMCard", icon: faSimCard },
                    { title: "Add SIMCard Bulk", icon: faSimCard },
                    { title: "Export Assigned SIMCards", icon: faFileExport },
                  ].map((el) => {
                    return (
                      <>
                        <button
                          type="button"
                          className="btn btn-primary  px-3 py-2 me-3 "
                          key={el.icon}
                        >
                          <FontAwesomeIcon
                            className="me-2"
                            icon={el.icon}
                            size="sm"
                          />
                          {el.title}{" "}
                        </button>
                      </>
                    );
                  })}
                </div>
                <Form.Floating className=" custom-form-floating-sm form-group m-0">
                  <Form.Control
                    type="email"
                    className=""
                    id="floatingInput6"
                    placeholder="Place Holder"
                  />
                  <label htmlFor="floatingInput">search</label>
                </Form.Floating>
              </div>
            </Card.Header>
            <div className="table-responsive">
              <table
                id="datatable"
                className="table table-striped text-center table-hover"
                data-toggle="data-table"
              >
                <thead>
                  <tr>
                    {[
                      "SIMCard Serial Number",
                      "Phone Number",
                      "Provider Name",
                      "Device Serial Number",
                      "Actions",
                    ].map((el) => {
                      return <th key={el}>{el}</th>;
                    })}
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
              <p className="lead text-warning text-end">pagination here</p>
            </div>

            <h4>Unassigned SIMCards</h4>
            <Card.Header className="d-flex justify-content-between">
              <div className="w-100 header-title d-flex justify-content-between align-items-center p-3">
                <div>
                  <button
                    type="button"
                    className="btn btn-primary  px-3 py-2 me-3"
                  >
                    <FontAwesomeIcon
                      className="me-2"
                      icon={faFileExport}
                      size="sm"
                    />
                    Export Unassigned SIMCards
                  </button>
                </div>
                <Form.Floating className=" custom-form-floating-sm form-group m-0">
                  <Form.Control
                    type="email"
                    className=""
                    id="floatingInput6"
                    placeholder="Place Holder"
                  />
                  <label htmlFor="floatingInput">search</label>
                </Form.Floating>
              </div>
            </Card.Header>
            <div className="table-responsive">
              <table
                id="datatable"
                className="table table-striped text-center table-hover"
                data-toggle="data-table"
              >
                <thead>
                  <tr>
                    {[
                      "SIMCard Serial Number",
                      "Phone Number",
                      "Provider Name",
                      "Actions",
                    ].map((el) => {
                      return <th key={el}>{el}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  {Data_table.map((item, i) => (
                    <tr key={i}>
                      <td>{item.SIMCardSerialNumber}</td>
                      <td>{item.phoneNumber}</td>
                      <td>{item.providerName}</td>
                      <td>{item.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="lead text-warning text-end">pagination here</p>
            </div>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default SimManagement;
