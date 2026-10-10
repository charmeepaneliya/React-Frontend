import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="home-section" id="home">
        <Container>
          <Row className="align-items-center g-5">

          {/* ── Left: Hero Text ── */}
          <Col lg={7} md={12}>
            {/* Eyebrow code label */}
            <p className="home-eyebrow">&lt;Full Stack Developer /&gt;</p>
            <br/>
            {/* Available status badge */}
            <div className="home-status">
              <span className="status-dot" aria-hidden="true"></span>
              Available for opportunities
            </div>

            {/* Main Heading */}
            <h1 className="home-title">
              Hi, I&apos;m{" "}
              <span className="name-gradient">Charmee Paneliya</span>
            </h1>

            {/* Role */}
            <h2 className="home-subtitle">Full Stack Developer</h2>

            {/* Short intro */}
            <p className="home-description">
              I build modern web applications with clean code and thoughtful
              design — from backend APIs to polished user interfaces.
            </p>

            {/* CTA Buttons — preserve existing useNavigate logic */}
            <div className="home-actions">
              <Button
                className="btn-neon"
                onClick={() => navigate("/contact")}
                aria-label="Go to contact page"
              >
                Contact Me
              </Button>
              <Button
                className="btn-outline-neon"
                onClick={() => navigate("/projects")}
                aria-label="View my projects"
              >
                View Projects
              </Button>
            </div>
          </Col>

          {/* ── Right: Code Editor Panel ── */}
          <Col lg={5} md={10} className="home-code-panel">
            <div className="code-editor" role="img" aria-label="Code snippet showcase">
              {/* Titlebar */}
              <div className="code-editor__titlebar">
                <div className="code-editor__dots">
                  <span className="dot-red"   aria-hidden="true"></span>
                  <span className="dot-yellow" aria-hidden="true"></span>
                  <span className="dot-green"  aria-hidden="true"></span>
                </div>
                <span className="code-editor__filename">developer.js</span>
              </div>

              {/* Code body */}
              <div className="code-editor__body">
                <div className="code-line">
                  <span className="code-line-content">
                    <span className="c-comment">// Charmee Paneliya — Portfolio</span>
                  </span>
                </div>

                <div className="code-line">
                  <span className="code-line-content"> </span>
                </div>

                <div className="code-line">
                  <span className="code-line-content">
                    <span className="c-const">const</span>{" "}
                    <span className="c-accent">developer</span>{" "}
                    <span className="c-punc">= </span>
                    <span className="c-bracket">{"{"}</span>
                  </span>
                </div>

                <div className="code-line">
                  <span className="code-line-content">
                    {"  "}<span className="c-prop">name</span>
                    <span className="c-punc">: </span>
                    <span className="c-string">&quot;Charmee Paneliya&quot;</span>
                    <span className="c-punc">,</span>
                  </span>
                </div>

                <div className="code-line">
                  <span className="code-line-content">
                    {"  "}<span className="c-prop">role</span>
                    <span className="c-punc">: </span>
                    <span className="c-string">&quot;Full Stack Developer&quot;</span>
                    <span className="c-punc">,</span>
                  </span>
                </div>

                <div className="code-line">
                  <span className="code-line-content">
                    {"  "}<span className="c-prop">stack</span>
                    <span className="c-punc">: [</span>
                    <span className="c-string">&quot;React&quot;</span>
                    <span className="c-punc">, </span>
                    <span className="c-string">&quot;Node.js&quot;</span>
                    <span className="c-punc">, </span>
                    <span className="c-string">&quot;MongoDB&quot;</span>
                    <span className="c-punc">],</span>
                  </span>
                </div>

                <div className="code-line">
                  <span className="code-line-content">
                    {"  "}<span className="c-prop">available</span>
                    <span className="c-punc">: </span>
                    <span className="c-value">true</span>
                    <span className="c-punc">,</span>
                  </span>
                </div>

                <div className="code-line">
                  <span className="code-line-content">
                    <span className="c-bracket">{"}"}</span>
                    <span className="c-punc">;</span>
                  </span>
                </div>

                <div className="code-line">
                  <span className="code-line-content"> </span>
                </div>

                <div className="code-line">
                  <span className="code-line-content">
                    <span className="c-const">function</span>{" "}
                    <span className="c-cyan">buildSomethingAwesome</span>
                    <span className="c-bracket">()</span>{" "}
                    <span className="c-bracket">{"{"}</span>
                  </span>
                </div>

                <div className="code-line">
                  <span className="code-line-content">
                    {"  "}<span className="c-keyword">return</span>{" "}
                    <span className="c-string">&quot;Let&apos;s collaborate!&quot;</span>
                    <span className="c-punc">;</span>
                    <span className="code-cursor" aria-hidden="true"></span>
                  </span>
                </div>

                <div className="code-line">
                  <span className="code-line-content">
                    <span className="c-bracket">{"}"}</span>
                  </span>
                </div>
              </div>
            </div>
          </Col>

          </Row>
        </Container>
      </section>
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" showViewAll />
      <Experience id="experience" />
      <Testimonials id="testimonials" />
      <Contact id="contact" />
    </>
  );
};

export default Home;
