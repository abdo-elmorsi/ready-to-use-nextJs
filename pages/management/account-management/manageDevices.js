import React from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserEdit,
  faPen,
  faCar,
  faLock,
  faPlus,
  faFileCsv,
  faFileExport,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";
// translation
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const TableLinks = function () {
  const { t } = useTranslation("Management");
  return (
    <div>
      <button className="btn btn-outline-primary m-1">
        <FontAwesomeIcon className="pe-2" icon={faUserEdit} size="lg" />
        {t("Edit")}
      </button>
      <button className="btn btn-outline-primary m-1">
        <FontAwesomeIcon className="pe-2" icon={faPen} size="lg" />
        {t("Unassign_SimCards")}
      </button>
      <button className="btn btn-outline-primary m-1">
        <FontAwesomeIcon className="pe-2" icon={faCar} size="lg" />
        {t("Unassign_Device")}
      </button>
    </div>
  );
};

const CompleteBtn = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation("Management");
  return (
    <button className="btn btn-outline-primary m-1">
      <FontAwesomeIcon className="pe-2" icon={faUserEdit} size="lg" />
      {t("Complete_User_Creation")}
    </button>
  );
};

const Data_table = [
  {
    fullName: "Ahmad Jaber",
    username: "a.jaber2020",
    email: "a.hantash@saferoad.com.sa",
    status: "active",
    action: <TableLinks />,
  },
  {
    fullName: "Ahmad Jaber",
    username: "a.jaber2020",
    email: "a.hantash@saferoad.com.sa",
    status: "active",
    action: <TableLinks />,
  },
  {
    fullName: "Ahmad Jaber",
    username: "a.jaber2020",
    email: "a.hantash@saferoad.com.sa",
    status: "active",
    action: <TableLinks />,
  },
  {
    fullName: "Ahmad Jaber",
    username: "a.jaber2020",
    email: "a.hantash@saferoad.com.sa",
    status: "active",
    action: <TableLinks />,
  },
];

const Data_table2 = [
  {
    fullName: "Ahmad Jaber",
    username: "a.jaber2020",
    email: "a.hantash@saferoad.com.sa",
    status: "active",
    action: <CompleteBtn />,
  },
  {
    fullName: "Ahmad Jaber",
    username: "a.jaber2020",
    email: "a.hantash@saferoad.com.sa",
    status: "active",
    action: <CompleteBtn />,
  },
  {
    fullName: "Ahmad Jaber",
    username: "a.jaber2020",
    email: "a.hantash@saferoad.com.sa",
    status: "active",
    action: <CompleteBtn />,
  },
  {
    fullName: "Ahmad Jaber",
    username: "a.jaber2020",
    email: "a.hantash@saferoad.com.sa",
    status: "active",
    action: <CompleteBtn />,
  },
];

const manageDevices = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation("Management");
  return (
    <>
      <Row>
        <Row className="g-3">
          <Col sm="12">
            <Card className="h-100">
              <Card.Header className="d-flex justify-content-between">
                <div className="w-100 header-title d-flex justify-content-between align-items-center p-3 flex-column flex-md-row">
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary  px-3 py-2 me-3 mb-2"
                    >
                      <FontAwesomeIcon
                        className="me-2"
                        icon={faPlus}
                        size="sm"
                      />
                      {t("Add_Device")}
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary  px-3 py-2 me-3 mb-2"
                    >
                      <FontAwesomeIcon
                        className="me-2"
                        icon={faFileCsv}
                        size="sm"
                      />
                      {t("Add_Bulk_of_Devices")}
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary  px-3 py-2 me-3 mb-2"
                    >
                      <FontAwesomeIcon
                        className="me-2"
                        icon={faFileExport}
                        size="sm"
                      />
                      {t("Export_Assigned_Devices")}
                    </button>
                  </div>
                  <Form.Floating className=" custom-form-floating-sm form-group m-0">
                    <Form.Control
                      type="email"
                      className=""
                      id="floatingInput6"
                      placeholder="Place Holder"
                    />
                    <label htmlFor="floatingInput">{t("main:search")}</label>
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
                        {[
                          "Device_Serial_Number",
                          "Device_Type",
                          "Vehicle_Plate_Number",
                          "Actions",
                        ].map((ele) => {
                          return <th key={ele}>{t(ele)}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {Data_table.map((item, i) => (
                        <tr key={i}>
                          <td>{item.fullName}</td>
                          <td>{item.username}</td>
                          <td>{item.email}</td>
                          <td>{item.action}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="lead text-warning text-end">pagination here</p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* ================== second table  ===================== */}
          <Col sm="12">
            <Card className="h-100">
              <nav className="navbar navbar-dark navbar-lg shadow rounded p-3">
                <h3>{t("Unassigned_Devices")}</h3>
              </nav>
              <Card.Header className="d-flex justify-content-between">
                <div className="w-100 header-title d-flex justify-content-between align-items-center p-3">
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary  px-3 py-2 me-3 mb-2"
                    >
                      <FontAwesomeIcon
                        className="me-2"
                        icon={faRandom}
                        size="sm"
                      />
                      {t("Transfer_Device_to_Account")}
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary  px-3 py-2 me-3 mb-2"
                    >
                      <FontAwesomeIcon
                        className="me-2"
                        icon={faFileExport}
                        size="sm"
                      />
                      {t("Export_Unassigned_Devices")}
                    </button>
                  </div>
                  <Form.Floating className=" custom-form-floating-sm form-group m-0">
                    <Form.Control
                      type="email"
                      className=""
                      id="floatingInput6"
                      placeholder="Place Holder"
                    />
                    <label htmlFor="floatingInput">{t("main:search")}</label>
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
                        {["Device_Serial_Number", "Device_Type", "Actions"].map(
                          (ele) => {
                            return <th key={ele}>{t(ele)}</th>;
                          }
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {Data_table2.map((item, i) => (
                        <tr key={i}>
                          <td>{item.fullName}</td>
                          <td>{item.username}</td>
                          <td>{item.action}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="lead text-warning text-end">pagination here</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default manageDevices;

// translation ##################################
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["Management", "main"])),
    },
  };
}

// translation ##################################
