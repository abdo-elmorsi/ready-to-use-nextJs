import {Row,Col,Button,Card} from "react-bootstrap"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUsers, faPlug, faUsersCog,faPen, faCar, faSquare,faUserEdit } from '@fortawesome/free-solid-svg-icons'
import CountUp from "react-countup";

const cards_Data = [
  {
    icon: "faUsers",
    Num: 23,
    title: "Active Vehicles",
    desc: "Vehicles that is currently live and send data."
  },
  {
    icon: "faUsers",
    Num: 2,
    title: "",
    desc: ""
  },
  {
    icon: "faUsers",
    Num: 1,
    title: "",
    desc: ""
  },
  {
    icon: "faUsers",
    Num: 1,
    title: "",
    desc: ""
  },
]

const VehicleManagment = () => {
  return(
    <>
    <Row>
      <Card>
        <Card.Body>
        <Row>
          <Col md="6" xl="3" className="mb-3">
            <Card className="h-100 w-100 border rounded">
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex justify-content-between align-itmes-center w-100 mb-3">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="p-3 rounded bg-soft-primary">
                        <FontAwesomeIcon className="fa-2x" icon={faUsers} size="lg"/>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center ps-3">
                    <h2 className="counter"><CountUp  start={0} end={23} duration={2} /></h2>
                        <h5 className="mb-0 text-center">Active Vehicles</h5>
                    </div>
                  </div>
                    <span className="text-center">Vehicles that is currently live and send data.</span>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" xl="3" className="mb-3">
            <Card className="h-100 w-100 border rounded">
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex justify-content-between align-itmes-center w-100 mb-3">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="p-3 rounded bg-soft-primary">
                        <FontAwesomeIcon className="fa-2x" icon={faUsers} size="lg"/>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center ps-3">
                    <h2 className="counter"><CountUp  start={0} end={2} duration={2} /></h2>
                        <h5 className="mb-0 text-center">Inactive Vehicles</h5>
                    </div>
                  </div>
                    <span className="text-center">{`Vehicles that didn't send any data for more than one minute.`}</span>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" xl="3" className="mb-3">
            <Card className="h-100 w-100 border rounded">
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex justify-content-between align-itmes-center w-100 mb-3">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="p-3 rounded bg-soft-primary">
                        <FontAwesomeIcon className="fa-2x" icon={faUsers} size="lg"/>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center ps-3">
                    <h2 className="counter"><CountUp  start={0} end={1} duration={2} /></h2>
                        <h5 className="mb-0 text-center">Unassigned Devices</h5>
                    </div>
                  </div>
                    <span className="text-center">Devices that are Added to the system but not yet assigned to a vehicle .</span>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" xl="3" className="mb-3">
            <Card className="h-100 w-100 border rounded">
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex justify-content-between align-itmes-center w-100 mb-3">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="p-3 rounded bg-soft-primary">
                        <FontAwesomeIcon className="fa-2x" icon={faUsers} size="lg"/>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center ps-3">
                    <h2 className="counter"><CountUp  start={0} end={1} duration={2} /></h2>
                        <h5 className="mb-0 text-center">Active Accounts</h5>
                    </div>
                  </div>
                    <span className="text-center">Accounts that are active on the system .</span>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Card.Body>
      </Card>
    </Row>
    </>
  )
}

export default VehicleManagment