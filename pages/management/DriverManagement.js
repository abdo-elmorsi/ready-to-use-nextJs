import React from "react";
import { Row, Col, Card, Form, Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faCar,
  faTrash,
  faCheck,
  faTimes,
  faStreetView,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

// Modal Table Data for Assigned Vehicles
const Modal_table = [
  {
    GroupName: "TM Group",
    plateNumber: "9311",
    vehicleName: "Fares FMB920",
    color: "Black",
    ManfacturingYear: "2008/11/28",
    vehicleType: "4X4",
    modal: "model",
    actions: "Unassign Vehicle",
  },
  {
    GroupName: "TM Group",
    plateNumber: "9319",
    vehicleName: "Fares FMB920",
    color: "Black",
    ManfacturingYear: "2008/11/28",
    vehicleType: "4X4",
    modal: "model",
    actions: "Unassign Vehicle",
  },
];

// Modal Function Define for Assigned Vehicles
function AssignedVehiclesModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Assigned Vehicles
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="table-responsive">
          <table
            id="datatable"
            className="table table-striped"
            data-toggle="data-table"
          >
            <thead>
              <tr>
                <th>Group Name</th>
                <th>Plate Number</th>
                <th>Vehicle Name</th>
                <th>Color</th>
                <th>Manufacturing Year</th>
                <th>Vehicle type</th>
                <th>Model</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Modal_table.map((item) => (
                <tr key={item.plateNumber}>
                  <td>{item.GroupName}</td>
                  <td>{item.plateNumber}</td>
                  <td>{item.vehicleName}</td>
                  <td>{item.color}</td>
                  <td>{item.ManfacturingYear}</td>
                  <td>{item.vehicleType}</td>
                  <td>{item.modal}</td>
                  <td>{item.actions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="py-2 px-3" onClick={props.onHide}>
          <FontAwesomeIcon className="mx-2" icon={faTimes} size="sm" />
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function AssignedVehiclesModalBtn() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        className="btn btn-primary  px-2 py-1 me-3"
        onClick={() => setModalShow(true)}
      >
        <FontAwesomeIcon className="pe-2" icon={faCar} size="lg" />
        Show Assign Vehicles
      </Button>

      <AssignedVehiclesModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
const TableLinks = function () {
  return (
    <div>
      <Button className="btn btn-primary  px-2 py-1 me-3">
        <FontAwesomeIcon className="pe-2" icon={faEdit} size="lg" />
        Edit
      </Button>
      <Button className="btn btn-primary  px-2 py-1 me-3">
        <FontAwesomeIcon className="pe-2" icon={faTrash} size="lg" />
        Delete{" "}
      </Button>
      <Button className="btn btn-primary  px-2 py-1 me-3">
        <FontAwesomeIcon className="pe-2" icon={faStreetView} size="lg" />
        Locate Driver{" "}
      </Button>
      <AssignedVehiclesModalBtn />
    </div>
  );
};

const Data_table = [
  {
    fullName: "Fares Salah",
    phoneNumber: "05123456789",
    Email: "fares@gmail.com",
    Department: "Department",
    licenceNumber: "123456789",
    licenceEXP: "25/12/2022",
    RFID: "",
    WaslIntegration: "",
    action: <TableLinks />,
  },
  {
    fullName: "Fahad Alharbi",
    phoneNumber: "05123456789",
    Email: "fahad25@gmail.com",
    Department: "Department",
    licenceNumber: "123456789",
    licenceEXP: "25/12/2022",
    RFID: "",
    WaslIntegration: "",
    action: <TableLinks />,
  },
  {
    fullName: "Majed Alotubi",
    phoneNumber: "05123456789",
    Email: "maged@gmail.com",
    Department: "Department",
    licenceNumber: "123456789",
    licenceEXP: "25/12/2022",
    RFID: "",
    WaslIntegration: "",
    action: <TableLinks />,
  },
];

const DriverManagement = () => {
  // ===============| Add drivers bulk Modal |=================
  function AddDriversBulkModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Drivers Bulk
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="d-flex justify-content-center">
            <Col md="12">
              <Form>
                <Row className="p-3 mb-3">
                  <Col lg="12">
                    <Form.Group
                      className="form-group"
                      controlId="validationCustom01"
                    >
                      <Form.Label htmlFor="SerialNumber">
                        Select File
                      </Form.Label>
                      <Form.Control type="file" id="file" required />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <div className="mt-5 d-flex justify-content-end">
            <button className="btn btn-primary px-3 py-2 ms-3" type="submit">
              <FontAwesomeIcon className="mx-2" icon={faCheck} size="sm" />
              Submit
            </button>
            <button
              className="btn btn-primary px-3 py-2 ms-3"
              onClick={props.onHide}
            >
              <FontAwesomeIcon className="mx-2" icon={faTimes} size="sm" />
              Cancel
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }

  function AddDriversBulkModalBtn() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <>
        <Button
          type="Button"
          className="btn btn-primary  px-3 py-2 me-3 "
          onClick={() => setModalShow(true)}
        >
          <FontAwesomeIcon className="mx-2" icon={faUsers} size="sm" />
          Add Drivers Bulk
        </Button>

        <AddDriversBulkModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  // ===============| Add drivers bulk Modal |=================
  return (
    <>
      <Card>
        <Card.Body>
          <Row>
            <h4>Driver Management</h4>
            <Card.Header className="d-flex justify-content-between">
              <div className="w-100 header-title d-flex justify-content-between align-items-center p-3">
                <div>
                  <Button
                    type="Button"
                    className="btn btn-primary  px-3 py-2 me-3 "
                  >
                    <FontAwesomeIcon
                      className="mx-2"
                      icon={faUserPlus}
                      size="sm"
                    />
                    Add New Driver
                  </Button>
                  <AddDriversBulkModalBtn />
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
                      "Full Name",
                      "Phone Number",
                      "Email",
                      "Department",
                      "Licence Number",
                      "Licence Expiration Date",
                      "RFID",
                      "WASL Integration",
                      "Actions",
                    ].map((el) => {
                      return <th key={el}>{el}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  {Data_table.map((item) => {
                    return (
                      <>
                        <tr key={item.phoneNumber}>
                          <td>{item.fullName}</td>
                          <td>{item.phoneNumber}</td>
                          <td>{item.Email}</td>
                          <td>{item.Department}</td>
                          <td>{item.licenceNumber}</td>
                          <td>{item.licenceEXP}</td>
                          <td>{item.RFID}</td>
                          <td>{item.WaslIntegration}</td>
                          <td>{item.action}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="lead text-warning text-end my-3">pagination here</p>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
export default DriverManagement;
