import { useState } from "react";
import {
  Button,
  Container,
  FloatingLabel,
  Form,
  Row,
  Col,
} from "react-bootstrap";

const AddStudent = () => {

    const [stdData,setStdData] = useState({
        Name:"",
        GrId:"",
        Email:"",
        Course:"",
        IsActive:"",
        MobileNumber:"",
    })

    const handleChange =(field,e)=>{
        setStdData((prev)=>{
            return{
                ...prev,
                [field]:e.target.value,
            }
        })
    }

    console.log("stdData",stdData);

  return (
    <>
      <Container>
        <Row className="g-2">
            <Form className="mt-3">
              <FloatingLabel
                controlId="floatingInput"
                label="enter name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="enter name"
                  value={stdData.Name} onChange={(e)=>handleChange("Name",e)}
                />
              </FloatingLabel>

              <FloatingLabel controlId="std_id" label="std_id" className="mb-3">
                <Form.Control type="number" placeholder="std_id" value={stdData.GrId} onChange={(e)=>handleChange("GrId",e)} />
              </FloatingLabel>

              <FloatingLabel controlId="email" label="email" className="mb-3">
                <Form.Control type="email" placeholder="enter your email" value={stdData.Email} onChange={(e)=>handleChange("Email",e)} />
              </FloatingLabel>

              <FloatingLabel controlId="course" label="Course" className="mb-3">
                <Form.Select defaultValue="" value={stdData.Course} onChange={(e)=>handleChange("Course",e)}>
                  <option value="" disabled>
                    Select Course
                  </option>
                  <option value="fullStack">Full Stack</option>
                  <option value="UI/UX">UI/UX</option>
                  <option value="Graphic design">Graphic Design</option>
                  <option value="Data science">Data Science</option>
                </Form.Select>
              </FloatingLabel>

              <FloatingLabel
                controlId="isActive"
                label="Status"
                className="mb-3"
              >
                <Form.Select defaultValue="active" value={stdData.IsActive} onChange={(e)=>handleChange("IsActive",e)}>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="suspend">Suspend</option>
                  <option value="hold">Hold</option>
                </Form.Select>
              </FloatingLabel>

              <FloatingLabel
                controlId="mobileNumber"
                label="mobileNumber"
                className="mb-3"
              >
                <Form.Control type="number" placeholder="mobileNumber" value={stdData.MobileNumber} onChange={(e)=>handleChange("MobileNumber",e)} />
              </FloatingLabel>

              <Button className="mt-3">Add</Button>
            </Form>
          <Col md={6}>
            
          </Col>
          <Col md={6}>
            
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddStudent;
