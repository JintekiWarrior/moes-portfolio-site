import React, { Fragment } from 'react'
import AboutMe from './AboutMe/AboutMe'
import Technologies from './Technologies/Technologies'
import Projects from './Projects/Projects'
import './Home.scss'

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
        <div id="home-project-container">
          <h2>Projects</h2>
          <Projects />
        </div>
      </div>
    </Fragment>
  )
}

export default Home
