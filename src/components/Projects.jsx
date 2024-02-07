import PropTypes from "prop-types";

export default function Projects(props) {
    return (
        <ul>
            {props.projectsArray.map(project =>(
                <li key={project.img}>
                    <img src={project.img}/>
                    <a href="{project.repo}">Repo</a>
                    <a href="{project.deployed}">Deployed</a>
                </li>

            ))}
        </ul>
    )
}