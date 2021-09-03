import './Home.scss'
import React, { Fragment } from 'react'
import Heading from './Heading/Heading'
import Navbar from './Navbar/Navbar'
import AboutMe from './AboutMe/AboutMe'
import Technologies from './Technologies/Technologies'
import Projects from './Projects/Projects'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <Fragment>
      <div id="home-page-container">
        <div id="home-description-container">
          <Heading />
        </div>
        <div id="home-aboutme-container">
          <AboutMe />
          <Technologies />
        </div>
        <div id="home-project-container">
          <Projects />
        </div>
        <div id="footer-container">
          <Footer />
        </div>
      </div>
    </Fragment>
  )
}

export default Home
