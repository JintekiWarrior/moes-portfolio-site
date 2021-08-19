import './Technologies.scss'
import React from 'react'
import TextBox from './../../style-components/TextBox'
import { technologyContent } from './technologyContent'


const Technologies = () => {

  return (
    <div id="tech-container">
      <TextBox>
        <div id="technologies-lists-container">
          <h2 id="tech-heading">Technologies</h2>
          <hr />
          {technologyContent.map(tech => (
            <p id="tech-text" key={tech}>{tech}</p>
          ))}
        </div>
      </TextBox>
    </div>
  )
}

export default Technologies
