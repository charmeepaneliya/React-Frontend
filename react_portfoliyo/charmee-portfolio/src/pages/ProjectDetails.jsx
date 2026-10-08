import { useParams } from "react-router-dom";
import {projects} from "../data/projects";

const ProjectDetails = () =>{
    const {id} = useParams();

    const project = projects.find((item)=>item.id === id);

    if(!projects){
        return <h1>Project Not Found</h1>
    }

    return(
        <>
            {/* <h1>Project Details </h1>
            <h2>Project ID: {id}</h2> */}

            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <h3>Technologies</h3>

            {projects.technologies.map((tech)=>(
                <span key={tech}>{tech}{""}</span>
            ))}
        </>
    )
}

export default ProjectDetails;