

import {Row,Col,Card,Form,Button,Modal} from "react-bootstrap"
import Select from 'react-select'

const ManufactCompanyName = [
  { value:"Acura", label:"Acura" },
  { value:"Alfa Romeo", label:"Alfa Romeo" },
  { value:"AM General", label:"AM General" },
  { value:"AMC", label:"AMC" },
  { value:"Ariel", label:"Ariel" } 
]
const model = [
  { value:"CL", label:"CL" },
  { value:"CSX", label:"CSX" },
  { value:"EL", label:"EL" },
  { value:"Integra", label:"Integra" },
  { value:"Legend", label:"Legend" },
  { value:"MDX", label:"MDX" },
  { value:"NSX", label:"NSX" },
  { value:"RDX", label:"RDX" },
  { value:"RL", label:"RL" },
  { value:"RSX", label:"RSX" },
  { value:"SLX", label:"SLX" },
  { value:"TL", label:"TL" },
  { value:"TSX", label:"TSX" },
  { value:"Vigor", label:"Vigor" },
]
const vehicleType = [
  { value:"Salon", label:"Salon" },
  { value:"4X4", label:"4X4" },
  { value:"Truck", label:"Truck" },
  { value:"Sport", label:"Sport" },
]

const EditVehicleInformation = () => {
  return(
    <>
      <Card>
        <Card.Body>
          <Row>
            content here
          </Row>
        </Card.Body>
      </Card>
    </>
  )
}

export default EditVehicleInformation