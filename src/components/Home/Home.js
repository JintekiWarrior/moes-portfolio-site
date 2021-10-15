import './Home.scss'
import React from 'react'
import Heading from './Heading/Heading'
import AboutMe from './AboutMe/AboutMe'
import Projects from './Projects/Projects'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div id="home-page-container">
      <div id="home-description-container">
        <Heading />
      </div>
      <div id="home-aboutme-container">
        <AboutMe />
      </div>
      <div id="home-project-container">
        <Projects />
      </div>
      <div id="footer-container">
        <Footer />
      </div>
    </div>
  )
}

export default Home
