import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Project({ project }) {
    return (
        <li className="project my-4">
            <div className="demo">
                <img className='project-img' src={project.src} alt="project-demo" />
            </div>
            <div className="overlay d-flex align-items-center ps-4">
                <a className='me-3 fs-3 fw-bold' href={project.appLink} target='_blank'>{project.title}</a>
                <a className='social-icon' href={project.gitHub} target='_blank'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </li>
    );
}

export default Project;