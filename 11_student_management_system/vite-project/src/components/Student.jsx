import {Button, Table} from "react-bootstrap";
// import { getAllStudents } from '../api/studentFetch'

import { getAllStudents } from "../api/studentAxios"; 
import { useEffect, useState } from "react";
import Loading from "../ui/Loading";
// import { deleteStudent } from "../api/studentFetch";

import { deleteStudent } from "../api/studentAxios";
import { useNavigate } from "react-router-dom";

const Student = () => {

const [student,setStudent]= useState([]);

const [loading,setLoading] = useState(false);

const [error,setError] = useState(null);

const navigate = useNavigate();


useEffect(()=>{
  loadData()
},[]);

const loadData = async () => {
  try {
    setLoading(true);

  const data = await getAllStudents()

  setStudent(data)
  } catch (error) {
    setError(error);
  }finally{
    setLoading(false)
  }
};

if(loading){
 return <Loading></Loading>
} else if(error){
  <h1 className="text-center">{error.message}</h1>
}

console.log("student", student);

const handleDelete =async(id)=>{
  try {
    await deleteStudent(id)
    await loadData()

  } catch (error) {
    console.log(error);
    throw error()
  }
}


  
  return (
    <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>sr.no</th>
            <th>Name</th>
            <th>grId</th>
            <th>email</th>
            <th>course</th>
            <th>isActive</th>
            <th>mobileNumber</th>
            <th colSpan={2}>Actions</th>
            
          </tr>
        </thead>
        <tbody>
          {student.map((std,index)=>{
            return(
              <tr key={std._id}>
                <td>{index + 1}</td>
                <td>{std.name}</td>
                <td>{std.grId}</td>
                <td>{std.email}</td>
                <td>{std.course}</td>
                <td>{std.isActive}</td>
                <td>{std.mobileNumber}</td>
                <td><Button variant="warning" onClick={()=>navigate(`/edit/${std._id}`)}>Edit</Button></td>
                <td><Button variant="danger" onClick={()=>handleDelete(std._id)}> Delete </Button></td>
              </tr>
            )
          })}
        </tbody>
    </Table>
  )
}

export default Student
