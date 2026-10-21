   import * as yup from "yup";
   
   
   const validationSchema = yup.object().shape({
    name: yup.string().min(2,"minimum 2 character is required").required("name is required"),
    grId: yup.number().required("std id is required"),
    email: yup.string().email("invalid email").required("email is required"),
    course: yup.string().required("course is required"),
    isActive: yup.string().required("status is required"),
    mobileNumber: yup.number().required("mobileNumber is required"),
   
  });

  export default validationSchema;