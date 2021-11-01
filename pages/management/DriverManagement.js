import {Row,Col,Card,Form,Button} from "react-bootstrap"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faCar, faTrash,faStreetView,faEye} from '@fortawesome/free-solid-svg-icons'


const TableLinks = function () {
  return (
      <div>
          <button className="btn btn-outline-primary m-1">
              <FontAwesomeIcon className="pe-2" icon={faEdit} size="lg"/>Edit</button>
          <button className="btn btn-outline-primary m-1">
              <FontAwesomeIcon className="pe-2" icon={faTrash} size="lg"/>Delete </button>
          <button className="btn btn-outline-primary m-1">
              <FontAwesomeIcon className="pe-2" icon={faStreetView} size="lg"/>Locate Driver </button>
          <button className="btn btn-outline-primary m-1">
              <FontAwesomeIcon className="pe-2" icon={faEye} size="lg"/>Show </button>
          <button className="btn btn-outline-primary m-1">
              <FontAwesomeIcon className="pe-2" icon={faCar} size="lg"/>Assign Vehicles </button>
          
      </div>
  )
}


const Data_table = [
  {
      fullName: "Fares Salah",
      phoneNumber: "05123456789",
      Email:"fares@gmail.com",
      Department:"Department",
      licenceNumber:"123456789",
      licenceEXP:"25/12/2022",
      RFID:"",
      WaslIntegration:"",
      action: < TableLinks/>,
  },{
      fullName: "Fahad Alharbi",
      phoneNumber: "05123456789",
      Email:"fahad25@gmail.com",
      Department:"Department",
      licenceNumber:"123456789",
      licenceEXP:"25/12/2022",
      RFID:"",
      WaslIntegration:"",
      action: < TableLinks/>,
  },{
      fullName: "Majed Alotubi",
      phoneNumber: "05123456789",
      Email:"maged@gmail.com",
      Department:"Department",
      licenceNumber:"123456789",
      licenceEXP:"25/12/2022",
      RFID:"",
      WaslIntegration:"",
      action: < TableLinks/>,
  },
]

const DriverManagement = () => {
  return(
    <>
      <Card>
        <Card.Body>
          <Row>
            <h4>Driver Management</h4>
            <Card.Header className="d-flex justify-content-between">
              <div
                  className="w-100 header-title d-flex justify-content-between align-items-center p-3">
                  <div>
                      {["Add New Driver","Add Drivers Bulk"].map(el =>{
                        return(
                          <>
                          <button type="button" className="btn btn-primary  px-3 py-2 me-3 "key={el}>{el} </button>
                          </>
                        )
                      }) }
                  </div>
                  <Form.Floating className=" custom-form-floating-sm form-group m-0">
                      <Form.Control type="email" className="" id="floatingInput6"
                                    placeholder="Place Holder"/>
                      <label htmlFor="floatingInput">search</label>
                  </Form.Floating>
              </div>
            </Card.Header>
            <div className="table-responsive">
              <table id="datatable" className="table table-striped text-center table-hover"
                      data-toggle="data-table">
                  <thead>
                  <tr>
                      {["Full Name", "Phone Number","Email","Department","Licence Number", "Licence Expiration Date","RFID","WASL Integration", "Actions"].map((el) => {
                          return (
                              <th key={el}>{el}</th>
                          )
                      })}
                  </tr>
                  </thead>
                  <tbody>
                    {Data_table.map(item =>{
                      return(
                        <>
                        <tr key={item.phoneNumber}>
                          <td>{item.fullName}</td>
                          <td>{item.phoneNumber}</td>
                          <td>{item.Email}</td>
                          <td>{item.Department}</td>
                          <td>{item.licenceNumber}</td>
                          <td>{item.licenceEXP}</td>
                          <td>{item.RFID}</td>
                          <td>{item.WaslIntegration}</td>
                          <td>{item.action}</td>
                        </tr>
                        </>
                      )
                    })}
                  </tbody>
              </table>
            </div>
            <p className="lead text-warning text-end my-3">pagination here</p>
          </Row>
        </Card.Body>
      </Card>
    </>
  )
}
export default DriverManagement