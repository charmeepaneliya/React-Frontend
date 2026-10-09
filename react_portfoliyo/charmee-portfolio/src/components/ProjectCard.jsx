import {Link} from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({project})=>{
    return(
        <>
            <div className="project-card">
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <div className="project-card_technologies">
                    {project.technologies.map((tech)=>(
                        <span key={tech}>{tech}</span>
                    ))}
                </div>

                <Link to={`/projects/${project.id}`}>View Project → </Link>
            </div>
        </>
    )
}
export default ProjectCard;