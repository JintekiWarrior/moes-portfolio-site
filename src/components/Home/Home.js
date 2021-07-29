import React, { Fragment } from 'react'
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
      <div id="home-page-container">>
        <h1 id="home-page-heading">Full Stack Web Developer</h1>
        <div id="home-page-picture"></div>
        <div id="home-aboutme-container">
          <h2 id="about-me-heading">About Me</h2>
          <div id="about-me-paragraph-container">
            <p id="about-me-paragraph">Hello I am a junior web developer looking to get their foot in
            an amazing industry. I have been studying and coding for 8 months now.
            I have learnt a ton and continue to do so however feel it's time to put
            my skills to the test. Unsure yet of what industry I am willing to work
            in so as long as it allows coding and pays decent I will take the position.</p>
          </div>
        </div>
        <div id="home-technologies-container">
          <h2 id="technologies-heading">Technologies</h2>
          <div id="logo-container">
            <img className="home-logo" src={htmlLogo} alt="HTML Logo"/>
            <img className="home-logo" src={cssLogo} alt="CSS Logo"/>
            <img className="home-logo" src={jsLogo} alt="Javascript Logo"/>
            <img className="home-logo" src={reactLogo} alt="React Logo"/>
            <img className="home-logo" src={mongoLogo} alt="mongodb Logo"/>
            <img className="home-logo" src={nodeJsLogo} alt="nodeJs Logo"/>
          </div>
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
