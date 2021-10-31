import {Row,Col,Form,Button,Card,Image} from 'react-bootstrap'
// import Image from 'next/image';


const SignIn = () => {
  
   return (
      <>
         <section className="login-content">
         <Row className="m-0 align-items-center bg-white vh-100">            
               <Col md="6">
                  <Row className="justify-content-center">
                     <Col md="10">
                        <Card className="card-transparent shadow-none d-flex justify-content-center mb-0 auth-card">
                           <Card.Body>
                              {/* <Link to="/" className="navbar-brand d-flex align-items-center mb-3">
                             <a>
                             <Image src={safeRoadLogo} className="Image-fluid gradient-main animated-scaleX" alt="images"/>
                             </a>
                              </Link> */}
                              <h2 className="mb-4 text-center">Sign In</h2>
                              <Form>
                                 <Row>
                                    <Col lg="12">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="User Name" className="">Email</Form.Label>
                                          <Form.Control type="text" className="" id="UserName" aria-describedby="UserName" placeholder=" "/>
                                       </Form.Group >
                                    </Col>
                                    <Col lg="12" className="">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="password" className="">Password</Form.Label>
                                          <Form.Control type="password" className="" id="password" aria-describedby="password" placeholder=" "/>
                                       </Form.Group>
                                    </Col>
                                    <Col lg="12" className="d-flex justify-content-between">
                                       <Form.Check className="form-check mb-3">
                                          <Form.Check.Input type="checkbox"  id="customCheck1"/>
                                          <Form.Check.Label htmlFor="customCheck1">Remember Me</Form.Check.Label>
                                       </Form.Check>
                                    </Col>
                                 </Row>
                                
                                 <div className="d-flex justify-content-center">
                                    <Button  type="button" variant="btn btn-primary px-4 py-2 mt-4">Sign In</Button>
                                 </div>
                                 
                                 
                              </Form>
                           </Card.Body>
                        </Card>
                     </Col>
                  </Row>
                  
               </Col>
               <Col md="6" className="d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden">
                  <Image src="../public/assets/images/signinbg.png" alt="sign in background" />
               </Col>
            </Row>
         </section>
      </>
    )
}

export default SignIn
