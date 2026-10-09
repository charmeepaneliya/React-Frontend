import { useParams, useNavigate } from "react-router-dom";
import {projects} from "../data/Projects-data.jsx";

const ProjectDetails = () =>{
    const {id} = useParams();
    const navigate = useNavigate();

    const project = projects.find((item)=>item.id === id);

    if(!project){
        return (
            <>
            <h1>Project Not Found</h1>

            <button onClick={()=>navigate("/projects")}>Back to Projects</button>
            </>
        )
    }

    return(
        <>
            {/* <h1>Project Details </h1>
            <h2>Project ID: {id}</h2> */}
             <button onClick={()=>navigate("/projects")}>Back to Projects</button>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <h3>Technologies</h3>

            {project.technologies.map((tech)=>(
                <span key={tech}>{tech}{""}</span>
            ))}

            <br/>
            <br/>

            <button onClick={()=>navigate(-1)}>Go Back</button>
        </>
    )
}

export default ProjectDetails;