import React from 'react'
import './Technologies.scss'

const Technologies = () => {
  return (
    <div id="technologies-lists-container">
      <div className="technologies-list">
        <h3>Front End Technologies</h3>
        <p className="technologies-paragraphs">Javascript: React / Redux / Jquery / Ajax / Curl-script</p>
        <p className="technologies-paragraphs">CSS: Bootstrap / SASS</p>
        <p className="technologies-paragraphs">HTML</p>
      </div>
      <div className="technologies-list">
        <h3>Back End Technologies</h3>
        <p className="technologies-paragraphs">NodeJS: express / MongoDB / Mongoose</p>
        <p className="technologies-paragraphs">Python: Django / PostgreSQL</p>
      </div>
    </div>
  )
}

export default Technologies
