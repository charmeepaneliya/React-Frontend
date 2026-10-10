import { Container, Row, Col } from "react-bootstrap";
import "./Skills.css";

/* ── Skill data organized by category ── */
const skillCategories = [
  {
    id: "frontend",
    icon: "🖥️",
    title: "Frontend Development",
    subtitle: "client-side.js",
    variant: "green",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "React Bootstrap"],
  },
  {
    id: "backend",
    icon: "⚙️",
    title: "Backend Development",
    subtitle: "server-side.js",
    variant: "cyan",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    id: "database",
    icon: "🗄️",
    title: "Database",
    subtitle: "data-layer.db",
    variant: "purple",
    skills: ["MongoDB", "Mongoose"],
  },
  {
    id: "tools",
    icon: "🛠️",
    title: "Tools & Workflow",
    subtitle: "devops.sh",
    variant: "orange",
    skills: ["Git", "GitHub", "VS Code", "Vite", "npm"],
  },
];

const Skills = ({ id }) => {
  return (
    <section className="skills-section" id={id}>
      <Container>
        {/* Page heading */}
        <p className="section-eyebrow">technical skills</p>
        <h1 className="section-title">
          My <span>Tech Stack</span>
        </h1>
        <span className="gradient-line" aria-hidden="true"></span>
        <p className="section-desc">
          Technologies and tools I work with to build full stack web applications.
        </p>

        {/* Category cards grid */}
        <Row className="g-4">
          {skillCategories.map((cat) => (
            <Col key={cat.id} lg={6} md={6} sm={12}>
              <div className="skill-category">
                {/* Header */}
                <div className="skill-category__header">
                  <span className="skill-category__icon" aria-hidden="true">
                    {cat.icon}
                  </span>
                  <div>
                    <p className="skill-category__title">{cat.title}</p>
                    <p className="skill-category__subtitle">
                      <span style={{ color: "var(--accent-primary)", fontFamily: "var(--font-mono)" }}>
                        {"// "}
                      </span>
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                <div className="skill-category__divider" aria-hidden="true"></div>

                {/* Badges */}
                <div className="skill-badges">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`skill-badge skill-badge--${cat.variant}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
