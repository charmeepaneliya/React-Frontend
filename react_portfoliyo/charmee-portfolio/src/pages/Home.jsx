import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
    
  
  return (
    <>
      <h1>Hi, I'am Charmee Paneliya</h1>
      <h2>Full Stack Developer</h2>
      <p> I build web applications using modern web technologies.</p>

      <button onClick={()=>navigate("/contact")}>Contact Me</button>
      <button onClick={()=>navigate("/projects")}>View Projects</button>
    </>
  )
}

export default Home
