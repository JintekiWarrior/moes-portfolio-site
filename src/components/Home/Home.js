import React, { Fragment } from 'react'
import AboutMe from './AboutMe/AboutMe'
import Technologies from './Technologies/Technologies'
import './Home.scss'
import reactLogo from './images/react-logo.png'
import htmlLogo from './images/html-logo.png'
import cssLogo from './images/css-logo.png'
import jsLogo from './images/js-logo.png'
import mongoLogo from './images/mongodb-logo.png'
import nodeJsLogo from './images/nodeJs-logo.png'


const Home = () => {
  return (
    <Fragment>
      <div id="home-page-container">
        <h1 id="home-page-heading">My Portfolio Site</h1>
        <div id="home-description-container">
          <h3 id="home-description-heading">Moe Yassine <br />
          <span id="home-description-content">Full Stack Developer/ Software Engineer</span></h3>
          <div id="home-page-picture"></div>
        </div>
        <div id="home-aboutme-container">
          <h2 id="about-me-heading">About Me</h2>
          <div id="about-me-container">
            <AboutMe />
          </div>
        </div>
        <div id="home-techno-container">
          <h2>Technologies</h2>
          <Technologies />
        </div>
        <h2 id="home-project-heading">Personal Projects</h2>
        <a className="project-link" href="https://jintekiwarrior.github.io/createQuiz-client/">Quiz Crafter</a>
        <a className="project-link" href="https://boo-leans.github.io/eCommerce-client/">Beats by Dwight</a>
        <a className="project-link" href="https://jintekiwarrior.github.io/Story_Time_Frontend/">Story Time</a>
      </div>
    </Fragment>
  )
}

export default Home
