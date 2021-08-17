import React, { Fragment } from 'react'
import './Projects.scss'
import TextBox from './../../style-components/TextBox'
import image1 from './images/beats-by-dwight.PNG'
import image2 from './images/quiz-crafter.PNG'
import image3 from './images/story-time.PNG'
import { projectContent } from './ProjectsContent'

const Projects = () => {

  return (
    <Fragment>
      <h2 id="projects-heading">Projects</h2>
      <div id="project-image-container">
        <div className="project-content">
          <TextBox style={{ width: "100%"}}>
            <h3 className="text-heading">{projectContent.storyTime.name}</h3>
            <p>{projectContent.storyTime.summary}</p>
            <p>{projectContent.storyTime.frontTools}</p>
            <p>{projectContent.storyTime.backTools}</p>
          </TextBox>
          <a href="https://jintekiwarrior.github.io/Story_Time_Frontend/">
            <img className="project-image" src={image3} alt="story time page" />
          </a>
        </div>
        <div className="project-content">
          <TextBox style={{ width: "100%"}}>
            <h3 className="text-heading">{projectContent.quizCrafter.name}</h3>
            <p>{projectContent.quizCrafter.summary}</p>
            <p>{projectContent.quizCrafter.frontTools}</p>
            <p>{projectContent.quizCrafter.backTools}</p>
          </TextBox>
          <a href="https://jintekiwarrior.github.io/createQuiz-client/">
            <img className="project-image" src={image2} alt="create quiz page" />
          </a>
        </div>
        <div className="project-content">
          <TextBox style={{ width: "100%"}}>
            <h3 className="text-heading">{projectContent.ecommerceSite.name}</h3>
            <p>{projectContent.ecommerceSite.summary}</p>
            <p>{projectContent.ecommerceSite.frontTools}</p>
            <p>{projectContent.ecommerceSite.backTools}</p>
          </TextBox>
          <a href="https://boo-leans.github.io/eCommerce-client/">
            <img className="project-image" src={image1} alt="ecommerce site" />
          </a>
        </div>
      </div>
    </Fragment>
  )
}

export default Projects
