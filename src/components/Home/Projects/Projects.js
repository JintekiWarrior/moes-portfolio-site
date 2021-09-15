import React, { Fragment } from 'react'
import './Projects.scss'
import { projectContent } from './ProjectsContent'

const Projects = () => {

  return (
    <Fragment>
      <h2 id="projects-heading">Projects</h2>
      <div id="projects-container">
      {projectContent.map(project => (
        <div id="project" key={project.id}>
          <div id="image-container">
            <a href={project.link}>
              <img id="project-image" src={project.image} alt={project.summary} />
            </a>
          </div>
          <div id="project-content-container">
            <h3 id="project-heading">{project.name}</h3>
            <p id="project-content">{project.summary}</p>
          </div>
        </div>
      ))}
      </div>
    </Fragment>
  )
}

export default Projects
