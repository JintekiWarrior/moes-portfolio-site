import React, { Fragment } from 'react'
import './AboutMe.scss'
import { aboutMeDict } from './AboutMeContent'
import portfolioPic from './portfolio-pic.jpg'

// This component will have 6 buttons with different headings about me. When
// a button is clicked the content will update with a different explanation.
const AboutMe = () => {

  return (
    <Fragment>
      <div id="aboutMe-content-container">
        <div id="aboutMe-picture">
          <img id="portfolioPic" src={portfolioPic} alt="Picture of me" />
        </div>
        <div id="content-container">
          <h2 id="aboutMe-heading">About Me</h2>
          <div id="aboutMe-para-container">
            <p id="aboutMe-content">{aboutMeDict.myStory.content}</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default AboutMe

//
// <div id="icon-container">
//   <a href="https://github.com/JintekiWarrior"><i className="github icon"></i></a>
//   <a href="https://www.linkedin.com/in/moe-yassine"><i className="linkedin icon"></i></a>
// </div>
