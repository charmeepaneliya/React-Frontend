import React,{useState} from 'react';
import { useNavigate,Link } from 'react-router-dom';
import userAxios from '../api/userAxios';


const Login = () => {
  const navigate = useNavigate();

  const [userData,setUserData] = useState({
    email:"",
    password:"",
  })

  const handleChange  =(e)=>{
    setUserData({
      ...userData,
      [e.target.name]:e.target.value,
    });
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();

    try{
      const res = await userAxios.post("/login",userData);
      // console.log("Login Successfull");
      console.log("Login response:",res.data);

      //Store token in LocalStorage

      localStorage.setItem("token",res.data.token);

        // Store user details in LocalStorage
        localStorage.setItem("user",JSON.stringify(res.data.user))

      navigate("/")
    }catch(error){
      console.log(error.response?.data || error.message);
      alert(error.response?.data?.message || "Login Failed");
    }
  }
  return (
    <>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <input type='email' name='email' placeholder='Enter Email' value={userData.email} onChange={handleChange} required/>

        <br/><br/>
        <input type='password' name='password' placeholder='Enter Password' value={userData.password} onChange={handleChange} required/>
        <br/><br/>
        <button type='submit'>Login</button>
      </form>

      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </>
  )
}

export default Login
