import { Link } from "react-router-dom";
import { projects } from "../data/Projects-data";

const Projects = () => {
  return (
    <>
      <h1>Project page</h1>
      {/* <Link to="/projects/local-hub">Local-Hub</Link><br/>
      <Link to="/projects/to-do-list">ToDo List</Link><br/>
      <Link to="/projects/portfolio">Portfolio</Link><br/> */}

      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>

          <Link to={`/projects/${project.id}`}>View Project</Link>
        </div>
      ))}
    </>
  );
};

export default Projects;
