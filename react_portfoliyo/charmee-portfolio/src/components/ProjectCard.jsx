import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-card__visual" aria-hidden="true">
        <div className="project-card__preview">
          <span className="project-card__preview-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="project-card__preview-label">&lt; {project.title} /&gt;</span>
          <span className="project-card__preview-lines">
            <i />
            <i />
            <i />
          </span>
        </div>
      </div>

      <div className="project-card__body">
        <div className="project-card__top">
          <span className="project-card__id">#{project.id}</span>
        </div>

        <h2 className="project-card__title">{project.title}</h2>
        <p className="project-card__desc">{project.description}</p>

        <div className="project-card__technologies" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-card__tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card__footer">
          <Link
            to={`/projects/${project.id}`}
            className="project-card__details-link"
            aria-label={`View details for ${project.title}`}
          >
            Details
          </Link>

          <div className="project-card__links">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__ext-link project-card__ext-link--primary"
              aria-label={`Live demo for ${project.title}`}
            >
              Live Demo <span aria-hidden="true">↗</span>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__ext-link project-card__ext-link--secondary"
              aria-label={`GitHub repository for ${project.title}`}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;