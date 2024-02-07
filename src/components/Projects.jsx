import PropTypes from "prop-types";

export default function Projects(props) {
    return (
        
        <div className="container">
            <div className="row align-items-start">
                {props.projectsArray.map(project =>(
                    <div className="col border rounded m-2 pt-2" key={project.img}>
                        <img src={project.img}/><br/>
                        <a href="{project.repo}">Repo</a><br/>
                        <a href="{project.deployed}">Deployed</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

