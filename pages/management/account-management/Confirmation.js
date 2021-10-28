import React from "react";
import { Row, Col, Card, Form, FormCheck} from "react-bootstrap";

// translation
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const Confirmation = ()=> {
    const { t } = useTranslation("Management");
    return(
    <>
      <Row>
      <Col>
               <Card>
                  <Card.Body>
                    <Row className=" d-flex justify-content-center mb-5"> 
                      <Col lg="8">
                        <div className="header-title">
                          <h4 className="card-title">{t("Account_Information")}</h4>
                        </div>
                
                        <Form>
                            <Row className="p-3 mb-3">
                              <Col lg="12">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="AccountName">{t("Account_Name")}</Form.Label>
                                <Form.Control type="text"  id="AccountName" defaultValue="Account Name" disabled/>
                              </Form.Group>
                              </Col>
                              <Col lg="12">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="parentAccount">{t("Parent_Account")}</Form.Label>
                                <Form.Control type="text"  id="parentAccount" defaultValue="Demo" disabled/>
                              </Form.Group>
                              </Col>
                              
                              <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="billingStart">{t("Billing_Start_on")}</Form.Label>
                                <Form.Control type="text"  id="billingStart" defaultValue="17/10/2021" disabled/>
                              </Form.Group>
                              </Col>
                              
                              <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="NextBilling">{t("Next_Billing_on")}</Form.Label>
                                <Form.Control type="text"  id="NextBilling" defaultValue="17/12/2021" disabled/>
                              </Form.Group>
                              </Col>
                              
                              <Col lg="12">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="accountType">{t("Acount_Type")}</Form.Label>
                                <Form.Control type="text"  id="accountType" defaultValue="Rental" disabled/>
                              </Form.Group>
                              </Col>
                            </Row>
  
                            <Row className="p-3 mb-3">
                              <h4>{t("Subscriptions_List")}</h4>
                              <p className="p-3 rounded lead text-end">{t("Total_Price")} : 0</p>
                            </Row>
                        </Form>

                        <div className="mt-5 d-flex justify-content-end">
                          <button className="btn btn-primary px-3 py-2 ms-3">{t("Back")}</button>
                          <button className="btn btn-primary px-3 py-2 ms-3">{t("Finish")}</button>
                          <button className="btn btn-primary px-3 py-2 ms-3">{t("Cancel")}</button>
                        </div>
                      </Col>
                    </Row>

                  </Card.Body>
                </Card>
                
            </Col>

            
      </Row>
    </>
  )
}
export default  Confirmation

// translation ##################################
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["Management", "main"])),
        },
    };
}
// translation ##################################