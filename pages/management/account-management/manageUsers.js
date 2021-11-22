import React from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserEdit,
  faPen,
  faCar,
  faLock,
  faUserPlus,
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
        {t("user_role")}
      </button>
      <button className="btn btn-outline-primary m-1">
        <FontAwesomeIcon className="pe-2" icon={faPen} size="lg" />
        {t("user_info")}
      </button>
      <button className="btn btn-outline-primary m-1">
        <FontAwesomeIcon className="pe-2" icon={faCar} size="lg" />
        {t("manage_vehicles")}
      </button>
      <button className="btn btn-outline-primary m-1">
        <FontAwesomeIcon className="pe-2" icon={faLock} size="lg" />
        {t("reset_password")}
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

const manageUsers = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation("Management");
  return (
    <>
      <Row>
        <Row className="g-3">
          <Col sm="12">
            <Card className="h-100">
              <Card.Header className="d-flex justify-content-between">
                <div className="w-100 header-title d-flex justify-content-between align-items-center p-3">
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary  px-3 py-2 me-3 "
                    >
                      <FontAwesomeIcon
                        className="me-2"
                        icon={faUserPlus}
                        size="sm"
                      />

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
                          "Full_Name",
                          "User_Name",
                          "E-mail",
                          "Status",
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
                          <td>{item.status}</td>
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
              <Card.Header className="d-flex justify-content-between">
                <div className="w-100 header-title d-flex justify-content-between align-items-center p-3">
                  <div>
                    <h3>{t("Manage_Incompleted_Users")}</h3>
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
                          "Account_Name",
                          "User_Name",
                          "E-mail",
                          "Status",
                          "Actions",
                        ].map((ele) => {
                          return <th key={ele}>{t(ele)}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {Data_table2.map((item, i) => (
                        <tr key={i}>
                          <td>{item.fullName}</td>
                          <td>{item.username}</td>
                          <td>{item.email}</td>
                          <td>{item.status}</td>
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

export default manageUsers;

// translation ##################################
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["Management", "main"])),
    },
  };
}

// translation ##################################
