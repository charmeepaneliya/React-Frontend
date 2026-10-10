import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { projects } from "../data/Projects-data.jsx";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((item) => item.id === id);

  /* ── Not found state ── */
  if (!project) {
    return (
      <section className="project-not-found">
        <Container>
          <p className="section-eyebrow">404</p>
          <h1>Project Not Found</h1>
          <p>The project you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <button
            className="btn-neon"
            onClick={() => navigate("/projects")}
            aria-label="Back to Projects"
          >
            ← Back to Projects
          </button>
        </Container>
      </section>
    );
  }

  return (
    <section className="project-details-section">
      <Container>
        {/* Back button — preserves useNavigate behavior */}
        <button
          className="project-details__back"
          onClick={() => navigate("/projects")}
          aria-label="Back to Projects"
        >
          ← Back to Projects
        </button>

        {/* Header */}
        <div className="project-details__header">
          <p className="project-details__id">
            <span style={{ fontFamily: "var(--font-mono)", color: "var(--accent-primary)" }}>
              ~/projects/
            </span>
            {project.id}
          </p>
          <h1 className="project-details__title">{project.title}</h1>
        </div>

        {/* Body */}
        <div className="project-details__body">
          <p className="project-details__desc">{project.description}</p>

          {/* Technologies */}
          <p className="project-details__tech-label">// Technologies Used</p>
          <div className="project-details__tech-list">
            {project.technologies.map((tech) => (
              <span key={tech} className="project-details__tech-badge">
                {tech}
              </span>
            ))}
          </div>

          {/* Action links */}
          <div className="project-details__actions">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-neon"
                aria-label={`GitHub repository for ${project.title}`}
              >
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon"
                aria-label={`Live demo for ${project.title}`}
              >
                Live Demo ↗
              </a>
            )}
            {/* Go Back preserves useNavigate(-1) behavior */}
            <button
              className="project-details__back"
              onClick={() => navigate(-1)}
              aria-label="Go back"
              style={{ margin: 0 }}
            >
              ← Go Back
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectDetails;