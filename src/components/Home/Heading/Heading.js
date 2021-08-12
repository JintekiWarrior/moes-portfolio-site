import React from 'react'
import './Heading.scss'
import portfolioPic from './portfolio-pic.jpg'

const Heading = () => {
  return (
    <div id="heading-container">
      <div id="home-page-picture">
        <img id="portfolio-pic" src={portfolioPic} alt="Me" />
      </div>
    </div>
  )
}

export default Heading
