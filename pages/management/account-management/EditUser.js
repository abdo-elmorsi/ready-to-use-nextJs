import {Row,Col,Form,Card} from "react-bootstrap"
const EditUser = () =>{
  return(
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>
                <Form className="mt-5">
                  <Row className="border border-light rounded p-3 mb-3">
                    <Col lg="6">
                      <Form.Group className="form-group">
                      <Form.Label  htmlFor="firstName">First Name </Form.Label>
                      <Form.Control type="text"  id="firstName" defaultValue=" Ahmed"/>
                    </Form.Group>
                    </Col>
                    <Col lg="6">
                      <Form.Group className="form-group">
                      <Form.Label  htmlFor="lastName">Last Name </Form.Label>
                      <Form.Control type="text"  id="lastName" defaultValue="Jaber"/>
                    </Form.Group>
                    </Col>
                    <Col lg="6">
                      <Form.Group className="form-group">
                      <Form.Label  htmlFor="userName"> User Name </Form.Label>
                      <Form.Control type="text"  id="userName" defaultValue="a.Jaber2020"/>
                    </Form.Group>
                    </Col>
                    <Col lg="6">
                      <Form.Group className="form-group">
                      <Form.Label  htmlFor="email">E-mail </Form.Label>
                      <Form.Control type="text"  id="email" defaultValue="a.Jaber@gmail.com"/>
                    </Form.Group>
                    </Col>
                    <Col lg="6">
                      <Form.Group className="form-group">
                      <Form.Label  htmlFor="phoneNumber">Phone Number </Form.Label>
                      <Form.Control type="number"  id="phoneNumber" defaultValue="966123456789"/>
                    </Form.Group>
                    </Col>
                        
                  </Row>
                </Form>
                <div className="mt-5 d-flex justify-content-end">
                  <button className="btn btn-primary px-3 py-2 ms-3">Submit</button>
                  <button className="btn btn-primary px-3 py-2 ms-3">Cancel</button>
                </div>
            </Card.Body>
          </Card>  
        </Col>
      </Row>
    </>
  )
}
export default EditUser