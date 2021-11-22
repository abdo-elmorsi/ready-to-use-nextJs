import { Row, Col, Card, Form, FormCheck } from "react-bootstrap";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

// translation
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const SelectUserRoleData = [
  {
    title: "Admin",
    desc: "text deisciption here...",
  },
  {
    title: "Account_Manager",
    desc: "text deisciption here...",
  },
  {
    title: "User",
    desc: "text deisciption here...",
  },
  {
    title: "Sales",
    desc: "text deisciption here...",
  },
  {
    title: "Account_Admin",
    desc: "text deisciption here...",
  },
  {
    title: "Reporting",
    desc: "text deisciption here...",
  },
];
const SelectUserRole = () => {
  const { t } = useTranslation("Management");
  return (
    <>
      <Card>
        <Card.Body>
          <Row className=" d-flex justify-content-center my-5">
            <Col md="8">
              <Row>
                {SelectUserRoleData.map((el) => {
                  return (
                    <>
                      <Col md="6" className="mb-3" key={el.title}>
                        <Card className="border-bottom border-4 border-0 border-primary">
                          <Card.Body className="d-flex justify-content-start align-items-center">
                            <div>
                              <Form.Check className="mb-3 form-check">
                                <FormCheck.Input
                                  type="radio"
                                  name="userRole"
                                  className="me-3 p-2"
                                  id={el.title}
                                />
                                <FormCheck.Label
                                  className="h4"
                                  htmlFor={el.title}
                                >
                                  {t(el.title)}
                                </FormCheck.Label>
                              </Form.Check>
                              <span>{el.desc}</span>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    </>
                  );
                })}
              </Row>
              <Row>
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
                      icon={faArrowRight}
                      size="sm"
                    />
                    {t("Next")}
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
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default SelectUserRole;

// translation ##################################
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["Management", "main"])),
    },
  };
}

// translation ##################################
