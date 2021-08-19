import React, { Fragment } from 'react'
import './Projects.scss'
import TextBox from './../../style-components/TextBox'
// import image1 from './images/beats-by-dwight.PNG'
// import image2 from './images/quiz-crafter.PNG'
// import image3 from './images/story-time.PNG'
import { projectContent } from './ProjectsContent'

const Projects = () => {

  return (
    <Fragment>
      <h2 id="projects-heading">Projects</h2>
      {projectContent.map(project => (
        <div id="project-container" key={project.id}>
          <div id="content-container">
            <TextBox id="project-text-box">
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <p>{project.frontTools}</p>
              <p>{project.backTools}</p>
            </TextBox>
          </div>
          <div id="image-container">
            <a href={project.link}>
              <img id="project-image" src={project.image} alt={project.summary} />
            </a>
          </div>
        </div>
      ))}
    </Fragment>
  )
}

export default Projects
