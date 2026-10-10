import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

const About = ({ id }) => {
  return (
    <section className="about-section" id={id}>
      <Container>
        <Row className="g-5">

          {/* ── Left column: intro + cards ── */}
          <Col lg={6} md={12}>
            <p className="section-eyebrow">about me</p>
            <h1 className="section-title">
              Who I <span>Am</span>
            </h1>
            <span className="gradient-line" aria-hidden="true"></span>

            <p className="about-intro">
              I&apos;m <strong>Charmee Paneliya</strong>, a passionate Full Stack
              Developer who loves building web applications that are both
              functional and visually clean. I enjoy working across the entire
              stack — from designing RESTful APIs to crafting responsive
              front-end interfaces.
            </p>

            {/* Highlight cards */}
            <div className="about-cards">
              <div className="about-card">
                <div className="about-card__icon">💻</div>
                <p className="about-card__label">Focus</p>
                <p className="about-card__value">Full Stack Dev</p>
              </div>
              <div className="about-card">
                <div className="about-card__icon">⚡</div>
                <p className="about-card__label">Current Stack</p>
                <p className="about-card__value">React + Node.js</p>
              </div>
              <div className="about-card">
                <div className="about-card__icon">🎓</div>
                <p className="about-card__label">Learning</p>
                <p className="about-card__value">Always</p>
              </div>
              <div className="about-card">
                <div className="about-card__icon">🌍</div>
                <p className="about-card__label">Status</p>
                <p className="about-card__value">Available</p>
              </div>
            </div>
          </Col>

          {/* ── Right column: mindset + interests ── */}
          <Col lg={6} md={12}>
            <div className="about-mindset">
              <p>
                My journey into development started with curiosity — wanting to
                understand how websites work under the hood. That curiosity grew
                into a genuine love for writing clean, maintainable code and
                solving real problems through technology.
              </p>
              <p>
                I believe good software is not just about making things work —
                it&apos;s about making them work <strong style={{ color: "var(--accent-primary)" }}>elegantly</strong>.
                I pay attention to structure, readability, and user experience
                in everything I build.
              </p>
            </div>

            <div className="about-interests">
              <p className="about-interests-title">Technical Interests</p>
              <ul className="about-interests-list">
                <li>Web Application Development</li>
                <li>RESTful API Design</li>
                <li>React &amp; Component Architecture</li>
                <li>Database Design</li>
                <li>Authentication &amp; Security</li>
                <li>Responsive UI/UX</li>
              </ul>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default About;
