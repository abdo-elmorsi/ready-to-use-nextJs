import {
  Row,
  Col,
  Button,
  Card,
  Form,
  ListGroup,
  Accordion,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
// translation
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const SubScriptionsList = [
  "Track - Track",
  "Track - History",
  "Track - Alerts and notifications",
  "Track - Operate Vehicle",
  "Manage - Manage Devices",
  "Manage - Manage Drivers",
  "Manage - Preventive Maintenance",
  "Manage - Manage Driving Behavior",
  "Manage - Used Base Insurance",
  "Operate Vehicle - Rental",
  "Operate Vehicle - Dispatch",
  "Operate Vehicle - Task",
  "Reports - Scheduled",
  "Reports - OnDemand",
  "Reports - Dashboard",
  "Manage - Manage Vehicles",
  "Manage - Account Management",
  "Manage - Users Management",
  "Track - Geofences",
  "Track - LandMarks",
  "Manage - Management",
];

let featuesList1 = [
  "All",
  "Track Replay",
  "Show Live Locations",
  "Show Land Marks",
  "Show Traffic",
  "Edit Vehicle",
  "Show Geofence",
  "Calculate Distance",
  "Group Vehicles",
  "Locate",
  "Clear Search",
  "Full History",
  "Send Commands",
  "Enable Vehicle",
  "Disable Vehicle",
  "Vehicle Status",
  "Calibrate Mileage",
  "Calibrate Working Hours",
  "Share Location",
  "Geofence",
  "Landmark",
  "Calibrate Weight Setting",
  "Export Map",
];

const CreateSubscriptionsList = SubScriptionsList.map((item, i) => {
  return (
    <div key={i}>
      <div className="text-start p-2 mb-2 cursor">{item}</div>
    </div>
  );
});
const test2 = featuesList1.map((item, i) => {
  return (
    <div key={i}>
      <Form.Check className="form-group">
        <Form.Check.Input
          className="me-2"
          type="checkbox"
          defaultValue={item}
          id={item.split(" ").join()}
        />
        <Form.Check.Label htmlFor={item.split(" ").join()}>
          {item}
        </Form.Check.Label>
      </Form.Check>
    </div>
  );
});

const CutomizePermissions = () => {
  const { t } = useTranslation("Management");
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col lg="8">
            <Card className="shadow-none">
              <Card.Body>
                <div className="header-title">
                  <h4 className="card-title">{t("User_Information")}</h4>
                </div>

                <Form className="mt-5">
                  <Row className="border border-light rounded p-3 mb-3">
                    <Col lg="6">
                      <Form.Group className="form-group">
                        <Form.Label htmlFor="FullName">
                          {t("Full_Name")}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          id="FullName"
                          defaultValue="Full Name"
                          disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col lg="6">
                      <Form.Group className="form-group">
                        <Form.Label htmlFor="userRole">
                          {t("User_Role")}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          id="userRole"
                          defaultValue="1204"
                          disabled
                        />
                      </Form.Group>
                    </Col>

                    <Col lg="6">
                      <Form.Group className="form-group">
                        <Form.Label htmlFor="email">{t("E-mail")}</Form.Label>
                        <Form.Control
                          type="text"
                          id="email"
                          defaultValue="mail@saferoad.net"
                          disabled
                        />
                      </Form.Group>
                    </Col>

                    <Col lg="6">
                      <Form.Group className="form-group">
                        <Form.Label htmlFor="status">{t("Status")}</Form.Label>
                        <Form.Control
                          type="text"
                          id="status"
                          defaultValue="Active"
                          disabled
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="border border-light rounded p-3 mb-3">
                    <h4>{t("General_System_Permissions")}</h4>
                    <hr className="my-3 mx-auto" />

                    <Form.Check className="d-block form-group">
                      <Form.Check.Input
                        className="me-2"
                        type="checkbox"
                        defaultValue=""
                        id="emails"
                      />
                      <Form.Check.Label htmlFor="emails">
                        {t("Recieve_Emails")}
                      </Form.Check.Label>
                    </Form.Check>

                    <Form.Check className="d-block form-group">
                      <Form.Check.Input
                        className="me-2"
                        type="checkbox"
                        defaultValue=""
                        id="alerts"
                      />
                      <Form.Check.Label htmlFor="alerts">
                        {t("Recieve_Alerts_Notifications")}
                      </Form.Check.Label>
                    </Form.Check>

                    <Form.Check className="d-block form-group">
                      <Form.Check.Input
                        className="me-2"
                        type="checkbox"
                        defaultValue=""
                        id="pushMsg"
                      />
                      <Form.Check.Label htmlFor="pushMsg">
                        {t("Recieve_Push_Messages")}
                      </Form.Check.Label>
                    </Form.Check>
                  </Row>
                  <Row className="border border-light rounded p-3 mb-3">
                    <h4>{t("User_Permissions")}</h4>
                    <hr className="my-3 mx-auto" />
                    <Row>
                      <Col xm="6" className="h-100">
                        <h5 className="mb-3">{t("Subscriptions")}</h5>
                        <ul className="list-group list-group-flush">
                          {CreateSubscriptionsList}
                        </ul>
                      </Col>
                      <Col xm="6" className="">
                        <Card className="shadow-none">
                          <Card.Body>
                            <h5 className="mb-3">{t("Functions")}</h5>
                            <Form>
                              <ListGroup as="ul">
                                <ListGroup.Item>{test2}</ListGroup.Item>
                              </ListGroup>
                            </Form>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Row>
                </Form>

                <div className="mt-5 d-flex justify-content-end">
                  <button className="btn btn-primary px-3 py-2 ms-3">
                    <FontAwesomeIcon
                      className="me-2"
                      icon={faArrowLeft}
                      size="sm"
                    />

                    {t("Back")}
                  </button>
                  <button className="btn btn-primary px-3 py-2 ms-3">
                    <FontAwesomeIcon
                      className="me-2"
                      icon={faCheck}
                      size="sm"
                    />

                    {t("Save_changes")}
                  </button>
                  <button className="btn btn-primary px-3 py-2 ms-3">
                    <FontAwesomeIcon
                      className="me-2"
                      icon={faTimes}
                      size="sm"
                    />

                    {t("Cancel")}
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* aside features section */}
          <Col lg="4">
            <Card className="shadow-none">
              <Card.Body>
                <div className="card-title">
                  <h4 className="mb-4">{t("Selected_User_Permissions")}</h4>
                </div>
                <div>
                  <Card className="border rounded shadow-none">
                    <Card.Body>
                      <h5>{t("Track")}</h5>
                      <hr className="my-3 mx-auto" />
                      <div>
                        {featuesList1.map((item) => {
                          return (
                            <div key={item} className="p-2">
                              - {t(item)}
                            </div>
                          );
                        })}
                      </div>
                    </Card.Body>
                  </Card>

                  {[
                    "History",
                    "Alerts_and_notifications",
                    "Operate_Vehicle",
                    "Manage_Devices",
                  ].map((ele, i) => {
                    return (
                      <Card key={i} className="border rounded shadow-none">
                        <Card.Body>
                          <h5>{t(ele)}</h5>
                          <hr className="my-3 mx-auto" />
                          <div>features items here</div>
                        </Card.Body>
                      </Card>
                    );
                  })}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CutomizePermissions;

// translation ##################################
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["Management", "main"])),
    },
  };
}

// translation ##################################
