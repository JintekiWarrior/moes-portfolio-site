import React, { Fragment, useState } from 'react'
import './AboutMe.scss'
import { aboutMeDict } from './AboutMeContent'

// This component will have 6 buttons with different headings about me. When
// a button is clicked the content will update with a different explanation.
const AboutMe = () => {

  const [content, setContent] = useState({ name: '', body: '' })

  const buttonEvent = (e) => {
    e.preventDefault()
    setContent({
      name: aboutMeDict[e.target.name].name,
      body: aboutMeDict[e.target.name].content
    })
  }

  return (
    <div id="aboutMe-container">
      <div id="aboutMe-button-container">
        <button className="aboutMe-button" name="myStory" onClick={buttonEvent}>My Story</button>
        <button className="aboutMe-button" name="programmingCareer" onClick={buttonEvent}>Programming Career</button>
        <button className="aboutMe-button" name="education" onClick={buttonEvent}>Education</button>
        <button className="aboutMe-button" name="hobbies" onClick={buttonEvent}>Hobbies</button>
        <button className="aboutMe-button" name="favoriteBooks" onClick={buttonEvent}>Favorite Books</button>
        <button className="aboutMe-button" name="favoriteMovies" onClick={buttonEvent}>Favorite Movies</button>
      </div>
      <div id="content-container">
        <h3>{content.name}</h3>
        <p>{content.body}</p>
      </div>
    </div>
  )
}

export default AboutMe
