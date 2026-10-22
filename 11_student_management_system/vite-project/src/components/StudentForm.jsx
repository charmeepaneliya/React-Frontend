// import { useState } from "react";
// import {
//   Button,
//   Container,
//   FloatingLabel,
//   Form,
//   Row,
//   Col,
// } from "react-bootstrap";

// const AddStudent = () => {

//     const [stdData,setStdData] = useState({
//         Name:"",
//         GrId:"",
//         Email:"",
//         Course:"",
//         IsActive:"",
//         MobileNumber:"",
//     })

//     const handleChange =(field,e)=>{
//         setStdData((prev)=>{
//             return{
//                 ...prev,
//                 [field]:e.target.value,
//             }
//         })
//     }

//     console.log("stdData",stdData);

//   return (
//     <>
//       <Container>
//         <Row className="g-2">
//             <Form className="mt-3">
//               <FloatingLabel
//                 controlId="floatingInput"
//                 label="enter name"
//                 className="mb-3"
//               >
//                 <Form.Control
//                   type="text"
//                   placeholder="enter name"
//                   value={stdData.Name} onChange={(e)=>handleChange("Name",e)}
//                 />
//               </FloatingLabel>

//               <FloatingLabel controlId="std_id" label="std_id" className="mb-3">
//                 <Form.Control type="number" placeholder="std_id" value={stdData.GrId} onChange={(e)=>handleChange("GrId",e)} />
//               </FloatingLabel>

//               <FloatingLabel controlId="email" label="email" className="mb-3">
//                 <Form.Control type="email" placeholder="enter your email" value={stdData.Email} onChange={(e)=>handleChange("Email",e)} />
//               </FloatingLabel>

//               <FloatingLabel controlId="course" label="Course" className="mb-3">
//                 <Form.Select defaultValue="" value={stdData.Course} onChange={(e)=>handleChange("Course",e)}>
//                   <option value="" disabled>
//                     Select Course
//                   </option>
//                   <option value="fullStack">Full Stack</option>
//                   <option value="UI/UX">UI/UX</option>
//                   <option value="Graphic design">Graphic Design</option>
//                   <option value="Data science">Data Science</option>
//                 </Form.Select>
//               </FloatingLabel>

//               <FloatingLabel
//                 controlId="isActive"
//                 label="Status"
//                 className="mb-3"
//               >
//                 <Form.Select defaultValue="active" value={stdData.IsActive} onChange={(e)=>handleChange("IsActive",e)}>
//                   <option value="active">Active</option>
//                   <option value="pending">Pending</option>
//                   <option value="suspend">Suspend</option>
//                   <option value="hold">Hold</option>
//                 </Form.Select>
//               </FloatingLabel>

//               <FloatingLabel
//                 controlId="mobileNumber"
//                 label="mobileNumber"
//                 className="mb-3"
//               >
//                 <Form.Control type="number" placeholder="mobileNumber" value={stdData.MobileNumber} onChange={(e)=>handleChange("MobileNumber",e)} />
//               </FloatingLabel>

//               <Button className="mt-3">Add</Button>
//             </Form>
//           <Col md={6}>

//           </Col>
//           <Col md={6}>

//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default AddStudent;

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import validationSchema from "../validation/validation";

// import { addStudent } from "../api/studentFetch";
// import { updateStudent } from "../api/studentFetch";
import { addStudent,getStdById, updateStudent } from "../api/studentAxios";


import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { addStudent, getStdById, updateStudent } from "../api/studentFetch";

function StudentForm() {
  const { Formik } = formik;
  const navigate = useNavigate();

  const { id } = useParams();
  const [initialValues, setInitialValues] = useState({
    name: "",
    grId: "0",
    email: "",
    course: "",
    isActive: "",
    mobileNumber: "",
  });

  useEffect(() => {
    const fetchStudentDetail = async () => {
      try {

        if(!id){
          return; 
        }

        const std = await getStdById(id);
       
        setInitialValues({
          name:std.name,
          grId: std.grId,
          email:std.email,
          course:std.course,
          isActive:std.isActive,
          mobileNumber:std.mobileNumber,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchStudentDetail();
  }, [id]);

  return (
    <Formik
      className="mt-5"
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {

        if(id){
         await updateStudent(id,{
            name:values.name,
            email:values.email,
            mobileNumber:values.mobileNumber
          })
        }else{
           addStudent(values)
        }
      
        // const result = await addStudent(values);
        resetForm();
         navigate("/");

        
      }}
      initialValues={initialValues}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit} className="mt-5">
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
              className="position-relative"
            >
              <Form.Label>student name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                isValid={touched.name && !errors.name}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Label>student id</Form.Label>
              <Form.Control
                type="number"
                name="grId"
                disabled={!!id}
                value={values.grId}
                onChange={handleChange}
                isValid={touched.grId && !errors.grId}
              />

              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="email"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>Course</Form.Label>
              <Form.Select
                name="course"
               disabled={!!id}
                value={values.course}
                onChange={handleChange}
                isInvalid={!!errors.course}
              >
                <option value="">Select Course</option>
                <option value="fullStack">Full Stack</option>
                <option value="UI/UX">UI/UX</option>
                <option value="Graphic design">Graphic Design</option>
                <option value="Data science">Data Science</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.course}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik104"
              className="position-relative"
            >
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="isActive"
                disabled={!!id}
                value={values.isActive}
                onChange={handleChange}
                isInvalid={!!errors.isActive}
              >
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="suspend">Suspend</option>
                <option value="hold">Hold</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.isActive}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik105"
              className="position-relative"
            >
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="mobileNumber"
                name="mobileNumber"
                value={values.mobileNumber}
                onChange={handleChange}
                isInvalid={!!errors.mobileNumber}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.mobileNumber}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          {/* <Form.Group className="position-relative mb-3">
            <Form.Label>File</Form.Label>
            <Form.Control
              type="file"
              required
              name="file"
              onChange={handleChange}
              isInvalid={!!errors.file}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.file}
            </Form.Control.Feedback>
          </Form.Group> */}
          {/* <Form.Group className="position-relative mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik106"
              feedbackTooltip
            />
          </Form.Group> */}
          <Button type="submit">{id ? "update":"submit"}</Button>
        </Form>
      )}
    </Formik>
  );
}

export default StudentForm;
