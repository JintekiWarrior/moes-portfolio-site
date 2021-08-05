import React from 'react'
import './Technologies.scss'
import TextBox from './../../style-components/TextBox'

const Technologies = () => {

  const boxStyle = {
    width: '100rem',
    margin: '2rem'
  }

  return (
    <div id="technologies-lists-container">
      <TextBox style={boxStyle}>
        <h3>Front End Technologies</h3>
        <p className="technologies-paragraphs">Javascript: React / Redux / Jquery / Ajax / Curl-script</p>
        <p className="technologies-paragraphs">CSS: Bootstrap / SASS</p>
        <p className="technologies-paragraphs">HTML</p>
      </TextBox>
      <TextBox style={boxStyle}>
        <h3>Back End Technologies</h3>
        <p className="technologies-paragraphs">NodeJS: express / MongoDB / Mongoose</p>
        <p className="technologies-paragraphs">Python: Django / PostgreSQL</p>
      </TextBox>
    </div>
  )
}

export default Technologies
