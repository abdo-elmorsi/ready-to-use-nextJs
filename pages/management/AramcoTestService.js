<<<<<<< HEAD
import React from "react";
import { Col, Row, Modal, Button, Card, Form } from "react-bootstrap";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

=======
import React, { useState } from "react";
import { Col, Row, Modal, Button, Card, Form } from "react-bootstrap";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";
>>>>>>> 1b62e6d014ae8756c4900b3a87ad46a5d6f11999
// options for select menu
const options = [
  { value: "STC", label: "STC" },
  { value: "Zain", label: "Zain" },
  { value: "Mobily", label: "Mobily" },
];

const Data_table = [
  {
    UDID: "123",
    MsgType: "Message",
    JsonMsg: "Json Message",
    RecordDateTime: "2008/11/28 | 10:35 P.M",
  },
];

const AramcoTestService = () => {
<<<<<<< HEAD
=======
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
>>>>>>> 1b62e6d014ae8756c4900b3a87ad46a5d6f11999
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Submit Device
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="d-flex justify-content-center">
            <Col md="12">
<<<<<<< HEAD
              <Form className="was-validated" validated>
=======
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
>>>>>>> 1b62e6d014ae8756c4900b3a87ad46a5d6f11999
                <Row className="p-3 mb-3">
                  <Col lg="12">
                    <Form.Group
                      className="form-group"
                      controlId="validationCustom01"
                    >
                      <Form.Label htmlFor="SerialNumber">
                        {" "}
                        Serial Number
                      </Form.Label>
<<<<<<< HEAD
                      <Form.Control type="number" id="SerialNumber" />
=======
                      <Form.Control type="number" id="SerialNumber" required />
>>>>>>> 1b62e6d014ae8756c4900b3a87ad46a5d6f11999
                    </Form.Group>
                  </Col>
                  <Col lg="12">
                    <div className="mb-3">
                      <Form.Group className="form-group">
                        <Form.Label htmlFor="ProviderName">
                          List Of Commands
                        </Form.Label>
                        <Select options={options} />
                      </Form.Group>
                    </div>
                  </Col>
                  <Col lg="12">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="Value">Value</Form.Label>
                      <Form.Control type="number" id="phoneNumber" />
                    </Form.Group>
                  </Col>
                </Row>
<<<<<<< HEAD
                <div className="mt-5 d-flex justify-content-end">
                  <button
                    className="btn btn-primary px-3 py-2 ms-3"
                    type="button"
                  >
                    <FontAwesomeIcon
                      size="sm"
                      className="me-2"
                      icon={faCheck}
                    />
                    Submit
                  </button>
                  <button
                    className="btn btn-primary px-3 py-2 ms-3"
                    onClick={props.onHide}
                  >
                    {" "}
                    <FontAwesomeIcon
                      size="sm"
                      className="me-2"
                      icon={faTimes}
                    />
                    Cancel
                  </button>
                </div>
=======
>>>>>>> 1b62e6d014ae8756c4900b3a87ad46a5d6f11999
              </Form>
            </Col>
          </Row>
        </Modal.Body>
<<<<<<< HEAD
        <Modal.Footer></Modal.Footer>
=======
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
>>>>>>> 1b62e6d014ae8756c4900b3a87ad46a5d6f11999
      </Modal>
    );
  }

  function SubmitDeviceBtn() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <>
        <Button
          type="Button"
          className="btn btn-primary  px-3 py-2 me-3 "
          onClick={() => setModalShow(true)}
        >
<<<<<<< HEAD
          <FontAwesomeIcon size="sm" className="me-2" icon={faCheck} />
          Submit Device{" "}
=======
          <FontAwesomeIcon className="me-2" icon={faEdit} size="sm" />
          Submit Device
>>>>>>> 1b62e6d014ae8756c4900b3a87ad46a5d6f11999
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  return (
    <div>
      <Row>
        <Card>
          <Card.Body>
            <h4>Aramco Test Service</h4>
            <Card.Header className="d-flex justify-content-between">
              <div className="w-100 header-title d-flex justify-content-between align-items-center p-3">
                <div>
                  <SubmitDeviceBtn />
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
                className="table table-striped"
                data-toggle="data-table"
              >
                <thead>
                  <tr>
                    <th>UDID</th>
                    <th>Message Type</th>
                    <th>Json Message</th>
                    <th>Record Date Time</th>
                  </tr>
                </thead>
                <tbody>
                  {Data_table.map((item) => (
                    <tr key={item.UDID}>
                      <td>{item.UDID}</td>
                      <td>{item.MsgType}</td>
                      <td>{item.JsonMsg}</td>
                      <td>{item.RecordDateTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};

export default AramcoTestService;
