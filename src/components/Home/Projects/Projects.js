import React, { Fragment } from 'react'
import './Projects.scss'
import TextBox from './../../style-components/TextBox'
import image1 from './images/beats-by-dwight.PNG'
import image2 from './images/quiz-crafter.PNG'
import image3 from './images/story-time.PNG'

const Projects = () => {
  return (
    <Fragment>
      <div id="project-image-container">
        <div className="project-content">
          <TextBox style={{ width: "100%"}}>
          </TextBox>
          <a href="https://jintekiwarrior.github.io/Story_Time_Frontend/">
            <img className="project-image" src={image3} />
          </a>
        </div>
        <div className="project-content">
          <TextBox style={{ width: "100%"}}>
          </TextBox>
          <a href="https://jintekiwarrior.github.io/createQuiz-client/">
            <img className="project-image" src={image2} />
          </a>
        </div>
        <div className="project-content">
          <TextBox style={{ width: "100%"}}>
          </TextBox>
          <a href="https://boo-leans.github.io/eCommerce-client/">
            <img className="project-image" src={image1} />
          </a>
        </div>
      </div>
    </Fragment>
  )
}

export default Projects
