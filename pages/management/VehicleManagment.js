import { Row, Col, Button, Card, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faPlug,
  faUsersCog,
  faPen,
  faCar,
  faFileCsv,
  faRandom,
  faFileExport,
  faUserEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
// translation
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// CardCountStart Component
import CardCountStart from "../../components/CardCountStart";

const tableBtns1 = () => {
  return (
    <div>
      <Button className="btn btn-primary px-2 mx-1">
        <FontAwesomeIcon size="sm" className="me-2" icon={faPen} />
        Edit
      </Button>
      <Button className="btn btn-primary px-2 mx-1">
        <FontAwesomeIcon size="sm" className="me-2" icon={faTrash} />
        Delete
      </Button>
      <Button className="btn btn-primary px-2 mx-1">
        <FontAwesomeIcon size="sm" className="me-2" icon={faPen} />
        Edit Accessorry
      </Button>
    </div>
  );
};

const tableBtns2 = () => {
  return (
    <div>
      <Button className="btn btn-primary px-2 mx-1">
        <FontAwesomeIcon size="sm" className="me-2" icon={faPen} />
        Assign Device
      </Button>
      <Button className="btn btn-primary px-2 mx-1">
        <FontAwesomeIcon size="sm" className="me-2" icon={faPen} />
        Edit
      </Button>
      <Button className="btn btn-primary px-2 mx-1">
        <FontAwesomeIcon size="sm" className="me-2" icon={faTrash} />
        Delete
      </Button>
    </div>
  );
};

const Data_table = [
  {
    plateNumber: "0304684068",
    displayName: "Moaz Khan 5716 ULB",
    ManufactCompany: "",
    vehicleType: "",
    ChassisNum: "",
    ManfactYear: "2019",
    DeviceSN: "0304684068",
    deviceType: "SR01",
    WASL: "Vehicle Not Assigned To Driver and Not Registered",
    actions: tableBtns1(),
  },
  {
    plateNumber: "0304684068",
    displayName: "Moaz Khan 5716 ULB",
    ManufactCompany: "",
    vehicleType: "",
    ChassisNum: "",
    ManfactYear: "2019",
    DeviceSN: "0304684068",
    deviceType: "SR01",
    WASL: "Vehicle Not Assigned To Driver and Not Registered",
    actions: tableBtns1(),
  },
  {
    plateNumber: "0304684768",
    displayName: "Moaz Khan 5716 ULB",
    ManufactCompany: "",
    vehicleType: "",
    ChassisNum: "",
    ManfactYear: "2019",
    DeviceSN: "0304684068",
    deviceType: "SR01",
    WASL: "Vehicle Not Assigned To Driver and Not Registered",
    actions: tableBtns1(),
  },
  {
    plateNumber: "0304684968",
    displayName: "Moaz Khan 5716 ULB",
    ManufactCompany: "",
    vehicleType: "",
    ChassisNum: "",
    ManfactYear: "2019",
    DeviceSN: "0304684068",
    deviceType: "SR01",
    WASL: "Vehicle Not Assigned To Driver and Not Registered",
    actions: tableBtns1(),
  },
];

const Data_table2 = [
  {
    plateNumber: "0304684068",
    displayName: "Moaz Khan",
    ManufactCompany: "",
    vehicleType: "",
    ChassisNum: "5654562",
    ManfactYear: "2019",
    actions: tableBtns2(),
  },
  {
    plateNumber: "0304684768",
    displayName: "Muntasir",
    ManufactCompany: "",
    vehicleType: "",
    ChassisNum: "5654566",
    ManfactYear: "2020",
    actions: tableBtns2(),
  },
  {
    plateNumber: "0304684968",
    displayName: "Moaz Khan 5716 ULB",
    ManufactCompany: "",
    vehicleType: "",
    ChassisNum: "5654564",
    ManfactYear: "2019",
    actions: tableBtns2(),
  },
];

const VehicleManagment = () => {
  const { t } = useTranslation("Management");
  return (
    <>
      <Row>
        <Card>
          <Card.Body>
            <Row>
              <CardCountStart
                icon={faCar}
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

              <Col>
                <Card>
                  <Card.Body>
                    <div className="w-100 card-title mb-4 h3">
                      {t("Manage_Vehicles")}
                    </div>
                    <div className="d-flex justify-content-center justify-content-md-between flex-wrap">
                      <div className="d-flex justify-content-center flex-wrap mb-4">
                        <Button
                          variant="primary p-2"
                          className="mb-2 mb-md-0"
                          style={{ fontSize: "13px" }}
                        >
                          <FontAwesomeIcon
                            className="me-2"
                            icon={faCar}
                            size="sm"
                          />{" "}
                          Add Vehicle{" "}
                        </Button>
                        <Button
                          variant="primary p-2 ms-2"
                          className="mb-2 mb-md-0"
                          style={{ fontSize: "13px" }}
                        >
                          <FontAwesomeIcon
                            className="me-2"
                            icon={faFileCsv}
                            size="sm"
                          />{" "}
                          Add Vehicles Bulk
                        </Button>
                        <Button
                          variant="primary p-2 ms-2"
                          className="mb-2 mb-md-0"
                          style={{ fontSize: "13px" }}
                        >
                          <FontAwesomeIcon
                            className="me-2"
                            icon={faRandom}
                            size="sm"
                          />{" "}
                          Transfer Device to account
                        </Button>
                        <Button
                          variant="primary p-2 ms-2"
                          className="mb-2 mb-md-0"
                          style={{ fontSize: "13px" }}
                        >
                          <FontAwesomeIcon
                            className="me-2"
                            icon={faFileExport}
                            size="sm"
                          />{" "}
                          Export
                        </Button>
                      </div>
                      <Form.Floating className="custom-form-floating custom-form-floating-sm form-group">
                        <Form.Control
                          type="search"
                          className=""
                          id="floatingInput5"
                          placeholder="Search..."
                        />
                        <label htmlFor="floatingInput">
                          {t("main:search")}
                        </label>
                      </Form.Floating>
                    </div>

                    <div className="table-responsive table-hover text-center">
                      <table
                        id="datatable"
                        className="table table-striped"
                        data-toggle="data-table"
                      >
                        <thead>
                          <tr>
                            <th className="w-20">Plate Number</th>
                            <th className="w-20">Display Name</th>
                            <th className="w-20">Manufacturing Company</th>
                            <th className="w-20">Vehicle Type</th>
                            <th className="w-20">Chassis Number</th>
                            <th className="w-20">Manufacturing Year</th>
                            <th className="w-20">Device serial Number</th>
                            <th className="w-20">Device Type</th>
                            <th className="w-20">WASL Intergration</th>
                            <th className="w-20">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Data_table.map((item, i) => (
                            <tr key={i}>
                              <td>{item.plateNumber}</td>
                              <td>{item.displayName}</td>
                              <td>{item.ManufactCompany}</td>
                              <td>{item.vehicleType}</td>
                              <td>{item.ChassisNum}</td>
                              <td>{item.ManfactYear}</td>
                              <td>{item.DeviceSN}</td>
                              <td>{item.WASL}</td>
                              <td>{item.deviceType}</td>
                              <td>{item.actions}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="lead text-danger text-end my-3">
                      Paginations here
                    </p>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <div className="w-100 card-title mb-4 h3">
                      {t("Unassigned_Vehicles")}
                    </div>
                    <div className="d-flex justify-content-end flex-wrap w-100">
                      <Form.Floating className="custom-form-floating custom-form-floating-sm form-group">
                        <Form.Control
                          type="search"
                          className=""
                          id="floatingInput5"
                          placeholder="Search..."
                        />
                        <label htmlFor="floatingInput">
                          {t("main:search")}
                        </label>
                      </Form.Floating>
                    </div>

                    <div className="table-responsive table-hover text-center">
                      <table
                        id="datatable"
                        className="table table-striped"
                        data-toggle="data-table"
                      >
                        <thead>
                          <tr>
                            <th className="w-20">Plate Number</th>
                            <th className="w-20">Display Name</th>
                            <th className="w-20">Manufacturing Company</th>
                            <th className="w-20">Vehicle Type</th>
                            <th className="w-20">Chassis Number</th>
                            <th className="w-20">Manufacturing Year</th>
                            <th className="w-20">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Data_table2.map((item, i) => (
                            <tr key={i}>
                              <td>{item.plateNumber}</td>
                              <td>{item.displayName}</td>
                              <td>{item.ManufactCompany}</td>
                              <td>{item.vehicleType}</td>
                              <td>{item.ChassisNum}</td>
                              <td>{item.ManfactYear}</td>
                              <td>{item.actions}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="lead text-danger text-end my-3">
                      Paginations here
                    </p>
                  </Card.Body>
                </Card>
              </Col>
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
