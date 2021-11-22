import React from "react";
import { Row, Col, Form, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
// translation
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const EditUser = () => {
  const { t } = useTranslation("Management");

  return (
    <>
      <Card>
        <Card.Body>
          <Row className=" d-flex justify-content-center mb-5">
            <Col lg="8">
              <Form className="mt-5">
                <Row className="p-3 mb-3">
                  <Col md="6">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="firstName">
                        {t("First_Name")}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="firstName"
                        defaultValue=" Ahmed"
                      />
                    </Form.Group>
                  </Col>
                  <Col md="6">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="lastName">
                        {t("Last_Name")}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="lastName"
                        defaultValue="Jaber"
                      />
                    </Form.Group>
                  </Col>
                  <Col md="12">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="userName">
                        {t("User_Name")}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="userName"
                        defaultValue="a.Jaber2020"
                      />
                    </Form.Group>
                  </Col>
                  <Col md="6">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="email">{t("E-mail")}</Form.Label>
                      <Form.Control
                        type="text"
                        id="email"
                        defaultValue="a.Jaber@gmail.com"
                      />
                    </Form.Group>
                  </Col>
                  <Col md="6">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="phoneNumber">
                        {t("Phone_Number")}
                      </Form.Label>
                      <Form.Control
                        type="number"
                        id="phoneNumber"
                        defaultValue="966123456789"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
              <div className="mt-5 d-flex justify-content-end">
                <button className="btn btn-primary px-3 py-2 ms-3">
                  <FontAwesomeIcon className="me-2" icon={faCheck} size="sm" />
                  {t("Submit")}
                </button>
                <button className="btn btn-primary px-3 py-2 ms-3">
                  <FontAwesomeIcon className="me-2" icon={faTimes} size="sm" />
                  {t("Cancel")}
                </button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
export default EditUser;

// translation ##################################
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["Management", "main"])),
    },
  };
}
// translation ##################################
