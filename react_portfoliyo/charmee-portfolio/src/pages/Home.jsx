import { useNavigate } from "react-router-dom";
import {Container,Row,Col,Button} from "react-bootstrap";
import "./Home.css";

const Home = () => {

  const navigate = useNavigate();
    
  
  return (
    <>

      <section className="home-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={9} md={11}>
              <p className="home-tagline">WELCOME TO MY PORTFOLIO</p>

              <h1 className="home-title">
                Hi, I'm <span>Charmee Paneliya</span>
              </h1>

              <h2 className="home-subtitle">
                Full Stack Developer
              </h2>

              <p className="home-description">
                I build web applications using modern web technologies.
              </p>

              <div className="home-actions">
                <Button className="btn-neon" onClick={()=>navigate("/contact")}>Contact Me</Button>
                <Button className="btn-outline-neon" onClick={()=>navigate("/projects")}>View Projects</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <h1>Hi, I'am Charmee Paneliya</h1>
      <h2>Full Stack Developer</h2>
      <p> I build web applications using modern web technologies.</p>

      <button onClick={()=>navigate("/contact")}>Contact Me</button>
      <button onClick={()=>navigate("/projects")}>View Projects</button> */}
    </>
  )
}

export default Home;
