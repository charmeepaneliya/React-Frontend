import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { projects } from "../data/Projects-data";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

const Projects = ({ id, showViewAll = false }) => {
  const visibleProjects = showViewAll ? projects.slice(0, 3) : projects;

  return (
    <section className="projects-section" id={id}>
      <Container>
        {/* Page heading */}
        <p className="section-eyebrow">my work</p>
        <h1 className="section-title">
          Featured <span>Projects</span>
        </h1>
        <span className="gradient-line" aria-hidden="true"></span>
        <p className="section-desc">
          A selection of projects I&apos;ve built — each one a chance to solve
          a real problem and learn something new.
        </p>

        {/* Project cards grid */}
        <Row className="g-4">
          {visibleProjects.map((project) => (
            <Col key={project.id} lg={4} md={6} xs={12}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>

        {showViewAll && (
          <div className="d-flex justify-content-center mt-5">
            <Button
              as={Link}
              to="/projects"
              className="btn-outline-neon"
            >
              View All Projects
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Projects;
