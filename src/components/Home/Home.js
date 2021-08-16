import './Home.scss'
import React, { Fragment } from 'react'
import Heading from './Heading/Heading'
import AboutMe from './AboutMe/AboutMe'
import Technologies from './Technologies/Technologies'
import Projects from './Projects/Projects'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <Fragment>
      <div id="home-description-container">
        <Heading />
      </div>
      <div id="home-aboutme-container">
        <AboutMe />
        <Technologies />
      </div>
      <div id="home-project-container">
        <h2 id="projects-heading">Projects</h2>
        <Projects />
      </div>
      <div id="footer-container">
        <Footer />
      </div>
    </Fragment>
  )
}

export default Home
